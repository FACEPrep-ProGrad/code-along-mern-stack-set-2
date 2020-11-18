import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import ProductScreen from './containers/ProductScreen/ProductScreen';
// import SignIn from './containers/Signin/SignIn';
// import SignUp from './containers/Signup/SignUp';



function App() {
  return (
      <Router>
<div className="grid-container">
     <header>
       <a className="brand" href="/">
         ProMart
       </a>
       <div>
         <a href="/cart">Cart</a>
         <a href="/signin">Sign in</a>
        </div>
     </header>
<main>
 <Route path="/product/:id" component={ProductScreen}></Route>
 <Route path="/" component={HomeScreen} exact></Route>
</main>

<footer className="row center">
All right reserved
</footer>
</div>   
      </Router>
    
 
  );
}

export default App;
