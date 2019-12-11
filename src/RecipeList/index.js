import React from 'react';
import '../index.css'
import { Item, Button, Header} from 'semantic-ui-react';


// this is our presentational component

class RecipeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedRecipes: []
        }
    }
    componentDidMount(){
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

    deleteSavedRecipe = async (event) => {
    const target  = event.target.id;
    const deleteSavedRecipeResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/savedRecipes/' + target, {
                                              method: 'DELETE',
                                              credentials: 'include'
                                            });

    const deleteSavedRecipeParsed = await deleteSavedRecipeResponse.json();
    console.log(deleteSavedRecipeResponse)

    this.setState({savedRecipes: this.state.savedRecipes.filter((savedRecipe) => savedRecipe.id !== target.id )})
    
    console.log(deleteSavedRecipeParsed, ' response from Flask server')

    const refreshPage =  window.location.reload(false);

  }

    render(){
    const savedRecipes = this.state.savedRecipes.map((savedRecipe) => {
      console.log(savedRecipe)
      console.log(savedRecipe.user)
      if(localStorage.getItem('sessionId') === savedRecipe.user.toString()  || (
        savedRecipe.user.id && localStorage.getItem('sessionId') === savedRecipe.user.id.toString())
        )
      return(
        
        <div style={{padding: '50px', border: '5px solid black'}}>
        <Item key={savedRecipe.id} style={{ textAlign: 'center'}} >
            
            <Item.Content verticalAlign='middle'>
              <Item.Header style={{fontSize: '2em', textTransform: 'uppercase', fontFamily: 'cursive', color: '#E66767'}}>{savedRecipe.title}</Item.Header>
              <Item.Image size='large' src={savedRecipe.image}/>
              <Item.Description><a target="blank" href={savedRecipe.sourceURL}>Click here to see the full recipe and ingredients</a></Item.Description>
              <Button type='Submit' id={savedRecipe.id} color="red" style={{margin: '15px'}} onClick={this.deleteSavedRecipe}>Remove recipe!</Button>
            </Item.Content>  
        </Item>
        </div>
    )
    });
    if (localStorage.getItem('sessionId')) {
    return(
     <Item.Group relaxed>
       <h1 style={{textTransform: 'uppercase', textAlign: 'center', fontSize: '4em', fontFamily: 'TimesNewRoman'}}>Your saved Recipes!</h1>
            <React.Fragment>
            { savedRecipes }
            </React.Fragment>
    </Item.Group>
  )} else {
    return(
      <h1 style={{textTransform: 'uppercase', textAlign: 'center', padding: '225px', fontSize: '4em', fontFamily: 'TimesNewRoman'}}>Thanks for stopping by!</h1>
    )
  }
}
}


export default RecipeList;


