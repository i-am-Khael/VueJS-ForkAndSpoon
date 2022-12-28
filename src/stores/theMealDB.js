
import { defineStore } from "pinia";

export const theMealDB = defineStore({

  id: 'theMealDB',

  state: () => ({
    
    darkMode: true,
    loading: true,

    random: 'https://www.themealdb.com/api/json/v1/1/random.php',
    origin: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=',
    category: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
    categories: 'https://www.themealdb.com/api/json/v1/1/categories.php',
    recipe: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
    
    categoriesRecipe: [],
    originMealRecipe: [],
    categoryMealRecipe: [],

    randomMeal: {
      id: '',
      name: '',
      category: '',
      origin: '',
      instruction: '',
      ingredients: [],
      measures: [],
      img: '',
      yt: ''
    },
    
    singleRecipe: {
      id: '',
      name: '',
      category: '',
      origin: '',
      instruction: '',
      ingredients: [],
      measures: [],
      img: '',
      yt: ''
    },
    

  }),

  actions: {
  
    toggleTheme() {
      this.darkMode = !this.darkMode;
    },
    
    async fetchRandomMeal() {
      try {

        const response = await fetch(this.random);
        if( !response.ok ){
          throw new Error(`Status: ${response.status}`);
        }
        const data = await response.json();

        this.randomMeal.id = data.meals[0].idMeal;
        this.randomMeal.name = data.meals[0].strMeal;
        this.randomMeal.category = data.meals[0].strCategory;
        this.randomMeal.origin = data.meals[0].strArea;
        this.randomMeal.instruction = data.meals[0].strInstructions;

        this.randomMeal.ingredients.push(data.meals[0].strIngredient1);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient2);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient3);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient4);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient5);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient6);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient7);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient8);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient9);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient10);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient11);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient12);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient13);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient14);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient15);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient16);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient17);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient18);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient19);
        this.randomMeal.ingredients.push(data.meals[0].strIngredient20);
        
        this.randomMeal.measures.push(data.meals[0].strMeasure1);
        this.randomMeal.measures.push(data.meals[0].strMeasure2);
        this.randomMeal.measures.push(data.meals[0].strMeasure3);
        this.randomMeal.measures.push(data.meals[0].strMeasure4);
        this.randomMeal.measures.push(data.meals[0].strMeasure5);
        this.randomMeal.measures.push(data.meals[0].strMeasure6);
        this.randomMeal.measures.push(data.meals[0].strMeasure7);
        this.randomMeal.measures.push(data.meals[0].strMeasure8);
        this.randomMeal.measures.push(data.meals[0].strMeasure9);
        this.randomMeal.measures.push(data.meals[0].strMeasure10);
        this.randomMeal.measures.push(data.meals[0].strMeasure11);
        this.randomMeal.measures.push(data.meals[0].strMeasure12);
        this.randomMeal.measures.push(data.meals[0].strMeasure13);
        this.randomMeal.measures.push(data.meals[0].strMeasure14);
        this.randomMeal.measures.push(data.meals[0].strMeasure15);
        this.randomMeal.measures.push(data.meals[0].strMeasure16);
        this.randomMeal.measures.push(data.meals[0].strMeasure17);
        this.randomMeal.measures.push(data.meals[0].strMeasure18);
        this.randomMeal.measures.push(data.meals[0].strMeasure19);
        this.randomMeal.measures.push(data.meals[0].strMeasure20);

        this.randomMeal.img = data.meals[0].strMealThumb;
        this.randomMeal.yt = data.meals[0].strYoutube;

        this.loading = false;
      } catch (error) {
        console.log(`An Error occurred: ${error}`);
      }
    },

    async fetchCategories() {
      try {
        const response = await fetch(this.categories);
        if( !response.ok ) {
          throw new Error(`Status: ${response.status}`);
        }
        const data = await response.json();
        data.categories.forEach(category => {
          this.categoriesRecipe.push(category);
        });
      } catch (error) {
        console.log(`Theres an Error occurred: ${error}`);
      }
    },
    
    async fetchOrigin(origin) {
      try {
        const response = await fetch(`${this.origin}${origin}`);
        if( !response.ok ) {
          throw new Error(`Status: ${response.status}`);
        }
        const data = await response.json();
        data.meals.forEach( meal => {
          this.originMealRecipe.push(meal);
        });
      } catch (error) {
        console.log(`An Error occurred: ${error}`);
      }
    },
    
    async fetchCategory(category) {
      try {
        const response = await fetch(`${this.category}${category}`);
        if( !response.ok ) {
          throw new Error(`Status: ${response.status}`);
        }
        const data = await response.json();
        data.meals.forEach( meal => {
          this.categoryMealRecipe.push(meal);
        });
      } catch (error) {
        console.log(`An Error occurred: ${error}`);
      }
    },

    async fetchSingleRecipe(id) {

      try {
        const response = await fetch(`${this.recipe}${id}`);
        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }
        const data = await response.json();

        this.singleRecipe.id = data.meals[0].idMeal;
        this.singleRecipe.name = data.meals[0].strMeal;
        this.singleRecipe.category = data.meals[0].strCategory;
        this.singleRecipe.origin = data.meals[0].strArea;
        this.singleRecipe.instruction = data.meals[0].strInstructions;

        this.singleRecipe.ingredients.push(data.meals[0].strIngredient1);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient2);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient3);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient4);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient5);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient6);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient7);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient8);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient9);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient10);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient11);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient12);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient13);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient14);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient15);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient16);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient17);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient18);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient19);
        this.singleRecipe.ingredients.push(data.meals[0].strIngredient20);
        
        this.singleRecipe.measures.push(data.meals[0].strMeasure1);
        this.singleRecipe.measures.push(data.meals[0].strMeasure2);
        this.singleRecipe.measures.push(data.meals[0].strMeasure3);
        this.singleRecipe.measures.push(data.meals[0].strMeasure4);
        this.singleRecipe.measures.push(data.meals[0].strMeasure5);
        this.singleRecipe.measures.push(data.meals[0].strMeasure6);
        this.singleRecipe.measures.push(data.meals[0].strMeasure7);
        this.singleRecipe.measures.push(data.meals[0].strMeasure8);
        this.singleRecipe.measures.push(data.meals[0].strMeasure9);
        this.singleRecipe.measures.push(data.meals[0].strMeasure10);
        this.singleRecipe.measures.push(data.meals[0].strMeasure11);
        this.singleRecipe.measures.push(data.meals[0].strMeasure12);
        this.singleRecipe.measures.push(data.meals[0].strMeasure13);
        this.singleRecipe.measures.push(data.meals[0].strMeasure14);
        this.singleRecipe.measures.push(data.meals[0].strMeasure15);
        this.singleRecipe.measures.push(data.meals[0].strMeasure16);
        this.singleRecipe.measures.push(data.meals[0].strMeasure17);
        this.singleRecipe.measures.push(data.meals[0].strMeasure18);
        this.singleRecipe.measures.push(data.meals[0].strMeasure19);
        this.singleRecipe.measures.push(data.meals[0].strMeasure20);

        this.singleRecipe.img = data.meals[0].strMealThumb;
        this.singleRecipe.yt = data.meals[0].strYoutube;

        this.loading = false;

      } catch (error) {
        
      }

    }
  
  },

});
