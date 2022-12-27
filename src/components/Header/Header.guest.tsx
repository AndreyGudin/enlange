import { NavLink } from "react-router-dom"

export const AuthButtons = () => {
  return (
    <div className="flex flex-row gap-5 items-center">
    <NavLink to="/signin">
      <button className="text-white">Вход</button>
    </NavLink>
    <NavLink to="/signup">
      <button className="text-white w-[137px] h-[52px] bg-purple-600 rounded hover:bg-purple-500 duration-300">
        Присоединится
      </button>
    </NavLink>
  </div>
  )
}