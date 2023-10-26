import { useEffect, useState } from "react";
import NewsAPI from "./components/newsAPI";
function App() {
  const [query, setQuery] = useState("Headlines");
  const [inputQuery, setInputQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputQuery);
  };
  return (
    <>
      <div className="font-sans min-h-screen min-w-full flex justify-center items-stretch flex-col gap-6 text-white p-10">
        <h1 className="text-5xl font-black">NEWS API</h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 active:outline-none"
              placeholder="Search News.."
              onChange={(e) => {
                setInputQuery(e.target.value);
              }}
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <NewsAPI query={query} />
      </div>
      <div className="text-center text-2xl py-5 bg-slate-100 sticky bottom-0">
        Copyright 2023 ©{" "}
        <a
          href="https://github.com/elishasmil3"
          className="underline decoration-pink-500 font-bold"
        >
          Elisha Smile
        </a>
      </div>
    </>
  );
}

export default App;
