import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import "./style.css";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { HomePage } from "./Homepage/HomePage";
import { Projects } from "./Projects/Projects";
import { KblSolutions } from "./Projects/KblSolutions";
import { MuseumMeltdown } from "./Projects/MuseumMeltdown";
import { Resources } from "./Resources/Resources";

export const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/projects/kblsolutions">
          <KblSolutions />
        </Route>
        <Route exact path="/projects/museum-meltdown">
          <MuseumMeltdown />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        {/* <Route exact path="/members/:id">
        <IndividualMember />
      </Route>
      <Route exact path="/add/member">
        <AddMember />
      </Route> */}
      </Switch>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </Router>
  );
};

export default App;
