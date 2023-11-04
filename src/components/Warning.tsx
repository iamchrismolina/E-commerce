import { useWarning } from "../context/WarningContext.tsx";

const Warning = () => {
  const { setDisplayWarning, setUserResponse } = useWarning();

  return (
    <div className="warning-custom fixed top-0 left-0 w-full h-full flex justify-center items-center z-30">
      <div className="border-4 bg-slate-400 border-blue-600 w-96 h-96 flex flex-col items-center justify-center gap-12 rounded">
        <h3 className="text-2xl p-2 py-10 bg-banner-clr rounded font-bold">
          Do you want to remove item?
        </h3>
        <div className="flex justify-around w-full">
          <button
            className="bg-green-200 rounded p-2 px-6"
            onClick={() => {
              setUserResponse(true);
              setDisplayWarning(false);
            }}
          >
            Yes
          </button>
          <button
            className="bg-sky-200 rounded p-2 px-6"
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
