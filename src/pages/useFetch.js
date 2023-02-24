import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [searchword, setSearchWord] = useState("");
  const [pronounce, setPronounce] = useState("");
  const [phonetics, setPhonetics] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [source, setSource] = useState("");

  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(url)
        .then((response) => {
          const getAllData = response.data[0];
          const getPhonetics = getAllData.phonetic;
          const getMeanings = getAllData.meanings;
          const getSearchWord = getAllData.word;
          const getSource = getAllData.sourceUrls;
          const getPronounce = getAllData.phonetics[1].audio;

          setData(getAllData);
          setPhonetics(getPhonetics);
          setMeanings(getMeanings);
          setSearchWord(getSearchWord);
          setSource(getSource);
          setPronounce(getPronounce);

          setError(false);
        })
        .catch((error) => {
          setError(true);
        });
    };
    fetchData();
  }, [url]);

  return {
    data,
    phonetics,
    meanings,
    searchword,
    source,
    pronounce,
    error,
  };
};

export default useFetch;
