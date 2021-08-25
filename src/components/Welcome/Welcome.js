import React from "react";
import { AnimationWave } from "../AnimationWave";

import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <h2>Welcome section</h2>
      <AnimationWave
        fill="#66FCF1"
        paused={false}
        height={10}
        amplitude={30}
        speed={0.2}
        points={3}
      />
    </section>
  );
};

export default Welcome;
