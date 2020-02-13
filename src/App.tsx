import React   from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from 'react-router-dom';
import { compose } from 'redux';
import { AuthState } from './types';
import './App.scss';
import print from './helpers/print';
import withAuth from './components/shared/hoc/withAuth';
import withUIHelp from './components/shared/hoc/withUIHelp';
import withTheme from './components/shared/hoc/withTheme';

type State = {};

class App extends React.PureComponent<AuthState, State> {

  componentDidMount() {
    if (process.env.REACT_APP_DISABLE_AUTH === 'true') {
      print.authIsDisabled();
    }
  }

  render() {

    return (
      <Router>
        <div className="app">
        </div>
      </Router>
    );
  }
}

export default compose(
  withTheme,
  withUIHelp,
  withAuth
)(App);