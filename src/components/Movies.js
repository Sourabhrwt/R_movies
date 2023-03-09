import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Movies = () => {
  const { movies, loading } = useGlobalContext();
  if (loading) {
    return <div className="w-32 h-32 m-auto mt-40 text-5xl ">Loading...</div>;
  }

  return (
    <section className="w-9/12 max-w-max grid grid-cols-4 gap-20 pt-6 pb-4 m-auto">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title,} = movie;
        return (
          <Link
            to={`/movies/${id}`}
            key={id}
            className="block object-cover relative overflow-hidden w-full h-96"
          >
            <article className="m-auto">
              <img
                src={poster}
                className="block object-cover w-full h-96"
                alt={title}
              />
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
