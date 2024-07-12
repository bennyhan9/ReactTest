class Recipe {
  id: number;
  title: string;
  imageUri: any;
  duration: number;
  ingredients: string[];
  steps: string[];

  constructor(
    id: number,
    title: string,
    imageUri: any,
    duration: number,
    ingredients: string[],
    steps: string[],
  ) {
    this.id = id;
    this.title = title;
    this.imageUri = imageUri;
    this.ingredients = ingredients;
    this.duration = duration;
    this.steps = steps;
  }
}

export default Recipe;
