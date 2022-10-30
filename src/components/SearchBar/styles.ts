import styled from "styled-components";

export const SearchBar = styled.input`
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  color: white;
  outline: none;
  padding: 5px;
  transition: 0.3s;

  &:focus {
    padding: 7px;
  }

  &::placeholder {
    color: #f2f2f2;
  }
`;
