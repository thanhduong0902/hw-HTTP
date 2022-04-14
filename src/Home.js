import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
function Home() {
  const [inputValue, setInputValue] = useState("");
  const [input, setInput] = useState("");

  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    try {
      setInput(inputValue);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=1e654d3d2ad76350db78a446b60656af&query=${input}`
      );
      console.log(response.data.results);
      setMovie(response.data.results);
      console.log(movie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [input]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInput(inputValue);
        }}
      >
        <i className="fa fa-camera-movie"></i>
        <h2>The Movies</h2>
        <input
          placeholder="Enter the keywords"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </form>
      <ul>
        {movie.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
