import React from "react";
import { AnimationWave } from "../AnimationWave";

import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <AnimationWave
        fill="#66FCF1"
        paused={false}
        height={20}
        amplitude={60}
        speed={0.3}
        points={2}
      />
      <h4 style={{ paddingTop: "30vh" }}>
        Welcome to <span>portfolio website</span> of an aspiring{" "}
        <span>web developer</span> looking to <span>learn</span> and{" "}
        <span>create</span>.
      </h4>
    </section>
  );
};

export default Welcome;
