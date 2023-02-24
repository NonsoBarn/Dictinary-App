import { UilExclamationTriangle } from "@iconscout/react-unicons";
const ErrorPage = () => {
  return (
    <div className="cart-empty flex flex-row h-screen  justify-center items-center pb-80">
      <div className="text-center max-w-lg p-0">
        <UilExclamationTriangle
          size={40}
          className="inline-flex items-center  text-teal-500 pb-2"
        />

        <h3 className="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Something's Wrong..
        </h3>

        <p className="text-sm px-5 mb-3  text-gray-500 leading-5 tracking-tight ">
          Sorry, we couldn't find definitions for the word you were looking for.
          Please check your data connection, or you can try to search again at a
          later time or head to the web instead.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
