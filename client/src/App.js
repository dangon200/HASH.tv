import "./App.css";
import { Route, Switch } from "react-router-dom";
/* import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie' */
import Nav from './components/NavBar/NavBar'
import Home from './Pages/Home'
import Explorar from './Pages/Explorar'
import UserProfile from './Pages/UserProfile'
import Support from './Pages/Support'
import AboutUs from './Pages/AboutUs'


function App() {
 /*  const cookies = new Cookies()
  const token = cookies.get('TOKEN')
  const dispatch = useDispatch() */

  return (
    <div className="App">
      <Route exact path={['/', '/explorar', '/user', '/support', '/aboutus' ]} component={Nav} />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/explorar' component={Explorar} />
      <Route exact path='/user' component={UserProfile} />
      <Route exact path='/support' component={Support} />
      <Route exact path='/aboutus' component={AboutUs} />
   
      </Switch>
    </div>
  );
}

export default App;
