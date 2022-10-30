import React from "react";
import * as C from "./styles";

interface Props {
  title: string;
  logo?: JSX.Element | string;
}

export default function Header(props: Props) {
  let isString = typeof props.logo === "string" && props.logo;

  let isJsx = !isString;

  return (
    <C.Container>
      {isString && <C.Logo src={props.logo as string}></C.Logo>}
      {isJsx && props.logo}
      <C.Title>{props.title}</C.Title>
    </C.Container>
  );
}
