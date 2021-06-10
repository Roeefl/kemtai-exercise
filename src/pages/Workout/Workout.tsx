import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryParam, StringParam } from 'use-query-params';
import useTimeout from 'use-timeout';
import useInterval from 'use-interval';
import Webcam from 'components/Webcam/Webcam';
import Timer from 'components/Timer/Timer';
import MovementGraph from 'components/MovementGraph/MovementGraph';
import data from './data.json';
import styles from './Workout.module.scss';

const { TimeOfMove, ScoreOfMove } = data;

const SECOND_MS = 1000;
const MINUTE_NS = 60 * SECOND_MS;

export default function Workout() {
  const history = useHistory();
  const [type, setType] = useQueryParam('type', StringParam);

  const [moveIndex, setMoveIndex] = useState(0);

  const moveScore = moveIndex > ScoreOfMove.length
    ? null
    : ScoreOfMove[moveIndex];

  useTimeout(() => history.push('/thanks'), MINUTE_NS);

  useInterval(() => {
    setMoveIndex(moveIndex + 1);
  }, (TimeOfMove[moveIndex] - TimeOfMove[moveIndex - 1]) * SECOND_MS);

  return (
    <div className={styles.container}>
      <Webcam />
      <div className={styles.score}>
        {moveScore}
      </div>
      <div className={styles.timer}>
        <Timer />
      </div>
      <div className={styles.graph}>
        <MovementGraph scores={data.ScoreOfMove} currentMoveIndex={moveIndex} />
      </div>
    </div>
  );
}
