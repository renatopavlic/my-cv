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
        amplitude={110}
        speed={0.2}
        points={1}
      />
      <CursorAnimation />
      <div className="button-container">
        <a href="#projects">
          <button className="my-button btn-projects">
            <i className="fas fa-briefcase"></i>Projects
          </button>
        </a>
        <a href="#about-me">
          <button className="my-button btn-about">
            <i className="fas fa-user"></i>About me
          </button>
        </a>
      </div>
      <h4>
        Welcome to the<span> portfolio website</span> of an aspiring{" "}
        <span>web developer</span> looking to <span>learn</span> and{" "}
        <span>create</span>
      </h4>
    </section>
  );
};

export default Welcome;
