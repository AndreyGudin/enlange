export const Header = () => {
  return (
    <header className="flex flex-row w-full justify-around align-middle p-3 fixed top-0">
      <div>
        <h1 className="text-3xl">Enlange</h1>
      </div>
      <nav className="flex flex-row gap-5 items-center">
        <span className="hover:underline cursor-pointer">Главная</span>
        <span className="hover:underline cursor-pointer">Учебник</span>
        <span className="hover:underline cursor-pointer">Автор</span>
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
