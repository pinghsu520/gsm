import React from 'react';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


class App extends React.Component {
  render() {
      return (
          <div>
              <AppRouter />
          </div>
      )
  }
};

export default App;