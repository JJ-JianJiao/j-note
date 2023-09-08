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
    }
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