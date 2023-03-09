import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, data: movie } = useFetch(`&i=${id}`);

  if (loading) {
    return <div className="w-32 h-32 m-auto mt-40 text-5xl">Loading...</div>;
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="mx-auto mt-6  mb-10 grid gap-8 grid-cols-2 max-w-screen-lg w-screen ">
      <img src={poster} className="w-full block" alt={title} />
      <div>
        <h2 className="mb-4 text-2xl font-extrabold  dark:text-white">
          {title}
        </h2>
        <p className="font-normal text-gray-500 text-xl dark:text-gray-400">
          {plot}
        </p>
        <h4 className="font-normal text-gray-500 text-xl dark:text-gray-400">
          {year}
        </h4>
        <Link to="/">
          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Back to Movies
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
