import { MagnifyingGlass } from "phosphor-react";
import { SearchForm } from "./styles";

export function Search() {
  return (
    <SearchForm>
      <input type="text" placeholder="Busque uma transação" />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchForm>
  );
}
