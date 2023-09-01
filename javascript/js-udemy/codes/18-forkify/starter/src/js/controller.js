const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2
// API key: 90dc691a-882e-4620-bdc8-edd5ed5dc4f0


///////////////////////////////////////

console.log("Test");

const urlExample = `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
const getRecipe = async function(url){
  try{
    const recipePromise = await fetch(url);
    const recipe = await recipePromise.json();
    // console.log(recipe);
    return recipe;
  }catch(err){
    console.log(err);
  }
};

const recipe = getRecipe(urlExample);
// console.log(recipe.then());