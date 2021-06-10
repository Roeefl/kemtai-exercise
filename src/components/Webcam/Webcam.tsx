import { useRef, useCallback } from 'react';
import ReactWebcam from 'react-webcam';

const WIDTH = 500;
const HEIGHT = 720;

const videoConstraints = {
  width: WIDTH,
  height: HEIGHT,
  facingMode: 'user',
};

export default function Webcam() {  
  const webcamRef = useRef(null);

  return (
    <ReactWebcam
      audio={false}
      ref={webcamRef}
      width={WIDTH}
      height={HEIGHT}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
    />
  );
}
