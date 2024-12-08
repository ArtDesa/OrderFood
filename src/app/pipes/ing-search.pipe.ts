import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingSearch'
  // --> | ingSearch:ingredient
})
export class IngSearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // Value is our individual dishes
    // ...args is the arguments after the colons (search params)

    // If our passed ingredient search argument is blank, return the full array of dishes (value)
    if(args[0]==''){
      return value;
    }

    // Create an array to return to our *ngFor
    let searchResult = [];

    // Loop through our dishes array (value) to check the list of ingredients for our search parameter
    for(let i=0; i<value.length; i++){
      // Loop through our ingredients list in each indivudal dish
      for(let j=0; j<value[i].ingredients.length; j++){
        // If the search argument is included in the name of an ingredient, add the dish to the searchResult
        if(value[i].ingredients[j].includes(args[0])){
          searchResult.push(value[i]);
          break;
        }
      }
    }

    // Return only those dishes matching the search argument.
    return searchResult;
  }

}
