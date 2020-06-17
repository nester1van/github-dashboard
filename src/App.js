import React        from 'react';
import store        from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter,
         Switch,
         Route   } from 'react-router-dom';

import HomePage     from './components/HomePage/HomePage';
import RepoCardPage from './components/RepoCardPage/RepoCardPage';

function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/repocard/:id">
              <RepoCardPage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
