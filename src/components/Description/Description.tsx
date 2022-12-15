import { DescriptionProps } from '../../types/types';

export const Description = ({ cards }: DescriptionProps) => {
  return (
    <section className="flex w-4/5 self-center py-20 justify-between">
      <div className="flex flex-col gap-9 w-2/4 before:block before:w-16 before:h-2 before:bg-red-700">
        <h3 className="text-4xl">Watch our Games</h3>
        <span className="block w-96">
          Play our games and you will see result. Fun to play, easy to learn. Get enjoyment from
          learning. Time will faster with our games.
        </span>
        <a href="">Learn more</a>
        <span></span>
      </div>
      <div className="flex flex-wrap gap-4 w-2/4">
        {cards}
      </div>
    </section>
  );
};
