import React from 'react';
import Register from './Register';
import Login from './Login';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './HeaderComponent';
import { Route, Switch } from 'react-router-dom';
import RecipeContainer from './RecipeContainer';

const My404 = () => {
 return (
   <div>
     <h3>You are lost</h3>
   </div>
 )
}
function App() {
 return (
   <main>
     <div style={{
      background: 'white'
     }}>
     <HeaderComponent />
     <Switch>
       <Route exact path="/" component={ Register } />
       <Route exact path="/login" component={ Login } />
       <Route exact path="/recipes" component={ RecipeContainer }/>
       <Route component={My404} />
     </Switch>
     </div>
   </main>
   
 );
}
export default App;