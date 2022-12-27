import { NavLink } from 'react-router-dom';
import { HeaderProps } from '../../types/props';
import { AuthButtons } from './Header.guest';
import { SignedInUserButtons } from './Header.user';

export const Header = ({userInfo}:HeaderProps) => {
  return (
    <header className="flex flex-row w-full justify-around align-middle p-3 sticky top-0">
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
      {userInfo ? <SignedInUserButtons /> : <AuthButtons />}
    </header>
  );
};
