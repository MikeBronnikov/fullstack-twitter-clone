import React from 'react';
import './App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import SignIn from './Pages/signIn/SignIn';
function App() {
  return (
    <div className="App">
      
      <Route path='/signIn' component={SignIn}/>
    </div>
  );
}
//test
export default App;
