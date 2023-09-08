import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
// import searchResultsView from './views/searchResultView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

// import icons from '../img/icons.svg'; //Parcel 1
// import icons from 'url:../img/icons.svg'; //Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';

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

const renderSearchResults = function (page = 1) {  
  //render recipes 
  resultsView.render(model.getSearchResultsPage(page));
  //render paginations
  paginationView.render(model.state.search);
}

const inital = function(){
  //hide searchResultBarBtns
  // hideSearchResultsBarBtns();
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);

  // searchResultsView.init();
};

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
    //Loading recipe
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    //Rendering recipe
    // console.log(model.state.recipe);
    recipeView.render(model.state.recipe)
  }catch(err){
    recipeView.renderError();
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
  recipeView.render(model.state.recipe)
}


inital();

const clearRecipeContainer = function(){
  recipeContainer.innerHTML = "";
};

// showRecipe("5ed6604591c37cdc054bcc13");