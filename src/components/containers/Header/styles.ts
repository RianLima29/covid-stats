import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 80px;
  max-height: fit-content;
  background-color: #2c3639;
  box-shadow: 3px 10px 14px -12px rgba(0, 0, 0, 0.75);
  padding: 15px;
  padding-left: 30px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  color: red;
  width: 30px;
`;

export const Title = styled.h1`
  color: #f2f2f2;
  margin-left: 8px;
  font-weight: 600;
`;
