import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from 'pages/Home';
import logo from 'assets/logo.svg';
import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} alt="app-logo" className={styles.logo} />
        </header>
        <main className={styles.main}>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
