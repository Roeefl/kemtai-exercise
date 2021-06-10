import cx from 'classnames';
import styles from './MovementGraph.module.scss';

interface IMovementGraphProps {
  scores: number[]
  currentMoveIndex: number
}

export default function MovementGraph({ scores, currentMoveIndex }: IMovementGraphProps) {
  return  (
    <div className={styles.container}>
      <ul className={styles.dots}>
        {scores.map((score, index) => {
          const isPreviousMovement = index <= currentMoveIndex;

          return (
            <li
              key={index} 
              className={cx(styles.dot, { [styles.isActive]: index === currentMoveIndex, [styles.previous]: isPreviousMovement })}
              style={{ height: isPreviousMovement ? `${score}px` : '17px' }}
            />
          );
        })}
      </ul>
    </div>
  );
}
