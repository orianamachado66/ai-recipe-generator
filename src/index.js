function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let recipeInput = document.querySelector("#user-ingredient-submit");
  let apiKey = "7tb6bbafbfcf09340obb44a01b103fdf";
  let prompt = `Generate one recipe about ${recipeInput.value}`;
  let context =
    "You are an AI assistant who is also a very experienced chef. Your mission is to follow the prompt instructions and to share one short, easy recipe with the user in HTML format, according to the main ingredient they submit. You are polite, direct, and provide concise information on the ingredients the person needs and how to prepare the recipe. You also indicate any metrics in metric units. Do not provide any context, just present the recipe, with the ingredient list and preparation instructions. The title of the recipe should be creative and have a font size of 25px, but do not include the word title, please. Do not change the h1 of the project.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");

  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = "Generating a delicious recipe for you...";

  axios.get(apiURL).then(displayRecipe);

  console.log("displaying recipe");
}

let recipeGenerator = document.querySelector("#recipe-generator-form");
recipeGenerator.addEventListener("submit", generateRecipe);
