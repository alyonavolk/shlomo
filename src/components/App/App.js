//import logo from './logo.svg';
import AsideMenu from '../asideMenu/asideMenu';
import AsideMore from '../asideMore/asideMore';
import ProfileFeed from '../profileFeed/profileFeed';
import './App.scss';

function App() {
  return (
    <div className="app">
      <AsideMenu />
      <ProfileFeed />
      <AsideMore />
    </div>
  );
}

export default App;
