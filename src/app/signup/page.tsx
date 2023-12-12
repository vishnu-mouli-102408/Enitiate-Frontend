import Link from "next/link";
import ImageFile from "../../../public/svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, SignupSchemaTypes } from "@/lib/zodSchemas";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupSchemaTypes>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = async (data: SignupSchemaTypes) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredentials.user;
      console.log(user);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-center mt-16 lg:justify-start lg:px-16">
        <svg
          width="60"
          className="mr-1"
          height="56"
          viewBox="0 0 60 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1386 18.6541C25.2228 19.2863 28.7928 20.9411 31.8486 23.6185C32.7034 24.3681 33.2628 25.0176 33.5269 25.5668C34.5035 27.6007 33.4929 30.0741 31.3474 30.8754C29.6384 31.5119 28.1622 30.9707 26.8445 29.7219C22.0521 25.1823 14.4351 25.276 9.64928 29.7397C9.14913 30.2071 8.75678 30.5156 8.47221 30.6653C4.35087 32.8382 0.567446 27.6928 4.00648 24.2518C7.96021 20.2949 11.9177 16.3418 15.879 12.3925C17.415 10.8599 19.3617 9.57987 21.719 8.55242C29.6351 5.10333 38.5569 6.86584 44.6427 12.9482C48.1664 16.471 51.6889 19.9961 55.2104 23.5232C56.8257 25.1387 57.7958 26.394 57.0326 28.5927C56.2468 30.8608 53.4691 31.801 51.4092 30.6427C51.0514 30.4413 50.5038 29.9712 49.7665 29.2324C46.3485 25.8032 42.9213 22.3827 39.485 18.9708C38.4922 17.9853 37.6827 17.2788 37.0565 16.8512C34.4911 15.1022 31.639 14.3984 28.5001 14.7398C25.6383 15.051 23.1543 16.2648 21.0481 18.3811C20.8993 18.5308 20.9295 18.6218 21.1386 18.6541Z"
            fill="url(#paint0_linear_1_134)"
          />
          <path
            d="M22.9382 37.6879C27.4039 40.6378 33.0613 40.494 37.4154 37.3826C38.1511 36.8576 39.0808 35.7542 40.0735 35.3309C42.4584 34.3148 45.1019 35.7267 45.5385 38.339C45.8198 40.032 44.9758 41.2356 43.6888 42.4019C35.8261 49.5279 23.7029 49.3906 16.0213 42.2065C15.3174 41.5473 14.8507 40.9448 14.6211 40.3987C13.2856 37.2324 16.487 34.0741 19.6932 35.2679C20.8977 35.717 21.8209 36.9496 22.9382 37.6879Z"
            fill="url(#paint1_linear_1_134)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_134"
              x1="53.1249"
              y1="8.23934"
              x2="24.6054"
              y2="44.6311"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6CE1ED" />
              <stop offset="1" stop-color="#0665F2" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_134"
              x1="43.2034"
              y1="35.7444"
              x2="28.7801"
              y2="56.0179"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6CE1ED" />
              <stop offset="1" stop-color="#0665F2" />
            </linearGradient>
          </defs>
        </svg>
        <h1 className="text-[#ECECEC] text-2xl ml-1 font-medium">Logo</h1>
      </div>
      <div className="bg-black flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div className="w-1/2 hidden lg:block">
          <ImageFile />
        </div>
        {/* <!-- Right: Login Form --> */}
        <div className="lg:p-36 md:p-52 sm:20 p-12 w-full lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-12 text-center">
            Create an account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <!-- Username Input --> */}
            <div className="mb-6 relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_40)">
                    <path
                      d="M1.8095 4.1115L9.57513 10.7685C9.80486 10.9655 10.1117 11.0825 10.4363 11.0968C10.7609 11.1111 11.0801 11.0216 11.3321 10.8458L11.4319 10.7685L19.1923 4.116C19.2176 4.1985 19.2343 4.2825 19.243 4.36875L19.25 4.5V13.5C19.2501 13.8784 19.0834 14.2429 18.7832 14.5204C18.483 14.7979 18.0715 14.9679 17.6313 14.9963L17.5 15H3.5C3.0585 15.0001 2.63325 14.8572 2.30952 14.5999C1.98579 14.3426 1.78749 13.9899 1.75438 13.6125L1.75 13.5V4.5C1.75 4.41 1.75875 4.323 1.77625 4.2375L1.8095 4.1115ZM17.5 3C17.6059 3 17.71 3.0075 17.8106 3.02325L17.9594 3.0525L10.5044 9.4425L3.04675 3.051C3.143 3.0285 3.24275 3.0135 3.34425 3.006L3.5 3H17.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_40">
                      <rect width="21" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                className="w-full border ps-10 h-[3.2rem] border-gray-900 bg-black text-white rounded-lg py-2 px-3 focus:outline-none focus:border-gray-400"
                autoComplete="off"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* <!-- Password Input --> */}
            <div className="mb-6 relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:password">
                    <path
                      id="Vector"
                      d="M1.41665 13.4583V12.0417H15.5833V13.4583H1.41665ZM2.23123 9.17292L1.3104 8.64167L1.91248 7.57917H0.708313V6.51667H1.91248L1.3104 5.48958L2.23123 4.95833L2.83331 5.98542L3.4354 4.95833L4.35623 5.48958L3.75415 6.51667H4.95831V7.57917H3.75415L4.35623 8.64167L3.4354 9.17292L2.83331 8.11042L2.23123 9.17292ZM7.8979 9.17292L6.97706 8.64167L7.57915 7.57917H6.37498V6.51667H7.57915L6.97706 5.48958L7.8979 4.95833L8.49998 5.98542L9.10206 4.95833L10.0229 5.48958L9.42081 6.51667H10.625V7.57917H9.42081L10.0229 8.64167L9.10206 9.17292L8.49998 8.11042L7.8979 9.17292ZM13.5646 9.17292L12.6437 8.64167L13.2458 7.57917H12.0416V6.51667H13.2458L12.6437 5.48958L13.5646 4.95833L14.1666 5.98542L14.7687 4.95833L15.6896 5.48958L15.0875 6.51667H16.2916V7.57917H15.0875L15.6896 8.64167L14.7687 9.17292L14.1666 8.11042L13.5646 9.17292Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <input
                {...register("password")}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border ps-10 h-[3.2rem] border-gray-900 bg-black text-white rounded-lg py-2 px-3 focus:outline-none focus:border-gray-400"
                autoComplete="off"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            {/* confirm password */}
            <div className="mb-6 relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:password">
                    <path
                      id="Vector"
                      d="M1.41665 13.4583V12.0417H15.5833V13.4583H1.41665ZM2.23123 9.17292L1.3104 8.64167L1.91248 7.57917H0.708313V6.51667H1.91248L1.3104 5.48958L2.23123 4.95833L2.83331 5.98542L3.4354 4.95833L4.35623 5.48958L3.75415 6.51667H4.95831V7.57917H3.75415L4.35623 8.64167L3.4354 9.17292L2.83331 8.11042L2.23123 9.17292ZM7.8979 9.17292L6.97706 8.64167L7.57915 7.57917H6.37498V6.51667H7.57915L6.97706 5.48958L7.8979 4.95833L8.49998 5.98542L9.10206 4.95833L10.0229 5.48958L9.42081 6.51667H10.625V7.57917H9.42081L10.0229 8.64167L9.10206 9.17292L8.49998 8.11042L7.8979 9.17292ZM13.5646 9.17292L12.6437 8.64167L13.2458 7.57917H12.0416V6.51667H13.2458L12.6437 5.48958L13.5646 4.95833L14.1666 5.98542L14.7687 4.95833L15.6896 5.48958L15.0875 6.51667H16.2916V7.57917H15.0875L15.6896 8.64167L14.7687 9.17292L14.1666 8.11042L13.5646 9.17292Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <input
                {...register("confirmPassword")}
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Re-enter your password"
                className="w-full border ps-10 h-[3.2rem] border-gray-900 bg-black text-white rounded-lg py-2 px-3 focus:outline-none focus:border-gray-400"
                autoComplete="off"
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
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
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Create my account
            </button>
          </form>
          {/* <!-- Sign up  Link --> */}
          <div className="mt-6 text-blue-500 text-center">
            <Link href="/login" className="hover:underline">
              Login in Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
