import React from 'react';
import { Item } from 'semantic-ui-react';
import '../index.css'

// this is our presentational component

const RecipeList = (props) => {
    const recipeList = props.recipes.map((recipe, i) => {
        return(
            <Item key={recipe} style={{flexDirection:'row'}} >
                <Item.Image size='small' src={recipe.image}/>
            <Item.Content verticalAlign='middle'>
              <Item.Header>Dish name: {recipe.title}</Item.Header>
              <Item.Description>URL to recipe: {recipe.sourceURL}</Item.Description>
              <Item.Description>Minutes to whip up: {recipe.readyInMinutes}</Item.Description>
              <Item.Description>Servings: {recipe.servings}</Item.Description> 

            </Item.Content>
          </Item>
    )
    })
    return(
        <Item.Group relaxed>
            { recipeList }
          </Item.Group>
    )
    
}


export default RecipeList;