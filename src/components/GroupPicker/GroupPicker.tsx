import React, { useState } from "react";

export const GroupPicker = () => {
  const [active, setActive] = useState(1);
  const length = 6;
  const groups = Array.from({ length }, (_, idx) => idx + 1);

  const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
    const clickedGroup = +(e.target as HTMLDivElement).textContent!;
    if (clickedGroup) setActive(clickedGroup);
  }
    const clicked = "outline outline-4 outline-purple-500";
  return (
    <div className="flex flex-col gap-3 fixed top-1/2 left-[96.6%]">
      {groups.map((group, i) => {
        return (
          <div
          onClick={handleClick}
            key={i}
            className={`${active === (i + 1) ? clicked : ""} rounded-full bg-white w-8 h-8 hover:cursor-pointer text-black text-lg flex justify-center items-center`}
          >
            {group}
          </div>
        );
      })}
    </div>
  );
};
