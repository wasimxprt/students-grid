import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


import { BrowserRouter, Switch, Route } from 'react-router-dom'
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

export default function App() {
  return (

    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={StudentList} />
        <Route path="/add" component={AddStudent} />
      </Switch>

    </BrowserRouter>




  );
}