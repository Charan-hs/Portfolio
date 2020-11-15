import React, { useState } from "react";
import {
  Container,
  VideobackGround,
  VideoBg,
  MainBtnWrapper,
  MainContent,
  MainH1,
  MainP,
  ArrowForward,
  ArrowRight,
} from "./FrontElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const FrontSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Container id="Home">
      <VideobackGround>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </VideobackGround>
      <MainContent>
        <MainH1>Full Stack Web Developer</MainH1>
        <MainP>
        Interactive resume
        </MainP>
        <MainBtnWrapper>
          <Button
            href="mailto:charanengg08@gmail.com"
            onMouseEnter={onHover}
            primary="true"
            dark="true"
            onMouseLeave={onHover}
          >
            Let's Talk {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </Container>
  );
};

export default FrontSection;
