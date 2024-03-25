import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
// import searchResultsView from './views/searchResultView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
// import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import {UPLOAD_RECIPE_WINDOW_CLOSE_SEC} from "./config";
// import icons from '../img/icons.svg'; //Parcel 1
// import icons from 'url:../img/icons.svg'; //Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

// if(module.hot){
//   module.hot.accept();
// }

// const prevBtn = document.querySelector('.pagination__btn--prev');
// const nextBtn = document.querySelector('.pagination__btn--next');
// console.log(searchResultBar,prevBtn,nextBtn);

// https://forkify-api.herokuapp.com/v2
// API key: 90dc691a-882e-4620-bdc8-edd5ed5dc4f0
//https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
//https://forkify-v2.netlify.app/#5ed6604591c37cdc054bcd09

///////////////////////////////////////

// console.log("Test");
// const searchRecipe = 'pizza';
const APIKey = '90dc691a-882e-4620-bdc8-edd5ed5dc4f0';

// const hideSearchResultsBarBtns = function () {  
//   prevBtn.style.display="none";
//   nextBtn.style.display="none";
// };

// const showSearchResultsBarBtns = function () {  
//   prevBtn.style.display="block";
//   nextBtn.style.display="block";
// };

// const setSearchResultsBarBtns = function (pre, next = pre + 2) {  
//   prevBtn.querySelector('span').textContent = `Page ${pre}`;
//   nextBtn.querySelector('span').textContent = `Page ${next}`;
// };

const controlPagination = function (page) {  
  // console.log('Pag controller');
  renderSearchResults(page);
}

const renderSearchResults = function (page) {  
  //render recipes 
  resultsView.render(model.getSearchResultsPage(page));
  //render paginations
  paginationView.render(model.state.search);
}

const controlBookmarks = function () {  
  bookmarksView.render(model.state.bookmarks);
}



// searchBtn.addEventListener('click',function (e) {  
//   e.preventDefault();
//   searchResultBar.innerHTML = '';
//   hideSearchResultsBarBtns();
//   const searchContent = document.querySelector('.search__field').value;
//   // console.log(searchContent);
//   controlSearchResults(searchContent);
// });



// const urlExample = `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
// const urlExample = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchRecipe}&key=${APIKey}`;
const controlSearchResults = async function(e){
  try{
    // Get search query
    const query = searchView.getQuery();
    if(!query) return;
    // load search results
    resultsView.renderSpinner();
    await model.loadSearchResults(query);

    //render results (my way)
    // searchResultsView.render(model.state.search.results);

    // course way
    // console.log('test hot module');
    renderSearchResults();
  }catch(err){
    console.log(err);
  }
};

const controlRecipes = async function () {  
  try{
    if(!window.location.hash) return;
    const id = window.location.hash.slice(1);

    //0) update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    // bookmarksView.update(model.state.bookmarks);
    
    // 1) update bookmark view
    bookmarksView.update(model.state.bookmarks);
    
    // 2) Loading recipe
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    // 3)Rendering recipe
    recipeView.render(model.state.recipe)

  }catch(err){
    recipeView.renderError();
    console.log(err);
  }
};

//Detect the recipe selected
//1. method 1: propagation 

// searchResultBar.addEventListener('click',function (e) {  
//   e.preventDefault;
//   e.stopPropagation;
//   // console.log(e.target);
//   const previewLink = e.target.closest('.preview__link');

//   if(previewLink){
//     document.querySelector('.preview__link--active')?.classList.remove('preview__link--active');
//     previewLink.classList.add(`preview__link--active`);
//     // console.dir(previewLink);
//     const id = previewLink.getAttribute('href');
//     // console.log(id);
//     // clearRecipeContainer();
//     showRecipe(id.slice(1));
//   }
// });

//2. hashchange event
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
const controlServings = function (newServings) {  
  //  Update the recipe servings (in state)
  model.updateServings(newServings);
  // Update the view
  // recipeView.render(model.state.recipe)
  recipeView.update(model.state.recipe)
}

const controlUpdateBookmark = function () { 
  //1) add/remove bookmarks
  if(model.state.recipe.bookmarked) {
    model.deleteBookmark(model.state.recipe.id);
  }
  else{
    model.addBookmark(model.state.recipe);
  }

  //2) update recipe view
  recipeView.update(model.state.recipe);

  //3) render bookmarks
  bookmarksView.render(model.state.bookmarks);
}

const clearRecipeContainer = function(){
  recipeContainer.innerHTML = "";
};


const controlAddRecipe = async function (newRecipe) {  
  try {
    //show loading spinner
    addRecipeView.renderSpinner();

    console.log(newRecipe);

    //Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    recipeView.render(model.state.recipe);
    
    //change id in the url
    window.history.pushState(null,"",`#${model.state.recipe.id}`);
    // window.history.back();
    // window.history.forward();
    
    addRecipeView.renderMessage();
    bookmarksView.render(model.state.bookmarks);

    setTimeout(function () {  
      addRecipeView.toogleRecipeWindow();
    }, UPLOAD_RECIPE_WINDOW_CLOSE_SEC * 1000);
  } catch (error) {
    addRecipeView.renderError(error.message);
  }

}
const inital = function(){
  //hide searchResultBarBtns
  // hideSearchResultsBarBtns();
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerRenderAddBookmark(controlUpdateBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  // searchResultsView.init();
};

inital();


// showRecipe("5ed6604591c37cdc054bcc13");