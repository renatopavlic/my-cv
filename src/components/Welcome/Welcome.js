import React from "react";
import { AnimationWave } from "../AnimationWave";
import { CursorAnimation } from "../CursorAnimation";

const Welcome = () => {
  return (
    <section className="welcome">
      <div />
      <AnimationWave
        fill="#66FCF1"
        paused={false}
        height={20}
        amplitude={60}
        speed={0.3}
        points={2}
      />
      <CursorAnimation />
      <h4>
        Welcome to the<span> portfolio website</span> of an aspiring{" "}
        <span>web developer</span> looking to <span>learn</span> and{" "}
        <span>create</span>.
      </h4>
    </section>
  );
};

export default Welcome;
