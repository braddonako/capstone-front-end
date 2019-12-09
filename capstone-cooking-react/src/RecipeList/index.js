import React from 'react';
import { Item, Button } from 'semantic-ui-react';
import '../index.css'

// this is our presentational component



const RecipeList = (props) => {

    const recipe = props.recipe;
    return(
      <div style={{border: '5px solid gold'}}>
      <Item key={recipe} style={{flexDirection:'row', textAlign:'center'}} >
        <Item.Header style={{fontSize: '3em'}}>{recipe.title}</Item.Header>
        <Item.Image size='large' src={recipe.image}/>   
          <Item.Content verticalAlign='middle'>               
          <Item.Description><a href={recipe.sourceUrl}>Click here to see the full recipe and ingredients</a></Item.Description>
          {/* <Item.Description>Preparation Time: {recipe.preparationMinutes}</Item.Description>
          <Item.Description>Complete cooking time: {recipe.readyInMinutes}</Item.Description> */}
          {/* <Item.Description>Servings: {recipe.servings}</Item.Description>  */}
          {/* <Item.Description>Wine pairing: {winePairing}</Item.Description> */}
          {/* <Item.Description>Instructions: {recipe.instructions}</Item.Description> */}
          {/* <Button type='Submit' color="blue" style={{margin: '15px'}} onClick={(e) => props.saveRecipe(e)}>Bookmark recipe!</Button> */}
        </Item.Content>
      </Item>
      </div>
          
      
    )
  
}


export default RecipeList;