import React from "react";
import * as C from "./styles";
import { GiCoffin } from "react-icons/gi";
import { RiCapsuleFill, RiVirusFill } from "react-icons/ri";
import { State } from "../../redux/api/apiTypes";

interface Props {
  data: State;
}

export default function Stats({ data }: Props) {
  return (
    <C.Container>
      <C.InfoContainer>
        <C.Info>{data.state}:</C.Info>
      </C.InfoContainer>
      <C.InfoContainer>
        <RiVirusFill color="green" />
        <C.Info>{data.cases.toLocaleString()}</C.Info>
      </C.InfoContainer>
      <C.InfoContainer>
        <GiCoffin color="brown" />
        <C.Info>{data.deaths.toLocaleString()}</C.Info>
      </C.InfoContainer>
    </C.Container>
  );
}
