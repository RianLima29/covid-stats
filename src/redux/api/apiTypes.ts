export interface Country {
    
    country: string,
    cases: number,
    confirmed: number,
    deaths: number,
    recovered: number,
    updated_at: string
    
}
export interface CountryData{
    data: Country[]
}