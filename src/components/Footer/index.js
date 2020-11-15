import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  SocialMedia,
  SmWrap,
  WR,
  SIconLink,
  SIcons,
  FooterWrap,
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SmWrap>
            <SIcons>
              <SIconLink
                href="https://www.linkedin.com/in/charan-gowda"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SIconLink>
              <SIconLink
                href="https://facebook.com/CharanGowda08"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </SIconLink>
              <SIconLink
                href="https://instagram.com/charan_gowda__"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SIconLink>
              <SIconLink
                href="https://github.com/Charan-hs"
                target="_blank"
                arial-label="GitHub"
              >
                <FaGithub />
              </SIconLink>
            </SIcons>
            <WR>Copyright © {new Date().getFullYear()} All rights reserved.</WR>
          </SmWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
