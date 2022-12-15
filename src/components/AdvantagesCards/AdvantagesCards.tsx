import { AdvantagesCardsProps } from "../../types/types"

export const AdvantagesCards = ({cards}:AdvantagesCardsProps) => {
  return (
    <>
      {cards.map((card, i) => {
        return (
          <div key={i} className="w-52 flex flex-col gap-4 bg-slate-100 items-start p-6 text-black box-border">
            <img className="w-16" src={card.image} alt="" />
            <h3 className="font-bold">{card.title}</h3>
            <div className="before:block before:w-16 before:h-1 before:bg-red-700"></div>
            <span>{card.description}</span>
          </div>
        )
      })}
    </>
  )
}