import styled from "styled-components";

export const AbContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  @media screen and (max-width: 900px) {
    height: 1100px;
  }
  @media screen and (max-width: 800px) {
    height: 1300px;
  }
  @media screen and (max-width: 600px) {
    height: 1500px;
  }
`;

export const AbWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 10px 0;
  }
`;
export const AbCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #010606;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const AbIcon = styled.img`
  height: 160px;
  width: 100%;
  transform: scale(1.14);
  margin-bottom: 10px;
  object-fit: contain;
  border-radius: 10px;
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
`;

export const AbH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AbH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const AbP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  felx-direction: row;
  justify-content: space-between;
  margin: 10px 0 20px;
`;
