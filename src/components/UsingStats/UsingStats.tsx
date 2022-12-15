import { UsingStatsProps, UsingStatsType } from '../../types/types';

export const UsingStats = ({ stats }: UsingStatsProps) => {
  return (
    <section className="flex w-4/5 justify-between self-center py-20">
      {stats.map((elem: UsingStatsType, i) => {
        return (
          <div key={i} className="flex flex-col gap-4 items-center">
            <span className="text-6xl text-purple-600">{elem.info}</span>
            <span>{elem.title}</span>
          </div>
        );
      })}
    </section>
  );
};
