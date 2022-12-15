import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
/* import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie' */
import LogInit from './components/LoginInit/LoginInit.jsx'
import Nav from './components/NavBar/NavBar.jsx'
import Home from './Pages/Home.js'
import Explorar from './Pages/Explorar.jsx'
import UserProfile from './components/userProfile/userProfile.jsx'
import Support from './Pages/Support.jsx'
import AboutUs from './Pages/AboutUs.jsx'
// import Footer from './components/Footer/Footer'
import Cookies from 'universal-cookie'
import { loginUser } from '../src/store/actions/actions.js'
import { useDispatch } from 'react-redux'
// import Detail from "./components/Details/Details";
import Categories from "./Pages/Categories/Categories.jsx";
import VerifyEmail from "./Pages/VerifyEmail.jsx";
import Logout from "./components/logout/logout.jsx";
import UserSubs from "./components/UserSubs/userSubs.jsx";
import EditProfile from "./components/FormEditUser/FormEditUser.jsx";
import  Admin  from "./components/Admin/Admin.jsx";
import HomeStream from "./components/HomeStream/HomeStream.jsx";
import StreamProf2 from './components/MyStreams/streamProf2.jsx';
import AdminInfoUser from "./components/AdminInfoUser/AdminInfoUser.js"

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
      <Route exact path={['/', '/explorar', '/user','/user/edit','/user/stream' ,'/user/subscriptions', '/support', '/aboutus', '/register','/stream/:id','/categories/:id', '/stream' ]} component={Nav} />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/explorar' component={Explorar} />
      <Route exact path='/register' component={LogInit} />
      <Route exact path='/support' component={Support} />
      <Route exact path='/aboutus' component={AboutUs} />
      <Route path="/stream/:id" component={StreamProf2} />
      <Route path="/verify/:uniqueKey" component={VerifyEmail} />
      <Route path="/categories" component={Categories} />
      <Route path="/user/stream" component={HomeStream} />
      <Route path="/categories/:id" component={Categories} />
      {/* <Route path="/stream" component={StreamForm} /> */}
      <Route exact path="/user/:id" component={UserProfile} />
      {/* <Route exact path="/admin" component={AdminDashboard} /> */}
      {/* <Route path="/admin/users" component={UserTable} /> */}
      {/* <Route path="/admin/streams" component={StreamsTable} /> */}
      {/* <Route path="/stream" component={HomeStream} /> */}
      <Route exact path="/user" component={UserProfile} />
      <Route exact path="/user/subscriptions" component={UserSubs} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/user/edit" component={EditProfile} />
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/info/:id" component={AdminInfoUser}/>
      </Switch>
    </div>
  );
}
// <Route exact path={['/', '/explorar', '/user', '/support', '/aboutus', '/register']} component={Footer} />
export default App;
