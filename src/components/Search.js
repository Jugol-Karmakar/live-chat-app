import React from "react";

const Search = () => {
  return (
    <div>
      <div className="group relative mx-6 my-2">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-white"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>

        <input
          className="outline-none appearance-none w-full text-sm leading-6 text-white placeholder-slate-400 rounded-md py-2 pl-10  shadow-sm bg-[#202c33]"
          type="text"
          placeholder="Search or new chat"
          aria-label="Filter projects"
        />
      </div>
    </div>
  );
};

export default Search;
