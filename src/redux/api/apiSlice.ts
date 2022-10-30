import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Country, CountryData} from './apiTypes'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://covid19-brazil-api.vercel.app/api'}),
    endpoints: (build)=>({
        getDataFromAllCountries: build.query<CountryData, void>({
            query: () => '/report/v1/countries'
        })
    })
})

export const {useGetDataFromAllCountriesQuery} = api