import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Colors from './components/Colors/Colors.js';
import NotFound from './components/NotFound/NotFound';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/rgb/160/230/255" />
        </Route>
        <Route path="/rgb/:r/:g/:b">
          <Colors />
          <Navigation />
        </Route>
        {/* <Navigation /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
