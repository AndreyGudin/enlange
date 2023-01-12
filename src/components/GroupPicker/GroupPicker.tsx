import React, { useState } from 'react';
import { GroupPickerProps } from '../../types/props';

export const GroupPicker = ({
  setCurrentGroup,
  styleForContainer,
  styleForGroupElements,
}: GroupPickerProps) => {
  const [active, setActive] = useState(1);
  const length = 6;
  const groups = Array.from({ length }, (_, idx) => idx + 1);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedGroup = +(e.target as HTMLDivElement).textContent!;
    if (clickedGroup) {
      setActive(clickedGroup);
      setCurrentGroup(clickedGroup);
    }
  };
  const clicked = 'outline outline-4 outline-purple-500';
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-3xl text-center">Выберите сложность</h3>
      <div className={`${styleForContainer}`}>
        {groups.map((group, i) => {
          return (
            <div
              onClick={handleClick}
              key={i}
              className={`${active === i + 1 ? clicked : ''} ${styleForGroupElements}`}
            >
              {group}
            </div>
          );
        })}
      </div>
    </div>
  );
};
