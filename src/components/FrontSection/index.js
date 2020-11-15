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
import Video1 from "../../videos/video2.mp4";
import { Button } from "../ButtonElement";

const FrontSection = () => {
  const [hover, setHover] = useState(false);
  const [isLoad, setIsLoad] = useState(false)

  const onLoadedData = () => {
    setIsLoad(true);
  };

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Container id="Home">
      <VideobackGround>
      <VideoBg
          autoPlay={true}
          loop
          muted
          src={Video}
          type="video/mp4"
          style={{ display: isLoad ? 1 : 0 }}
          onLoadedData={onLoadedData}
          
        />
        <VideoBg
          autoPlay={true}
          loop
          muted
          src={Video}
          type="video/mp4"
          style={{ opacity: isLoad ? 1 : 0 }}
          onLoadedData={onLoadedData}
          
        />
      </VideobackGround>
      <MainContent>
        <MainH1>Full Stack Web Developer</MainH1>
        <MainP>Interactive resume</MainP>
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
