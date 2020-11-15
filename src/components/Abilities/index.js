import React from "react";
import {
  Column2,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  TextWrapper,
  TopLine,
  Img,
  Img2,
  ImgWrap,
  Img2Container,
  SubTitle,
  IWraper,
} from "./AbilitiesElements";

const Abilities = ({ lightBg, id, imgStart, topLine, darkText, img, alt }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                {/* <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle> */}
                <Img2Container>
                  <IWraper>
                    <Img2
                      src={require("../../images/react.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>React</SubTitle>
                  </IWraper>
                  <IWraper>
                    <Img2
                      src={require("../../images/mongodb.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>MongoDB</SubTitle>
                  </IWraper>
                  <IWraper>
                    <Img2
                      src={require("../../images/nodejs1.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>NodeJs</SubTitle>
                  </IWraper>
                  <IWraper>
                    <Img2
                      src={require("../../images/sql-server.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>SQL</SubTitle>
                  </IWraper>
                  <IWraper>
                    <Img2
                      src={require("../../images/html-5.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>HTML 5</SubTitle>
                  </IWraper>
                  <IWraper>
                    <Img2
                      src={require("../../images/css.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>CSS 3</SubTitle>
                  </IWraper>
                  <IWraper>
                    <Img2
                      src={require("../../images/javascript.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>JavaScript</SubTitle>
                  </IWraper>
                 
                  <IWraper>
                    <Img2
                      src={require("../../images/sass.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>Sass</SubTitle>
                  </IWraper>
                  <IWraper>
                    <Img2
                      src={require("../../images/python.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>Python</SubTitle>
                  </IWraper>
                  <IWraper>
                    <Img2
                      src={require("../../images/java.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>Java</SubTitle>
                  </IWraper>
                  <IWraper>
                    <Img2
                      src={require("../../images/algorithm.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>Algorithm</SubTitle>
                  </IWraper>
                  <IWraper>
                    <Img2
                      src={require("../../images/structure.svg").default}
                      alt={alt}
                    />
                    <SubTitle darkText={darkText}>Data Struture</SubTitle>
                  </IWraper>
                </Img2Container>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img.default} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Abilities;
