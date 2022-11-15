import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function HookBooks(search, limit) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);

  const sendBooks = useCallback(async () => {
    await setLoading(true);
    await setError(false);
    if (search !== undefined && search !== "") {
      await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=0&maxResults=${limit}`
        )
        .then((res) => {
          console.log(search)
          setBooks(res.data.items);
        })
        .catch((error) => setError(error));
      setLoading(false);
    }
  }, [search, limit]);

  useEffect(() => {
    sendBooks();
  }, [sendBooks, search, limit]);

  return { loading, error, books };
}

export default HookBooks;
