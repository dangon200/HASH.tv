import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
/* import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie' */

import LogInit from './components/LoginInit/LoginInit'
import Nav from './components/NavBar/NavBar'
import Home from './Pages/Home'
import Explorar from './Pages/Explorar'
import UserProfile from './Pages/UserProfile/UserProfile'
import Support from './Pages/Support'
import AboutUs from './Pages/AboutUs'
import UserStreams from './Pages/UserStreams/UserStreams'
// import Footer from './components/Footer/Footer'
import Cookies from "universal-cookie";
import { loginUser } from "../src/store/actions/actions";
import { useDispatch } from "react-redux";
import Detail from "./components/Details/Details";
import Categories from "./Pages/Categories/Categories";
import EditProfile from "./Pages/UserProfile/EditProfile";import VerifyEmail from "./Pages/VerifyEmail";
import  Admin  from "./components/Admin/Admin";
import HomeStream from "./components/HomeStream/HomeStream";

function App() {
  /*  const cookies = new Cookies()
  const token = cookies.get('TOKEN')
  const dispatch = useDispatch() */
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(loginUser(token.user));
      // dispatch(getFavorites(token.user.id))
    }
  }, []);
  return (
    <div className="App">
      <Route
        exact
        path={[
          "/",
          "/explorar",
          "/user/:id",
          "/support",
          "/aboutus",
          "/register",
          "/stream/:id",
          "/categories/:id",
          "/stream",
        ]}
        component={Nav}
      />
      <Route exact path="/" component={Home} />
      <Route exact path="/explorar" component={Explorar} />
      <Route exact path="/register" component={LogInit} />
      <Route exact path="/support" component={Support} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route path="/stream/:id" component={Detail} />
      <Route path="/verify/:uniqueKey" component={VerifyEmail} />
      <Route path="/categories/:id" component={Categories} />
<<<<<<< HEAD
      <Route path="/stream" component={StreamForm} />
      <Route exact path="/user/:id" component={UserProfile} />
      <Route exact path="/admin" component={AdminDashboard} />
      <Route path="/admin/users" component={UserTable} />
      <Route path="/admin/streams" component={StreamsTable} />
=======
      <Route path="/stream" component={HomeStream} />
      <Route exact path="/user" component={UserProfile} />
      <Route exact path="/user/edit" component={EditProfile} />
      <Route path ="/user/mystreams/:id" component={UserStreams} />
      <Route exact path="/admin" component={Admin}/>
      </Switch>
>>>>>>> 4ed79cd947b40894d8c2c992acf3c6f2f00f722c
    </div>
  );
}
// <Route exact path={['/', '/explorar', '/user', '/support', '/aboutus', '/register']} component={Footer} />
export default App;
