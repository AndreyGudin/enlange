import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { User } from '../../types/types';
import { AuthProps } from '../../types/props';
import img from '../../assets/5293.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { Alert } from '../../components/Alert/Alert';
import { saveUserToStorage, signIn } from '../../services/api';

export const SignIn = ({setUser}:AuthProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<User>({ mode: 'all' });
  const [registrationError, setError] = useState('');
  const navigate = useNavigate();
  
  const formData = async (user: User) => {
    const response = await signIn(user);
    if (typeof response === 'object') {
      setError('');
      setUser(response);
      console.log(response);
      navigate("/");
    }
    if (response === 404) setError("User with this email doesn't exist");
  };

  return (
    <section className="h-screen">
      <div className="flex px-6 py-12 h-full justify-center items-center">
        <div className="flex w-8/12 justify-center items-center flex-wrap g-6 text-gray-800 bg-indigo-500 h-auto py-4 rounded-2xl">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img src={img} className="w-full" alt="Phone image" />
          </div>
          <div className="md:w-8/12 lg:w-5/12">
            <form className="flex flex-col items-center w-full" onSubmit={handleSubmit(formData)}>
              <div className="mb-6 w-full">
                <input
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Incorrect email',
                    },
                  })}
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
                {errors.email?.type === 'required' ? <Alert text="Email is required" /> : null}
                {errors.email && <Alert text={errors.email.message as string} />}
              </div>
              <div className="mb-6 w-full">
                <input
                  {...register('password', { required: true, minLength: 6 })}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
                {errors.password?.type === 'required' && <Alert text="Password is required" />}
                {errors.password?.type === 'minLength' && <Alert text="Password is too short" />}
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
                <NavLink
                  className="text-black hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  to="/signup"
                >
                  Ещё не зарегистрированы?
                </NavLink>
              </div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-indigo-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full disabled:bg-slate-500 disabled:hover:shadow-md disabled:cursor-not-allowed"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                disabled={!isValid}
              >
                Вход
              </button>
              {registrationError ? <Alert text={registrationError} /> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
