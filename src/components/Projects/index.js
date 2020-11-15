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
  BtnContainer,
} from "./ProjectsElements";
import { Button } from "../ButtonElement";
import ButtonIcon from "../ButtonIcon";

const Projects = () => {
  return (
    <AbContainer id="projects">
      <AbH1>Projects</AbH1>
      <AbWrapper>
        <AbCard>
          <AbIcon src={Icon1} />
          <BtnContainer>
            <ButtonIcon
              icon="s"
              href="https://github.com/Charan-hs/TinDog"
              target="_blank"
            >
              GitHub
            </ButtonIcon>
            <ButtonIcon
              icon="l"
              href="https://charan-hs.github.io/TinDog/"
              target="_blank"
            >
              Live Link
            </ButtonIcon>
          </BtnContainer>
          <AbH2>TinDog</AbH2>
          <AbP>App Promotion Website</AbP>
        </AbCard>
        <AbCard>
          <AbIcon src={Icon2} />
          <BtnContainer>
            <ButtonIcon
              icon="s"
              href="https://github.com/Charan-hs/Backend"
              target="_blank"
            >
              GitHub
            </ButtonIcon>
            <ButtonIcon
              icon="l"
              href="https://backend-charan.herokuapp.com/"
              target="_blank"
            >
              Live Link
            </ButtonIcon>
          </BtnContainer>
          <AbH2>Backend</AbH2>
          <AbP>RestAPI, Authentication, Validation</AbP>
        </AbCard>
        <AbCard>
          <AbIcon src={Icon3} />
          <BtnContainer>
            <ButtonIcon
              icon="s"
              href="https://github.com/Charan-hs/simon"
              target="_blank"
            >
              GitHub
            </ButtonIcon>
            <ButtonIcon
              icon="l"
              href="https://charan-hs.github.io/simon/"
              target="_blank"
            >
              Live Link
            </ButtonIcon>
          </BtnContainer>

          <AbH2>Simon Game</AbH2>
          <AbP>Interactive Game </AbP>
        </AbCard>
      </AbWrapper>
    </AbContainer>
  );
};
//https://charan-hs.github.io/simon/
export default Projects;
