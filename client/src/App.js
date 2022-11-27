import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
/* import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie' */
import LogInit from './components/LoginInit/LoginInit'
import Nav from './components/NavBar/NavBar'
import Home from './Pages/Home'
import Explorar from './Pages/Explorar'
import UserProfile from './Pages/UserProfile'
import Support from './Pages/Support'
import AboutUs from './Pages/AboutUs'
// import Footer from './components/Footer/Footer'
import Cookies from 'universal-cookie'
import { loginUser } from '../src/store/actions/actions'
import { useDispatch } from 'react-redux'

function App() {
 /*  const cookies = new Cookies()
  const token = cookies.get('TOKEN')
  const dispatch = useDispatch() */
  const cookies = new Cookies()
  const token = cookies.get('TOKEN')
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      dispatch(loginUser(token.user))
      // dispatch(getFavorites(token.user.id))
    }
  }, [])
  return (
    <div className="App">
      <Route exact path={['/', '/explorar', '/user', '/support', '/aboutus', '/register']} component={Nav} />
      <Switch>
      <Route exact path='/register' component={LogInit} />
      <Route exact path='/' component={Home} />
      <Route exact path='/explorar' component={Explorar} />
      <Route exact path='/user' component={UserProfile} />
      <Route exact path='/support' component={Support} />
      <Route exact path='/aboutus' component={AboutUs} />
      </Switch>
      
    </div>
  );
}
// <Route exact path={['/', '/explorar', '/user', '/support', '/aboutus', '/register']} component={Footer} />
export default App;
