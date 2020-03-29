import React,{Component} from 'react';
import {BrowserRouter as Router,NavLink,Redirect,Route,Switch,Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Desktop from './components/Desktop/Desktop';


class App extends Component {
  state={
    userStatus:false
  }

  render(){
  return (
    <Router>
        <Switch>

          <Route path="/"  exact strict
           render={(props) => <Desktop {...props} name={"Welcome page"} />}>
          </Route>



        </Switch>
      
      
    </Router>
  );
  }


}

export default App;
