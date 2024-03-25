import { async } from 'regenerator-runtime';
import {API_URL, KEY} from './config.js';
import {RES_PER_PAGE} from './config.js';
// import {getJSON, sendJSON} from './helpers';
import {AJAX} from './helpers';

export const state = {
    recipe:{},
    search:{
        query:'',
        results:[],
        resultsPerPage:RES_PER_PAGE,
        page:1
    },
    bookmarks:[],
};

const createRecipeObject = function (data) {  
    const {recipe} = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...(recipe.key && {key: recipe.key}),
    };
}

export const loadRecipe = async function (id) {  
    try{
        const url = `${API_URL}${id}?key=${KEY}`;
        const data = await AJAX(url);
        state.recipe = createRecipeObject(data);
        if(state.bookmarks.some(bk => bk.id === state.recipe.id)){
            state.recipe.bookmarked = true;
        }else{
            state.recipe.bookmarked = false;
        }
    }catch(err){
        throw err;
    }
}

export const loadSearchResults = async function (query) {  
    try {
        const url = `${API_URL}?search=${query}&key=${KEY}`;
        const data = await AJAX(url);
        state.search.query = query;
        state.search.results = data.data.recipes.map(rec=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...(rec.key && {key: rec.key}),
            };
        });
        state.search.page = 1;
    } catch (error) {
        throw err;
    }
}

export const getSearchResultsPage = function (page = state.search.page) {  
    state.search.page = page;
    const start = (+page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
}

export const updateServings = function (newServings) {  
    // state.recipe.ingredients = state.recipe.ingredients.map(ing => ing.quantity * newServings);
    
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = ing.quantity / state.recipe.servings * newServings;
    });
    state.recipe.servings = newServings;
}

const persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookmark = function (recipe) {  
    // if(state.bookmarks.find(bk => bk.id === recipe.id)){
    //     state.recipe.bookmarked = false;  
    //     state.bookmarks = state.bookmarks.filter(bk => bk.id !== recipe.id);  
    //     return;
    // }
    //Add bookmark
    state.bookmarks.push(recipe);

    //mark current recipe as bookmark
    if(recipe.id === state.recipe.id){
        state.recipe.bookmarked = true;
    }
    persistBookmarks();
}

export const deleteBookmark = function (id) {
    //delete bookmark
    const index = state.bookmarks.findIndex(el => el.id === id);  
    state.bookmarks.splice(index,1);
    //mark current recipe as bookmark
    if(id === state.recipe.id){
        state.recipe.bookmarked = false;
    }
    persistBookmarks();

}

const init = function(){
    const storage = localStorage.getItem('bookmarks');
    if(storage) state.bookmarks = JSON.parse(storage);
}   

init();

const clearBookmarks = function () {  
    localStorage.clear('bookmarks');
}
// clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
    try{
        console.log(Object.entries(newRecipe));
        const ingredients = Object.entries(newRecipe).filter(entry=>{
            console.log(entry);
            // return entry[0].includes("ingredient") && entry[1] != "";
            return entry[0].startsWith("ingredient") && entry[1] != "";
        }).map(ingredient=>{

            //my way
            // const ingredientArr = ingredient[1].split(',');
            // console.log(ingredientArr);
            // const object = {};
            // object.description = ingredientArr[2];
            // object.quantity = ingredientArr[0];
            // object.unit = ingredientArr[1];
            // return object;

            //second way
            // const ingredientArr = ingredient[1].replaceAll(" ", "").split(",");
            const ingredientArr = ingredient[1].split(",").map(el=> el.trim());
            if(ingredientArr.length!== 3) {
                throw new Error("wrong ingredient format! Please use the correct format");
            }
            const [quantity,unit,description] = ingredient[1].replaceAll(" ", "").split(",");
            return {quantity: quantity? +quantity: null,unit,description}
        })
        console.log(ingredients);

        const recipe = {
            // id: newRecipe.id,
            title: newRecipe.title,
            publisher: newRecipe.publisher,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            servings: +newRecipe.servings,
            cooking_time: +newRecipe.cookingTime,
            ingredients,
        };

        console.log(recipe);
        const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
        console.log(data);
        state.recipe = createRecipeObject(data);
        console.log(state);
        addBookmark(state.recipe);
    }
    catch(err){
        throw err;
    }
    


}