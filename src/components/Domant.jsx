import { UilBookAlt } from "@iconscout/react-unicons";
const Domant = () => {
  return (
    <div className=" cart-empty flex flex-row h-screen  justify-center items-center pb-40 ">
      <div className="text-center max-w-lg p-0 opacity-20">
        <UilBookAlt
          size={200}
          className="inline-flex items-center  text-gray-600"
        />

        <h3 className="mb-1 text-md font-bold text-2xl tracking-tight text-gray-600">
          DICTIONARY
        </h3>
        <p className="text-1xl mb-3  text-gray-600 leading-5 tracking-tight">
          Build your Vocabulary, Improve your Pronounciations
        </p>
      </div>
    </div>
  );
};

export default Domant;
