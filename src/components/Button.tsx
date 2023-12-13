"use client";
type btnClick = () => void;
type buttonTypes = {
  buttonText: string;
  handleOnClick: btnClick;
};

const Button = ({ buttonText, handleOnClick }: buttonTypes) => {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      {buttonText}
    </button>
  );
};

export default Button;
