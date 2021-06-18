import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import editForm from "./component/editForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/edit/:id" component={editForm} />
    </BrowserRouter>
  );
};

export default Router;
