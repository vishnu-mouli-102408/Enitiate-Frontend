import Link from "next/link";

const NoUser = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-2xl font-bold mb-8">
        User Not Found. Please Login to Continue
      </h1>
      <button
        type="button"
        className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        <Link href="/login">Login here</Link>
      </button>
    </div>
  );
};

export default NoUser;
