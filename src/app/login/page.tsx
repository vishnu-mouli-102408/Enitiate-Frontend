import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-black flex justify-center items-center h-screen">
      {/* <!-- Left: Image --> */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      {/* <!-- Right: Login Form --> */}
      <div className="lg:p-36 md:p-52 sm:20 p-12 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-12 text-center">
          Login to you account
        </h1>
        <form action="#" method="POST">
          {/* <!-- Username Input --> */}
          <div className="mb-6 flex items-center">
            {/* <svg */}
            {/* //   className="w-5 h-5"
            //   fill="none"
            //   stroke="currentColor"
            //   viewBox="0 0 24 24"
            //   xmlns="../../../public/Icons/mingcute_mail-fill.svg"
            // ></svg> */}
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              className="w-full border h-[3.2rem] border-gray-900 bg-black text-white rounded-lg py-2 px-3 focus:outline-none focus:border-gray-400"
              autoComplete="off"
            />
          </div>
          {/* <!-- Password Input --> */}
          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border h-[3.2rem] border-gray-900 bg-black text-white rounded-lg py-2 px-3 focus:outline-none focus:border-gray-400"
              autoComplete="off"
            />
          </div>
          {/* <!-- Remember Me Checkbox --> */}
          <div className="mb-8 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
              required
            />
            <label htmlFor="remember" className="text-white ml-2">
              I agree to the Terms & Conditions
            </label>
          </div>
          {/* <!-- Login Button --> */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        {/* <!-- Sign up  Link --> */}
        <div className="mt-6 text-blue-500 text-center">
          <a href="#" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
