import { useEffect, useState } from "react";

import ControlBar from "../components/ControlBar";
import Domant from "../components/Domant";
import ErrorPage from "../components/ErrorPage";
import SearchBar from "../components/SearchBar";
import WordInfo from "../components/WordInfo";
import useFetch from "./useFetch";

const Dictionary = () => {
  const [word, setWord] = useState("");

  const { data, phonetics, meanings, searchword, source, pronounce, error } =
    useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

  return (
    <div className="Dictionary grid  lg:px-80 sm:px-32 py-10 px-16">
      <ControlBar />
      <SearchBar word={word} setWord={setWord} />
      {word === "" ? (
        <Domant />
      ) : (
        <>
          {error === false ? (
            <WordInfo
              data={data}
              phonetics={phonetics}
              meanings={meanings}
              searchword={searchword}
              source={source}
              pronounce={pronounce}
            />
          ) : (
            <ErrorPage />
          )}
        </>
      )}
    </div>
  );
};

export default Dictionary;
