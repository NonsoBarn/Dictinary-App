import { UilPlay } from "@iconscout/react-unicons";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";

const WordInfo = ({ phonetics, source, searchword, meanings, pronounce }) => {
  // play audio pronounciation
  let audio = new Audio(pronounce);
  const start = () => {
    audio.play();
  };

  return (
    <div className="grid pt-8 h-full">
      {/* word & audio */}
      <div className="flex justify-between">
        <div className="word">
          <h1 className="dark:text-white text-gray-800 text-4xl pb-2">
            {searchword}
          </h1>
          <p className="text-teal-500 font-semibold">{phonetics}</p>
        </div>
        <div className="audio">
          <button
            onClick={start}
            className=" text-teal-500 rounded-full p-3 bg-teal-500 bg-opacity-30 hover:bg-opacity-50"
          >
            <UilPlay className="" size={20} />
          </button>
        </div>
      </div>
      {/* noun */}

      {meanings.map((meaning, index) => (
        <div key={index} className="pt-5 pb-2.5">
          <p className="text-gray-800 dark:text-gray-100 font-bold pb-1.5">
            {meaning.partOfSpeech}
          </p>
          <hr />

          <div className="pt-3">
            <h4 className="text-gray-500">Meaning</h4>
            <ul className="text-gray-400 list-disc pl-8 text-sm pt-3">
              {meaning.definitions.map((definition, index) => (
                <li key={index} className="pb-0.5 text-teal-500">
                  <div className="text-gray-800 dark:text-gray-300">
                    {definition.definition}
                  </div>
                </li>
              ))}
            </ul>

            <h4 className="text-gray-500 pt-4 text-sm">
              Synonyms:
              <span className="text-teal-500 pl-3 font-semibold">
                {meaning.synonyms.join(", ")}
              </span>
            </h4>
            <h4 className="text-gray-500 pt-1 text-sm">
              Antonyms:
              <span className="text-teal-500 pl-3 font-semibold">
                {meaning.antonyms.join(", ")}
              </span>
            </h4>
          </div>
        </div>
      ))}

      <hr />
      <div className="text-gray-500 flex text-sm pt-4">
        <a href={source} target="_blank" className="pr-2">
          Source:{" "}
          <span className="cursor-pointer font-semibold underline pl-0 hover:text-teal-500">
            {source}
          </span>
        </a>
        <button className="pt-0">
          <UilExternalLinkAlt size={20} />
        </button>
      </div>
    </div>
  );
};

export default WordInfo;
