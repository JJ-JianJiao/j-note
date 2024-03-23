import {API_URL} from './config.js';
import {RES_PER_PAGE} from './config.js';
import {getJSON} from './helpers';

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

export const loadRecipe = async function (id) {  
    try{
        const url = `${API_URL}${id}`;
        const data = await getJSON(url);
        const {recipe} = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
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
        const url = `${API_URL}?search=${query}`;
        const data = await getJSON(url);
        state.search.query = query;
        state.search.results = data.data.recipes.map(rec=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
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

// init();

const clearBookmarks = function () {  
    localStorage.clear('bookmarks');
}
// clearBookmarks();