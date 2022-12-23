import { useForm } from 'react-hook-form';

import { User } from '../../types/types';
import img from "../../assets/5293.svg";
export const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<User>({ mode: 'all' });
  return (
    <section className="h-screen">
      <div className="flex px-6 py-12 h-full justify-center items-center">
        <div className="flex w-8/12 justify-center items-center flex-wrap g-6 text-gray-800 bg-indigo-500 h-auto py-4 rounded-2xl">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src={img}
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12">
            <form className="flex flex-col items-center w-full">
              <div className="mb-6 w-full">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-6 w-full">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div className="flex justify-between items-center w-full mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    defaultChecked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Запомнить меня
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-black hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Забыли пароль?
                </a>
              </div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-indigo-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Вход
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
