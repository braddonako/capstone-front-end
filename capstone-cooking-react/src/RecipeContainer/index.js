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
            <div style={{border: '5px solid gold'}}>
                <Item key={recipe} style={{flexDirection:'row', textAlign:'center'}} >
                    <Item.Header style={{fontSize: '3em'}}>{recipe.title}</Item.Header>
                    <Item.Image size='large' src={recipe.image}/>   
                    <Item.Content verticalAlign='middle'>               
                    <Item.Description><a href={recipe.sourceUrl}>Click here to see the full recipe and ingredients</a></Item.Description>
                    <Item.Description>Preparation Time: {recipe.preparationMinutes} minutes</Item.Description>
                    <Item.Description>Complete cooking time: {recipe.readyInMinutes} minutes</Item.Description>
                    <Item.Description>Servings: {recipe.servings}</Item.Description> 
                    <Item.Description>Wine pairing: {winePairing}</Item.Description>
                    <Item.Description>Instructions: {recipe.instructions}</Item.Description>
                    <Button type='Submit' color="blue" style={{margin: '15px'}} onClick={this.saveRecipe}>Bookmark recipe!</Button>
                    </Item.Content>
                </Item>
                </div>
        )
    }
}


export default RecipeContainer;