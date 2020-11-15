import styled from "styled-components";

export const ButtonIconEl = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 30px" : "10px 20px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "14px" : "12px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;

  transition: all 0.2s ease-in-out;
  text-decoration: none;

 
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    color: #010606;
  }
`;
