import { NavLink } from 'react-router-dom';
import { SignInResponse } from '../../types/types';

export const SignedInUserButtons = () => {

  const handleSignOut = () => {
    const user = JSON.parse(localStorage.getItem("user") as string) as SignInResponse;
    if (user) localStorage.removeItem("user");
    
  }

  return (
    <div className="flex gap-3">
      <NavLink to="/user">
        <button className="text-white w-[137px] h-[52px] bg-purple-600 rounded hover:bg-purple-500 duration-300">
          Пользователь
        </button>
      </NavLink>
      <button className="hover:underline">Выйти</button>
    </div>
  );
};
