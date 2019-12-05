import React, { Component } from 'react'
import RecipeList from '../RecipeList';

class RecipeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }
    componentDidMount(){
        this.getRandomRecipe();
    }
    getRandomRecipe = async () => {
        try {
            const recipes = await fetch(process.env.REACT_APP_API_URL + '/api/v1/recipes/');
            const parsedRecipes = await recipes.json()
            console.log(parsedRecipes)
            this.setState({
                recipes: parsedRecipes.recipes
            })
        } catch(err) {
            console.log(err)
        }
    }
    render(){
        return(
            // <h1>recipe {this.state.recipe}</h1>
            <div>
            <RecipeList recipes={this.state.recipes} />
            </div>
        )
    }
}


export default RecipeContainer;