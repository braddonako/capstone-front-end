import React from 'react';
import Register from './Register';
import Login from './Login';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './HeaderComponent';
import { Route, Switch } from 'react-router-dom';
import {Navbar, Container} from 'react-bootstrap';
import RecipeContainer from './RecipeContainer';
import RecipeList from './RecipeList'

const My404 = () => {
 return (
   <div>
     <h3>You are lost</h3>
   </div>
 )
}
function App() {
 return (
   <main style={{height: '100vh'}}>
     <div style={{
      background: 'white'
     }}>
     <HeaderComponent />
     <Switch>
       <Route exact path="/" component={ Register } />
       <Route exact path="/login" component={ Login } />
       <Route exact path="/savedRecipes" component={ RecipeList } />
       <Route exact path="/recipes" render={(props) => <RecipeContainer {...props} mealRoute={'recipes'}/>} />
       <Route exact path="/breakfastRecipes" render={(props) => <RecipeContainer {...props} mealRoute={'breakfastRecipes'}/> }/>
       <Route exact path="/glutenFreeRecipes" render={(props) => <RecipeContainer {...props} mealRoute={'glutenFreeRecipes'}/> }/>
       <Route exact path="/glutenFreeBreakfasts" render={(props) => <RecipeContainer {...props} mealRoute={'glutenFreeBreakfasts'}/> }/>
       <Route exact path="/vegetarianBreakfasts" render={(props) => <RecipeContainer {...props} mealRoute={'vegetarianBreakfasts'}/> }/>
       <Route exact path="/vegetarianDinners" render={(props) => <RecipeContainer {...props} mealRoute={'vegetarianDinners'}/> }/>
       <Route component={My404} />
     </Switch>
     </div>
     <div>
       <footer >
      <Navbar fixed='bottom' style={{textAlign: 'center', backgroundColor: '#E66767', padding: '10px', opacity: '.9', width: '100%', bottom: '0'}}>
          <Container>
            <Navbar.Brand style={{textAlign: 'center'}} href="https://www.linkedin.com/in/braddonakowski/"target="blank">Website Created by Brad Donakowski</Navbar.Brand>
          </Container>
      </Navbar>
       </footer>
     </div>
   </main>
   
 );
}
export default App;



// style={{textAlign: 'center', backgroundColor: '#E66767', padding: '10px', opacity: '.9', width: '100%', bottom: '0'}}