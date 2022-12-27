import { NavLink } from 'react-router-dom';

export const SignedInUserButtons = () => {
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
