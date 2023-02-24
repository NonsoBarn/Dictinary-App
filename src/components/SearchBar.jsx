import { UilSearch } from "@iconscout/react-unicons";
import { useState } from "react";

const SearchBar = ({ setWord, word }) => {
  const [wordInput, setWordInput] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (wordInput !== "") setWord(wordInput);
  };

  const onEnterKeyPress = (e) => {
    if (e.which === 13) {
      handleSearchClick();
    }
  };

  // console.log(wordInput);

  return (
    <form>
      <div className="flex pt-4">
        <div className="relative w-full">
          <input
            value={wordInput}
            type="text"
            className=" p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-200 rounded-lg   dark:bg-gray-800  dark:text-white focus:outline-gray-200 dark:focus:outline-gray-900  "
            placeholder="Search for any word..."
            onChange={(e) => setWordInput(e.target.value)}
            onKeyDown={onEnterKeyPress}
          />
          <button
            onClick={handleSearchClick}
            className="absolute top-2.5 right-2 p-0 text-sm font-medium text-teal-500 rounded-r-lg hover:text-teal-600   "
          >
            <UilSearch size={20} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
