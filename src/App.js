import { useCallback, useEffect, useRef, useState } from "react";
import Books from "./components/Books";
import "./styles/index.scss";
import HookBooks from "./hooks/HookBooks";
import ReactLoading from 'react-loading';

function App() {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState("");
  const [limit, setLimit] = useState(1);
  const { loading, error, books } = HookBooks(search, limit);
  const loader = useRef(null);

  //Pour la recherche
  const handleIsSearch = (e) => {
    setIsSearch(e.target.value);
  };

  //Pour vérifier qu'on est en bas de la page
  const handleObserver = useCallback((e) => {
    if (e[0].isIntersecting) {
      setLimit((res) => res + 1);
    }
  }, []);

  useEffect(() => {
    //Pour le scroll
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    //Pour mettre un delai dans la recherche
    const delayDebounceFn = setTimeout(() => {
      setSearch(isSearch);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [handleObserver, isSearch]);

  return (
    <div className="App">
      <div className="search">
        <img src="./img/header.png" alt="" />
        <input
          type="search"
          name="livre"
          id="livre"
          value={isSearch}
          onChange={handleIsSearch}
          placeholder="Rechercher un livre.."
        />
      </div>
      {books.length > 0 && <Books props={books} />}
      <div ref={loader}></div>
      {loading && (
        <ReactLoading type={"bubbles"} color={"black"} height={200} width={200} />
      )}
      {error && <h1>L'api ne peut pas récupérer plus de 40 livres</h1>}
    </div>
  );
}

export default App;
