import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import { RoomContextProvider } from './components/Context/Context';
import SingleRoom from './components/SingleRoom/SingleRoom';
import Rooms from './components/Rooms/Rooms';

function App() {
  return (
    <>
     <RoomContextProvider>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/rooms">
            <Rooms></Rooms>
          </Route>
          <Route path="/rooms/:slug">
            <SingleRoom></SingleRoom>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      </RoomContextProvider>
    </>
  );
}

export default App;
