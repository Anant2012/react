import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
// import Menu from './Menu';
import User from "./User";
import Search from "./Search";
import Bootstrap from './Bootstrap';

function App() {
  const Carrer = () => {
    return <h1> I am Carrer Page</h1>
  };

  return (
    <>
      <Bootstrap/>
      {/* <Menu /> */}

      {/* When you use component (instead of render or children, below) the router uses React.createElement to create a new React element from the given component. 
      That means if you provide an inline function to the componentprop, you would create a new component every render. This results in the existing component 
    unmounting and the new component mounting instead of just updating the existing component. When using an inline function for inline rendering, use the render */}

      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route exact path="/contact" render={() => <Contact name="Contact" />} />
        <Route exact path="/carrer" component={Carrer} />
        <Route path="/user/:fname" component={User} />
        <Route path="/search" component={Search} />
        <Route component={Error} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </>
  );
}

export default App;
