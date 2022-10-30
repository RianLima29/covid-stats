import React from "react";
import * as C from "./styles";
import { GiCoffin } from "react-icons/gi";
import { RiCapsuleFill, RiVirusFill } from "react-icons/ri";
import { Country } from "../../redux/api/apiTypes";

interface Props {
  data: Country;
}

export default function CountryStats({ data }: Props) {
  return (
    <C.Container>
      <C.InfoContainer>
        <C.Info>{data.country}:</C.Info>
      </C.InfoContainer>
      <C.InfoContainer>
        <RiVirusFill color="green" />
        <C.Info>{data.confirmed.toLocaleString()}</C.Info>
      </C.InfoContainer>
      <C.InfoContainer>
        <GiCoffin color="brown" />
        <C.Info>{data.deaths.toLocaleString()}</C.Info>
      </C.InfoContainer>
    </C.Container>
  );
}
