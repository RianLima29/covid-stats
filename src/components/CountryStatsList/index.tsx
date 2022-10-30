import React from "react";
import * as C from "./styles";
import { useGetDataFromAllCountriesQuery } from "../../redux/api/apiSlice";
import CountryStats from "../CountryStats";
import { AiOutlineLoading } from "react-icons/ai";
import SearchBar from "../SearchBar";
import { Country } from "../../redux/api/apiTypes";

export default function CountryStatsList() {
  const { data, error, isLoading } = useGetDataFromAllCountriesQuery();
  const [filteredData, setFilteredData] = React.useState<
    Country[] | undefined
  >();

  const canDisplayData = !isLoading && !error;

  const content = filteredData?.map((item, index) => (
    <CountryStats data={item} key={index} />
  ));

  return (
    <C.Container>
      {canDisplayData && (
        <>
          <SearchBar
            placeholder="Search by country..."
            filterBy="country"
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
