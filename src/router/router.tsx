import { BrowserRouter, Route } from "react-router-dom"
import * as React from "react";
import Home from "../components/home/home";


const Router = () => <BrowserRouter> 
  <Route exact path="/" component={Home}/>
</BrowserRouter>

export default Router;
