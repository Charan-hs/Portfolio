import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SmWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-wdith: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const WR = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  margin-bottom: 20px;
`;

export const SIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 20px;
`;
