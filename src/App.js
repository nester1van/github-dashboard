import React, { useEffect } from 'react';
import store        from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter,
         Switch,
         Route   } from 'react-router-dom';

import LocalStorage from './components/LocalStorage/LocalStorage';
import HomePage     from './components/HomePage/HomePage';
import RepoCardPage from './components/RepoCardPage/RepoCardPage';
import { setCurrentPage, setQuery } from './redux/reposWithCommitsAndContributors/actions';

function App() {

  return (

    <div className="App">
      <Provider store={store}>
        <LocalStorage>
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
        </LocalStorage>
      </Provider>
    </div>
  );
}

export default App;
