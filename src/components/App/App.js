import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import AsideMenu from '../asideMenu/asideMenu';
import AsideMore from '../asideMore/asideMore';
import Main from '../main/main';
import ProfileFeed from '../profileFeed/profileFeed';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <AsideMenu />
        <Switch>
              <Route exact path='/'>
                <ProfileFeed />
                  <AsideMore gallery/>
              </Route>
              <Route exact path='/main'>
                <Main />
                  <AsideMore />
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
