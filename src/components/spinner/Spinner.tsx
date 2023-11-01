import "./spinner.css";

const Spinner = () => {
  return (
    <div className="flex flex-col gap-14 justify-center items-center">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span className="text-xl">Fetching Data...</span>
    </div>
  );
};

export default Spinner;
