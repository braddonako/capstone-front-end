import React from 'react';
// import { Item, Button } from 'semantic-ui-react';
import '../index.css'

// this is our presentational component


const RecipeList = () => {

    // const recipe = props.recipe;
    return(
        <div style={{backgroundImage: `url(${'https://i.imgur.com/dea6SWD.jpg'})`, backgroundSize: 'cover'}}>
          <h1 style={{textAlign: 'center'}}>Saved Recipes!</h1>
          <p>This is where all of your recipes will appear. Trying to get all of the routes to work. </p>
        </div>
    )
  
}


export default RecipeList;


//  <div style={{border: '5px solid gold'}}>
//       <Item key={recipe} style={{flexDirection:'row', textAlign:'center'}} >
//         <Item.Header style={{fontSize: '3em'}}>{recipe.title}</Item.Header>
//         <Item.Image size='large' src={recipe.image}/>   
//           <Item.Content verticalAlign='middle'>               
//           <Item.Description><a href={recipe.sourceUrl}>Click here to see the full recipe and ingredients</a></Item.Description>
//         </Item.Content>
//       </Item>