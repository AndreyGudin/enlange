import { UserProps } from "../../types/props";
import user_img from "../../assets/71347.svg";

export const User = ({userInfo}:UserProps) => {
  return (
    <div className="flex flex-col gap-4 items-center h-full">
      <img className="w-64 h-auto" src={user_img} alt="user" />
      <div className="flex gap-4">
        <span className="text-2xl font-bold">User:</span>
        <span className="text-xl">{userInfo?.name}</span>
      </div>
    </div>
  )
};
