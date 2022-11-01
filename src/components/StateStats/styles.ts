import styled from "styled-components";

export const Container = styled.div`
  padding: 5px 15px;
  margin: 5px 0;
  border-radius: 5px;
  border-bottom: 1px solid #dcd7c9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100%;
  width: 100%;
  transition: 1s;
`;

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  width: 30%;
  max-width: 30%;

  & > svg {
    min-width: 15px;
  }
`;

export const Info = styled.p`
  margin: 0 10px;
  margin-left: 5px;
`;
