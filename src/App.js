import { useCallback, useEffect, useRef, useState } from "react";
import Books from "./components/Books";
import "./styles/index.scss";
import HookBooks from "./hooks/HookBooks";

function App() {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(1);
  const { loading, error, books } = HookBooks(search, limit);
  const loader = useRef(null);

  //Pour la recherche
  const handleSearch = (e) => {
    setSearch(e.target.value);
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
  }, [handleObserver, search]);

  return (
    <div className="App">
      <div className="search">
        <h1>Rechercher un livre</h1>
        <input
          type="search"
          name="livre"
          id="livre"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {books.length > 0 && <Books props={books} />}
      <div ref={loader}></div>
      {loading && <h1>LOADING MA KICHE</h1>}
      {error && <h1>ERREUR MA KICHE</h1>}
    </div>
  );
}

export default App;
