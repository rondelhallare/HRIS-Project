import Back from "./Components/LogIn/Back";
import Body from "./Components/Dashboard/Body";
import UserProf from "./Components/UserProfile/UserProf";
import { Switch, Route, Link } from 'react-router-dom'
import './App.css'
import NavBar from "./Components/Navigation/NavBar";

function App() {
  return (

    <Switch>

      <Route exact path='/LogIn' component={Back} />
      <Route exact path='/Dashboard' component={Body} />
      <Route exact path='/UserProfile' component={UserProf} />
      <Route exact path='/Navigation' component={NavBar} />


    </Switch>

  )

}

export default App;