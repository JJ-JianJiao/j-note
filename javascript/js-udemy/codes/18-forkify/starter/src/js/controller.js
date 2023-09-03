const recipeContainer = document.querySelector('.recipe');
const searchBtn = document.querySelector('.search__btn');
const searchResultBar = document.querySelector('.search-results .results');
const prevBtn = document.querySelector('.pagination__btn--prev');
const nextBtn = document.querySelector('.pagination__btn--next');
console.log(searchResultBar,prevBtn,nextBtn);

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
  getRecipe(url);
});

inital();

// const urlExample = `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
// const urlExample = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchRecipe}&key=${APIKey}`;
const getRecipe = async function(url){
  try{
    const recipePromise = await fetch(url);
    const recipe = await recipePromise.json();
    // console.log(recipe);
    if(recipe.status !== 'success')
      throw new Error('Get recipe results fail ❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹');
    
    const recipeData = recipe.data.recipes;
    const svgUser = `./src/img/icons.svg#icon-user`;
    for(let i = 0; i <=9; ++i){
      // console.log(recipeData[i]);
      const searchBarItemHtml = `
        <li class="preview">
          <a class="preview__link preview__link--active" href="#23456">
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
    return recipe;
  }catch(err){
    console.log(err);
  }
};

// const recipe = getRecipe(urlExample);
// console.log(recipe.then());