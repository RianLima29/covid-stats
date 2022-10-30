import React from "react";
import * as C from "./styles";
import { useGetDataFromAllCountriesQuery } from "../../redux/api/apiSlice";
import CountryStats from "../CountryStats";



export default function CountryStatsList() {

  const {data, error, isLoading} = useGetDataFromAllCountriesQuery()

  const canDisplayData = !isLoading && !error 

  const content = data?.data.map((item)=>(
    <CountryStats data={item}/>
  ))

  return (
    <>
    
    {canDisplayData &&
    
      content
    
    }
    
    </>
  );
}
