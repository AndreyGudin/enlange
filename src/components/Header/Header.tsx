import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="flex flex-row w-full justify-around align-middle p-3">
      <div>
        <h1 className="text-3xl">Enlange</h1>
      </div>
      <nav className="flex flex-row gap-5 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'underline text-white hover:underline hover:text-white'
              : 'text-white hover:underline hover:text-white'
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/textbook"
          className={({ isActive }) =>
            isActive
              ? 'underline text-white hover:underline hover:text-white'
              : 'text-white hover:underline hover:text-white'
          }
        >
          Учебник
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'underline text-white hover:underline hover:text-white'
              : 'text-white hover:underline hover:text-white'
          }
        >
          Автор
        </NavLink>
      </nav>
      <div className="flex flex-row gap-5 items-center">
        <button>Вход</button>
        <button className="w-[137px] h-[52px] bg-purple-600 rounded hover:bg-purple-500 duration-300">
          Присоединится
        </button>
      </div>
    </header>
  );
};
