import logo from './logo.svg';
import './App.css';
import Authorization from "./Page/Authorization";
import "./Page/style.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "./Page/Register";
import React from "react";
import Login from "./Page/Username/Login";
import Profile from "./Page/Username/Profile";
import Username from "./Page/Username/Username";
import Pin from "./Page/Username/Pin";
import Admin from "./Page/Admin/Admin";
import Ev from "./Page/Admin/Ev";
import EvAdd from "./Page/Admin/EvAdd";
import Ev1 from "./Page/Admin/Ev1";
import Information from "./Page/Admin/Information";
import Dates from "./Page/Admin/Dates";
import Documents from "./Page/Admin/Documents";
import NewDocument from "./Page/Admin/NewDocument";
import Doc1 from "./Page/Admin/Doc1";
import DocUpdate from "./Page/Admin/DocUpdate";
import ExEvent1 from "./Page/Admin/ExEvent1";
import DocPin from "./Page/Admin/DocPin";
import Home from "./Page/Admin/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Authorization}/>
          <Route exact path={"/Register"} component={Register}/>
          <Route exact path={"/Username"} component={Username}/>
          <Route exact path={"/Username/Login"} component={Login}/>
          <Route exact path={"/Username/Profile"} component={Profile}/>
          <Route exact path={"/Username/pin"} component={Pin}/>
          <Route exact path={"/Admin"} component={Admin}/>
          <Route exact path={"/Events"} component={Ev}/>
          <Route exact path={"/Events/Add"} component={EvAdd}/>
          <Route exact path={"/Events/1"} component={Ev1}/>
          <Route exact path={"/Events/1/Information"} component={Information}/>
          <Route exact path={"/Events/1/Dates"} component={Dates}/>
          <Route exact path={"/Documents"} component={Documents}/>
          <Route exact path={"/Documents/NewDocument"} component={NewDocument}/>
          <Route exact path={"/Documents/1"} component={Doc1}/>
          <Route exact path={"/Documents/1/Update"} component={DocUpdate}/>
          <Route exact path={"/Events/ExEvents"} component={ExEvent1}/>
          <Route exact path={"/Events/ExEvents/2"} component={DocPin}/>
          <Route exact path={"/Home"} component={Home}/>
          <Route exact path={"/Users"} component={Admin}/>
          <Route exact path={"/UserCreate"} component={Register}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
