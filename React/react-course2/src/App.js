import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetUps';
import NewMeetupPage from './pages/NewMeetUp';
import FavoritesPage from './pages/FavoritesPage';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return <div>
      <MainNavigation/>
      <Switch>
        <Route path='/'>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>;
}

export default App;
