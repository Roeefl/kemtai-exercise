import styles from './Home.module.scss';
import strengthImage from 'assets/strength.jpg';
import cardioImage from 'assets/cardio.jpg';
import flexibilityImage from 'assets/flexibility.jpg';

const workouts = [
  {
    key: 'strength',
    image: strengthImage,
  },
  {
    key: 'cardio',
    image: cardioImage,
  },
  {
    key: 'flexibility',
    image: flexibilityImage,
  },
];

export default function Home() {
  return (
    <div>
      <h1 className={styles.header}>
        Choose a short workout
      </h1>
      <ul className={styles.workouts}>
        {workouts.map(({ key, image }) => (
          <li key={key} className={styles.workout}>
            <img src={image} alt={key} className={styles.image} />
          </li>
        ))}
      </ul>
    </div>
  );
}
