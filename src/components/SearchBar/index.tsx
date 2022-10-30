import React from "react";
import * as C from "./styles";

interface Props {
  setFilteredData: React.Dispatch<React.SetStateAction<any | undefined>>;
  data: any;
  filterBy: string;
  placeholder: string;
}

export default function SearchBar({
  setFilteredData,
  filterBy,
  data,
  placeholder,
}: Props) {
  const [searchBar, setSearchBar] = React.useState<string>("");

  React.useEffect(() => {
    if (data) {
      let filterData = data.data.filter((item: any) => {
        return item[filterBy].toLowerCase().includes(searchBar.toLowerCase());
      });

      setFilteredData(filterData);
    }
  }, [searchBar, data]);

  return (
    <C.SearchBar
      value={searchBar}
      onChange={(e) => setSearchBar(e.target.value)}
      placeholder={placeholder}
    />
  );
}
