import { useWarning } from "../context/WarningContext.tsx";

const Warning = () => {
  const { setDisplayWarning, setUserResponse } = useWarning();

  return (
    <div className="warning-custom-clr fixed top-0 left-0 w-full h-full flex justify-center items-center z-30">
      <div className="warning-bg-custom-clr border-4 border-blue-900 w-96 h-96 flex flex-col items-center justify-center gap-12 rounded">
        <h3 className="text-2xl border-2 bg-banner-clr border-black p-2 py-10  rounded font-bold">
          Do you want to remove item?
        </h3>
        <div className="flex justify-around w-full">
          <button
            className="bg-rose-500 border-2 border-red-950 rounded p-2 px-6 text-white"
            onClick={() => {
              setUserResponse(true);
              setDisplayWarning(false);
            }}
          >
            Yes
          </button>
          <button
            className="bg-gray-200 border-2 border-gray-700 rounded p-2 px-6"
            onClick={() => {
              setUserResponse(false);
              setDisplayWarning(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
