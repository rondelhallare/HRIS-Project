import Back from "./Components/LogIn/Back";
import Body from "./Components/Dashboard/Body";
import UserProf from "./Components/UserProfile/UserProf";
import NavBar from "./Components/Navigation/NavBar";
import { Switch, Route, Link, BrowserRouter as router } from 'react-router-dom'
import './App.css'
import TimeBody from "./Components/TimeLogs/TimeBody";

function App() {
  return (

    <Switch>

      <NavBar />
      <Route path='/LogIn' component={Back} />
      <Route path='/Dashboard' component={Body} />
      <Route path='/UserProfile' component={UserProf} />
      <Route path='/TimeLogs' component={TimeBody} />

    </Switch>

  )

}

export default App;