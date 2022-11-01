export interface Country {
  country: string;
  cases: number;
  confirmed: number;
  deaths: number;
  recovered: number;
  updated_at: string;
}
export interface CountryData {
  data: Country[];
}

export interface State {

    uid: number,
    uf: string,
    state: string,
    cases: number,
    deaths: number,
    suspects: number,
    refuses: number,
    broadcast: boolean,
    comments: string,
    datetime: string
      
}
export interface StateData {
    data: State[]
}
