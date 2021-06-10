import { Switch, Route } from 'react-router-dom';
import HomePage from 'pages/Home/Home';
import WorkoutPage from 'pages/Workout/Workout';
import ThankYouPage from 'pages/ThankYou/ThankYou';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/workout">
          <WorkoutPage />
        </Route>
        <Route path="/thanks">
          <ThankYouPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
