import { useForm } from 'react-hook-form';

import { SignInResponse, User, UserData } from '../../types/types';
import { AuthProps } from '../../types/props';
import img from '../../assets/56431.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Alert } from '../../components/Alert/Alert';
import { createUser, saveUserToStorage, signIn } from '../../services/api';

export const SignUp = ({setUser}:AuthProps) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<UserData>({ mode: 'onChange' });
  const [registrationError, setError] = useState('');
  const navigate = useNavigate();
  
  const formData = async (data: UserData) => {
    const user: User = {
      name: data.name,
      password: data.password,
      email: data.email
    };
    const response = await createUser(user);
    if (response === 417) {
      setError('User with this email already exist');
    }
    if (response === 422) {
      setError('Incorrect email or password');
    }
    if (typeof response === 'object') {
      setError('');
      const responseSignIn = await signIn(user) as SignInResponse;
      console.log('responseSignIn', responseSignIn);
      setUser(responseSignIn);

      navigate("/");
      
    }
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
                  {...register('name', { required: true, minLength: 2 })}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                />
                {errors.name?.type === 'required' ? <Alert text="Name is required" /> : null}
                {errors.name?.type === 'minLength' ? <Alert text="Name is too short" /> : null}
              </div>
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
                  {...register('password', { required: true, minLength: 8 })}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
                {errors.password?.type === 'required' && <Alert text="Password is required" />}
                {errors.password?.type === 'minLength' && <Alert text="Password is too short" />}
              </div>
              <div className="mb-6 w-full">
                <input
                  {...register('confirmPassword', {
                    required: true,
                    minLength: 8,
                    validate: (value?: string) => {
                      if (watch('password') != value) return 'Your passwords do not match';
                    },
                  })}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword?.type === 'required' && (
                  <Alert text="Password is required" />
                )}
                {errors.confirmPassword?.type === 'minLength' && (
                  <Alert text="Password is too short" />
                )}
                {errors.confirmPassword && (
                  <Alert text={errors.confirmPassword.message as string} />
                )}
              </div>
              <div className="flex justify-between items-center w-full mb-6">
                <NavLink
                  to="/signin"
                  className="text-black hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Уже зарегистрированы?
                </NavLink>
              </div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-indigo-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full disabled:bg-slate-500 disabled:hover:shadow-md disabled:cursor-not-allowed"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                disabled={!isValid}
              >
                Регистрация
              </button>
              {registrationError ? <Alert text={registrationError} /> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
