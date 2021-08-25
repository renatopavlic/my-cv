import React from "react";
import Wave from "react-wavify";

import "./AnimationWave.css";

const AnimationWave = ({ fill, paused, height, amplitude, speed, points }) => {
  return (
    <Wave
      className="animation-wave"
      fill={fill}
      paused={paused}
      options={{
        height: height,
        amplitude: amplitude,
        speed: speed,
        points: points,
      }}
    />
  );
};

export default AnimationWave;
