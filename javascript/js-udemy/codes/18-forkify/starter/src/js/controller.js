import * as model from './model.js';
import recipeView from './views/recipeView.js';

// import icons from '../img/icons.svg'; //Parcel 1
import icons from 'url:../img/icons.svg'; //Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';
console.log(icons);

const recipeContainer = document.querySelector('.recipe');
const searchBtn = document.querySelector('.search__btn');
const searchResultBar = document.querySelector('.search-results .results');
const prevBtn = document.querySelector('.pagination__btn--prev');
const nextBtn = document.querySelector('.pagination__btn--next');
// console.log(searchResultBar,prevBtn,nextBtn);

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2
// API key: 90dc691a-882e-4620-bdc8-edd5ed5dc4f0
//https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
//https://forkify-v2.netlify.app/#5ed6604591c37cdc054bcd09

///////////////////////////////////////

// console.log("Test");
// const searchRecipe = 'pizza';
const APIKey = '90dc691a-882e-4620-bdc8-edd5ed5dc4f0';

const hideSearchResultsBarBtns = function () {  
  prevBtn.style.display="none";
  nextBtn.style.display="none";
};

const showSearchResultsBarBtns = function () {  
  prevBtn.style.display="block";
  nextBtn.style.display="block";
};

const setSearchResultsBarBtns = function (pre, next = pre + 2) {  
  prevBtn.querySelector('span').textContent = `Page ${pre}`;
  nextBtn.querySelector('span').textContent = `Page ${next}`;
};

const inital = function(){
  //hide searchResultBarBtns
  hideSearchResultsBarBtns();
};

searchBtn.addEventListener('click',function (e) {  
  e.preventDefault();
  searchResultBar.innerHTML = '';
  hideSearchResultsBarBtns();
  const searchContent = document.querySelector('.search__field').value;
  // console.log(searchContent);
  const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchContent}&key=${APIKey}`;
  getRecipes(url);
});

inital();

// const urlExample = `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
// const urlExample = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchRecipe}&key=${APIKey}`;
const getRecipes = async function(url){
  try{
    recipeView.renderSpinner();
    const res = await fetch(url);
    const data = await res.json();
    if(data.status !== 'success' || data.data.recipes.length === 0)
      throw new Error('Get recipe results fail ❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹');
    const recipeData = data.data.recipes;
    // console.log(recipeData);
    const svgUser = `${icons}#icon-user`;
    searchResultBar.innerHTML= "";
    for(let i = 0; i <=9; ++i){
      // console.log(recipeData[i]);
      //preview__link--active
      const searchBarItemHtml = `
        <li class="preview">
          <a class="preview__link" href="#${recipeData[i].id}">
            <figure re class="preview__fig">
              <img src="${recipeData[i].image_url}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${recipeData[i].title}</h4>
              <p class="preview__publisher">${recipeData[i].publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="${svgUser}"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      `;
      searchResultBar.insertAdjacentHTML('beforeend',searchBarItemHtml);
    };
    setSearchResultsBarBtns(1);
    showSearchResultsBarBtns();
    return data;
  }catch(err){
    console.log(err);
  }
};

const controlRecipes = async function () {  
  if(!window.location.hash) return;
  const id = window.location.hash.slice(1);
  //Loading recipe
  recipeView.renderSpinner(recipeContainer);
  await model.loadRecipe(id);
  //Rendering recipe
  recipeView.render(model.state.recipe)
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
['hashchange', 'load'].forEach(ev => window.addEventListener(ev,controlRecipes));




const clearRecipeContainer = function(){
  recipeContainer.innerHTML = "";
};

// showRecipe("5ed6604591c37cdc054bcc13");