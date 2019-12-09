import React, { Component } from 'react'
// import RecipeList from '../RecipeList';
import {Item, Button} from 'semantic-ui-react';


class RecipeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {}
        }
    }
    componentDidMount(){
        this.getRandomRecipe();
    }

    addSavedRecipe =  async (e, savedRecipes) => {
    e.preventDefault();
    console.log(savedRecipes)
    try {
    const createdSavedRecipe = fetch(process.env.REACT_APP_API_URL + '/api/v1/recipes/', {
    method: 'POST',
    body: JSON.stringify({
        sourceUrl: this.state.sourceUrl,
        spoonacularId: this.state.id,
        title: this.state.title,
        image: this.state.image
    }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        } 
       })
    //    const parsedResponse = await createdSavedRecipeResponse.json();
    //    console.log(parsedResponse, 'This is the response')

    //    this.setState({recipe})
    } catch(err){
        console.log(err)
    }
}
    getRandomRecipe = async () => {
        try {
            const recipes = await fetch(process.env.REACT_APP_API_URL + '/api/v1/' + this.props.mealRoute+ '/');
            const parsedRecipes = await recipes.json()
            console.log(parsedRecipes)
            this.setState({
                recipe: parsedRecipes.recipes[0] // Get first of [{recipe...}]
            })
        } catch(err) {
            console.log(err)
        }
    }
    render(){
        const recipe = this.state.recipe;
        let winePairing = 'N/A'
        if (recipe.winePairing && recipe.winePairing.pairedWines) {
            winePairing = recipe.winePairing.pairedWines.join(', ').toUpperCase();
        }
        return(
            <div style={{border: '5px solid #FFC1C1', backgroundImage: `url(${'https://i.imgur.com/dea6SWD.jpg'})`, backgroundSize: 'cover'}}>
                <Item key={recipe} style={{flexDirection:'row', textAlign:'center'}} >
                    <Item.Header style={{fontSize: '3em', textTransform: 'uppercase', fontFamily: 'cursive'}}><strong>{recipe.title}</strong></Item.Header>
                    <Item.Image size='large' style={{padding: '15px', borderRadius: '15px'}} src={recipe.image}/>   
                    <Item.Content verticalAlign='middle'>       
                     <div style={{background: '(255,255,255, .5)'}}>
                    <Item.Description><a href={recipe.sourceUrl}>Click here to see the full recipe and ingredients</a></Item.Description>
                    <Item.Description><strong>Preparation Time:</strong> {recipe.preparationMinutes} minutes</Item.Description>
                    <Item.Description><strong>Complete cooking time:</strong> {recipe.readyInMinutes} minutes</Item.Description>
                    <Item.Description><strong>Servings:</strong> {recipe.servings}</Item.Description> 
                    <Item.Description><strong>Wine pairing:</strong> {winePairing}</Item.Description>
                    <Item.Description><strong>Instructions:</strong>{recipe.instructions}</Item.Description> 
                    </div>   
                    <Button type='Submit' color="blue" style={{margin: '15px'}} onClick={this.saveRecipe}>Bookmark recipe!</Button>
                    </Item.Content>
                </Item>
                </div>
        )
    }
}


export default RecipeContainer;