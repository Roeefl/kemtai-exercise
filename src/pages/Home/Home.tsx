import { useHistory } from 'react-router-dom';
import styles from './Home.module.scss';
import logo from 'assets/logo.svg';
import strengthImage from 'assets/strength.jpg';
import cardioImage from 'assets/cardio.jpg';
import flexibilityImage from 'assets/flexibility.jpg';

const workouts = [
  {
    key: 'cardio',
    image: cardioImage,
  },
  {
    key: 'strength',
    image: strengthImage,
  },
  {
    key: 'flexibility',
    image: flexibilityImage,
  },
];

export default function Home() {
  const history = useHistory();

  const onWorkoutSelect = (key: string) => {
    history.push(`/workout?type=${key}`)
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="app-logo" className={styles.logo} />
      </header>
      <h1 className={styles.title}>
        Choose a short workout
      </h1>
      <ul className={styles.workouts}>
        {workouts.map(({ key, image }) => (
          <li key={key} onClick={() => onWorkoutSelect(key)} className={styles.workout}>
            <img src={image} alt={key} className={styles.image} />
            <span className={styles.content}>
              <span className={styles.duration}>
                2 min
              </span>
              <h2 className={styles.label}>
                {key}
              </h2>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
