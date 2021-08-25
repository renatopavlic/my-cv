import React from "react";
import { AboutMe, ProjectList, Welcome } from "../../components";

const HomePage = () => {
  return (
    <section className="home-page">
      <Welcome />
      <ProjectList />
      <AboutMe />
    </section>
  );
};

export default HomePage;
