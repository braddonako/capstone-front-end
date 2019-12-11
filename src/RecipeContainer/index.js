import React, { Component } from 'react'
import {Item, Button} from 'semantic-ui-react';


class RecipeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {},
            // savedRecipes: []
        }
    }
    componentDidMount(){
        this.getRandomRecipe();
        this.getAllSavedRecipes();
    }

    getAllSavedRecipes = async () => {
        try {
            const savedRecipes = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/savedRecipes/');
            const parsedSavedRecipes = await savedRecipes.json()
            console.log(parsedSavedRecipes)
            this.setState({
                savedRecipes: parsedSavedRecipes.data
            })
        } catch(err) {
            console.log(err)
        }
    }
    
    addSavedRecipe =  async (e) => {
        e.preventDefault();
        console.log(this.state.recipe)
        console.log(this.state)
        alert('Your recipe has been bookmarked!')
        // this.setState({
        //     showEditModal: true,
        // })
            try {
        
                const createdSavedRecipe = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/savedRecipes/', {
                    method: 'POST',
                    body: JSON.stringify({
                    sourceURL: this.state.recipe.sourceUrl,
                    spoonacularId: this.state.recipe.id,
                    title: this.state.recipe.title,
                    image: this.state.recipe.image
                }),
                    credentials: 'include',
                    headers: {
                    'Content-Type': 'application/json'
                } 
        })

        const parsedResponse = await createdSavedRecipe.json();
        console.log(parsedResponse, 'This is the response')
            } catch(err){
                console.log(err)
        }
    }
    
    getRandomRecipe = async () => {
        try {
            const recipes = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/' + this.props.mealRoute + '/');
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
        if(localStorage.getItem('sessionId') 
        ){
        return(
            <div style={{padding: '40px', border: '5px solid #FFC1C1', backgroundImage: `url(${'https://i.imgur.com/dea6SWD.jpg'})`, backgroundSize: 'cover'}}>
                <Item key={recipe} style={{flexDirection:'row', textAlign:'center'}} >
                    <Item.Header style={{background: `rgba(${255}, ${255}, ${255}, ${.7}`, borderRadius: '15px',fontSize: '3em', textTransform: 'uppercase', fontFamily: 'cursive', color: '#E66767'}}><strong>{recipe.title}</strong></Item.Header>
                    <Item.Image size='large' style={{margin: '15px', border: '5px solid white', borderRadius: '15px'}} src={recipe.image}/>   
                    <Item.Content verticalAlign='middle'>
                     <div style={{background: `rgba(${255}, ${255}, ${255}, ${.75})`, borderRadius: '20px', textAlign: 'left', padding: '10px', color: '#E66767'}}>
                    <Item.Description><strong>Preparation Time:</strong>{recipe.preparationMinutes} minutes</Item.Description>
                    <Item.Description><strong>Complete cooking time:</strong>{recipe.readyInMinutes} minutes</Item.Description>
                    <Item.Description><strong>Servings:</strong>{recipe.servings}</Item.Description> 
                    <Item.Description><strong>Wine pairing:</strong> {winePairing}</Item.Description>
                    <Item.Description><strong>Instructions:</strong>{recipe.instructions}</Item.Description> 
                    <Item.Description style={{textAlign: 'center'}}><a target="blank" href={recipe.sourceUrl}>Click here to see the full recipe and ingredients</a></Item.Description>
                    </div>   
                    <Button animated='fade'>
                        <Button.Content visible type="Submit" Color="Blue" style={{margin: '15px'}} onClick={this.addSavedRecipe}>Bookmark Recipe</Button.Content>
                        <Button.Content hidden>Recipe Bookmarked!!</Button.Content>
                    </Button>
                    {/* <Button type='Submit' color="blue" style={{margin: '15px'}} onClick={this.addSavedRecipe}>Bookmark recipe!</Button> */}
                    <Button type='Submit' color="green" style={{margin: '15px'}} onClick={this.getRandomRecipe}>Try a different recipe!</Button>
                    </Item.Content>
                </Item>
                </div>
        ) 
    }else {
            return(
                 <div style={{padding: '40px', border: '5px solid #FFC1C1', backgroundImage: `url(${'https://i.imgur.com/dea6SWD.jpg'})`, backgroundSize: 'cover'}}>
                <Item key={recipe} style={{flexDirection:'row', textAlign:'center'}} >
                    <Item.Header style={{background: `rgba(${255}, ${255}, ${255}, ${.7}`, borderRadius: '15px',fontSize: '3em', textTransform: 'uppercase', fontFamily: 'cursive', color: '#E66767'}}><strong>{recipe.title}</strong></Item.Header>
                    <Item.Image size='large' style={{margin: '15px', border: '5px solid white', borderRadius: '15px'}} src={recipe.image}/>   
                    <Item.Content verticalAlign='middle'>
                     <div style={{background: `rgba(${255}, ${255}, ${255}, ${.75})`, borderRadius: '20px', textAlign: 'left', padding: '10px', color: '#E66767'}}>
                    <Item.Description><strong>Preparation Time:</strong>{recipe.preparationMinutes} minutes</Item.Description>
                    <Item.Description><strong>Complete cooking time:</strong>{recipe.readyInMinutes} minutes</Item.Description>
                    <Item.Description><strong>Servings:</strong>{recipe.servings}</Item.Description> 
                    <Item.Description><strong>Wine pairing:</strong> {winePairing}</Item.Description>
                    <Item.Description><strong>Instructions:</strong>{recipe.instructions}</Item.Description> 
                    <Item.Description style={{textAlign: 'center'}}><a target="blank" href={recipe.sourceUrl}>Click here to see the full recipe and ingredients</a></Item.Description>
                    </div>   
                    <Button type='Submit' color="green" style={{margin: '15px'}} onClick={this.getRandomRecipe}>Try a different recipe!</Button>
                    </Item.Content>
                </Item>
                </div>
            )
        }
        }
    }



export default RecipeContainer;