import React from "react";
import * as C from "./styles";
import { useGetDataFromAllStatesQuery } from "../../redux/api/apiSlice";
import StateStats from "../StateStats";
import { AiOutlineLoading } from "react-icons/ai";
import SearchBar from "../SearchBar";
import {State} from "../../redux/api/apiTypes";

export default function StateStatsList() {
  const { data, error, isLoading } = useGetDataFromAllStatesQuery();
  const [filteredData, setFilteredData] = React.useState<
    State[] | undefined
  >();

  const canDisplayData = !isLoading && !error;

  const content = filteredData?.map((item, index) => (
    <StateStats data={item} key={index} />
  ));

  return (
    <C.Container>
      {canDisplayData && (
        <>
          <SearchBar
            placeholder="Search by brazilian state"
            filterBy="state"
            data={data}
            setFilteredData={setFilteredData}
          />
          {content}
        </>
      )}

      {isLoading && (
        <C.LoadingContainer>
          <AiOutlineLoading size="100px"></AiOutlineLoading>
        </C.LoadingContainer>
      )}
      {error && (
        <C.ErrorMessage>
          Erro ao carregar, verifique a sua conexão.
        </C.ErrorMessage>
      )}
    </C.Container>
  );
}

