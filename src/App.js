import React, { Component, Fragment } from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import FeatureMode from "./FeatureMode";
import Gate from "./Gate";
import NameSpace from "./NameSpace";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Toolbar } from "@material-ui/core";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     allTabs: ["/", "/tab2", "/tab3"],
  //   };
  // }
  //allTabs = ["/", "/tab2", "/tab3"];

  state = {
    value: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <AppBar position="static">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="secondary"
              fullwidth="true"
            >
              <Tab label="Feature Mode" component={Link} to="/one" />
              <Tab label="Gate" component={Link} to="/two" />
              <Tab label="Name Space" component={Link} to="/three" />
            </Tabs>
          </AppBar>

          <Switch>
            <Route path="/one" component={FeatureMode} />
            <Route path="/two" component={Gate} />
            <Route path="/three" component={NameSpace} />
          </Switch>
        </div>
      </Router>

      // <Router>
      //   <div className="App">
      //     <AppBar title="Brand" position="static">
      //       <Route
      //         path="/"
      //         render={({ location }) => (
      //           <Fragment>
      //             <Tabs value={location.pathname}>
      //               <Tab
      //                 label="Item One"
      //                 value="/"
      //                 component={Link}
      //                 to={this.state.allTabs[0]}
      //               />
      //               <Tab
      //                 label="Item Two"
      //                 value="/tab2"
      //                 component={Link}
      //                 to={this.state.allTabs[1]}
      //               />
      //               <Tab
      //                 value="/tab3"
      //                 label="Item Three"
      //                 component={Link}
      //                 to={this.state.allTabs[2]}
      //               />
      //             </Tabs>
      //             <Switch>
      //               <Route
      //                 path={this.state.allTabs[1]}
      //                 render={() => (
      //                   <div>
      //                     <Gate />
      //                   </div>
      //                 )}
      //               />
      //               <Route
      //                 path={this.state.allTabs[2]}
      //                 render={() => (
      //                   <div>
      //                     <NameSpace />
      //                   </div>
      //                 )}
      //               />
      //               <Route
      //                 path={this.state.allTabs[0]}
      //                 render={() => (
      //                   <div>
      //                     <FeatureMode />
      //                   </div>
      //                 )}
      //               />
      //             </Switch>
      //           </Fragment>
      //         )}
      //       />
      //     </AppBar>
      //   </div>
      // </Router>
    );
  }
}

export default App;
