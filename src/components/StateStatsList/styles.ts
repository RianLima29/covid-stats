import styled from "styled-components";

export const LoadingContainer = styled.div`
  animation: spin 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  min-width: 500px;
  width: 45%;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  background-color: black;
  border: 1px solid transparent;
  transition: 0.5s;

  border: 1px solid #f2f2f2;

  @media (max-width: 500px) {
    min-width: 100%;
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    padding: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #f2f2f2;
    border-radius: 10px;
    height: 50px;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: thin;
  color: red;
`;
