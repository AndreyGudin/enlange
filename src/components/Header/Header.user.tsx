

export const SignedInUserButtons = () => { 
  return (
    <div className="flex gap-3">
      <button className="text-white w-[137px] h-[52px] bg-purple-600 rounded hover:bg-purple-500 duration-300">
        Пользователь
      </button>
      <button className="hover:underline">
        Выйти
      </button>
    </div>
  ) 
}