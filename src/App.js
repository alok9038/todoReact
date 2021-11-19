import './App.css';
import './sidebar.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Redirect, Route, Switch } from "react-router";
import Layout from './comp/Layout';

function App() {
  return (
    <>
      <Navbar brand="TODO"/>
      <Switch>
        <Route path="/"  component={Layout}/>
        <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
