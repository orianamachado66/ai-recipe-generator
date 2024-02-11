function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "add eggs with flour",
    autoStart: true,
  });
}

let recipeGenerator = document.querySelector("#recipe-generator-form");
recipeGenerator.addEventListener("submit", generateRecipe);
