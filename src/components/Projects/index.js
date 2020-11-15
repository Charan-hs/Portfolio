import React from "react";
import Icon1 from "../../images/tindog.png";
import Icon2 from "../../images/backend.png";
import Icon3 from "../../images/simon.png";
import {
  AbContainer,
  AbCard,
  AbH1,
  AbH2,
  AbIcon,
  AbP,
  AbWrapper,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <AbContainer id="projects">
      <AbH1>Projects</AbH1>
      <AbWrapper>
        <AbCard href="https://charan-hs.github.io/TinDog/" target="_blank">
          <AbIcon src={Icon1} />
          <AbH2>TinDog</AbH2>
          <AbP>App Promotion Website</AbP>
        </AbCard>
        <AbCard href="https://backend-charan.herokuapp.com/" target="_blank">
          <AbIcon src={Icon2} />
          <AbH2>Backend</AbH2>
          <AbP>RestAPI, Authentication, Validation</AbP>
        </AbCard>
        <AbCard href="https://charan-hs.github.io/simon/" target="_blank">
          <AbIcon src={Icon3} />
          <AbH2>Simon Game</AbH2>
          <AbP>Interactive Game </AbP>
        </AbCard>
      </AbWrapper>
    </AbContainer>
  );
};
//https://charan-hs.github.io/simon/
export default Projects;
