import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import './App.css';
import {Header} from './Header'

function App() {
  return (
    <Router>
    <Header></Header>
    {/* <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path="/books">
        <BooksList />
      </Route>
      <Route path="/books/:id">
        <IndividualBook />
      </Route>
      <Route exact path="/add/book">
        <AddBook />
      </Route>
      <Route exact path="/members">
        <MembersList />
      </Route>
      <Route exact path="/members/:id">
        <IndividualMember />
      </Route>
      <Route exact path="/add/member">
        <AddMember />
      </Route>
    </Switch>
    <Footer></Footer> */}
  </Router>
  );
}

export default App;
