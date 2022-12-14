import { DescriptionProps } from '../../types/types';

export const Description = ({ cards }: DescriptionProps) => {
  return (
    <section className="">
      <div>
        <h3>Watch our Games</h3>
        <span>
          Play our games and you will see result. Fun to play, easy to learn. Get enjoyment from
          learning. Time will faster with our games.
        </span>
        <a href="">Learn more</a>
        <span></span>
      </div>
      <div>
        {cards}
      </div>
    </section>
  );
};
