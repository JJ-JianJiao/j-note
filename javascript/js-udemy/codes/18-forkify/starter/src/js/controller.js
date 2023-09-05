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
    renderSpinner(searchResultBar);
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

const showRecipe = async function () {  
  if(!window.location.hash) return;
  const id = window.location.hash.slice(1);
  console.log(id);
  //Loading recipe
  renderSpinner(recipeContainer);
  const url = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  if(!res.ok) throw new Error(`${data.message} (${res.status}) 💥💥💥`);

  let {recipe} = data.data;
  recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients
  };

  //Rendering recipe
  //Method 1: seperate mackups
  /*
  const figure = `
    <figure class="recipe__fig">
      <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>
  `;
  const recipeDetials = `
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="./${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="./${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
  `;
  let ingredientList = "";
  recipe.ingredients.forEach(ingredient => {
    ingredientList += `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ingredient.quantity}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ingredient.unit}</span>
          ${ingredient.description}
        </div>
      </li>
    `;
  });
  // console.log(ingredientList);
  const ingredients = `
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${ingredientList}
      </ul>
    </div>
  `;

  const direction = `
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `;
  recipeContainer.insertAdjacentHTML('beforeend', figure);
  recipeContainer.insertAdjacentHTML('beforeend', recipeDetials);
  recipeContainer.insertAdjacentHTML('beforeend', ingredients);
  recipeContainer.insertAdjacentHTML('beforeend', direction);
  */

  //Method two: one union muckup
  const markup = `
    <figure class="recipe__fig">
      <img src="${recipe.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${recipe.ingredients.map(ing=>{
          return `<li class="recipe__ingredient">
                    <svg class="recipe__icon">
                      <use href="${icons}#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${ing.quantity}</div>
                    <div class="recipe__description">
                      <span class="recipe__unit">${ing.unit}</span>
                      ${ing.description}
                    </div>
                </li>`;
        }).join('')}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="./icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `;
  recipeContainer.innerHTML = "";
  recipeContainer.insertAdjacentHTML('beforeend', markup);
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
['hashchange', 'load'].forEach(ev => window.addEventListener(ev,showRecipe));


const renderSpinner = function (parentEl) {  
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

const clearRecipeContainer = function(){
  recipeContainer.innerHTML = "";
};

// showRecipe("5ed6604591c37cdc054bcc13");