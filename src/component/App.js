import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import EditBook from './EditBook';
import CreateBook from './CreateBook';
import NoMatch from './NoMatch';
import {NotificationContainer} from 'react-notifications';

class App extends React.Component {

  render() {
    return (
      <>
        <NotificationContainer />
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/create-book' component={CreateBook} />
            <Route path='/edit-book/:bookUid' component={EditBook} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
