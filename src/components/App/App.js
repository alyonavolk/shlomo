import { HashRouter as Route, Switch, useLocation } from 'react-router-dom';
import AsideMenu from '../asideMenu/asideMenu';
import AsideMore from '../asideMore/asideMore';
import Main from '../main/main';
import ProfileFeed from '../profileFeed/profileFeed';
import './App.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  const lock = useLocation();

  return (
    <div className="app">
        <AsideMenu />
        <TransitionGroup>
        <CSSTransition
          timeout = {300}
          classNames = 'fade'
          key={lock.key}>
          <div className='app__anim'>
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
        </CSSTransition>
        </TransitionGroup>
      </div>
  );
}

export default App;
