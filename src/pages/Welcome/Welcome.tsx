import { AdvantagesCards } from "../../components/AdvantagesCards/AdvantagesCards"
import { Description } from "../../components/Description/Description"
import { Header } from "../../components/Header/Header"
import { Info } from "../../components/Info/Info"
import { UsingStats } from "../../components/UsingStats/UsingStats"
import { AdvantagesCardsType, UsingStatsType } from "../../types/types"
import img_2  from "../../assets/img-2.png";
import img_3  from "../../assets/img-3.png";
import img_4  from "../../assets/img-4.png";

export const Welcome = () =>{
  const stats:UsingStatsType[] = [
    {title: "Happy Customers", info:"15K"},
    {title: "Monthly Visitors", info:"150K"},
    {title: "Countries Worldwide", info:"15"},
    {title: "Top Partners", info:"100+"},
  ];
  const cards:AdvantagesCardsType[] = [
    {image: img_2, title:"Lifetime access", description:"The gradual accumulation of information about "},
    {image: img_3, title:"Funny games", description:"The gradual accumulation of information about "},
    {image: img_4, title:"Words", description:"The gradual accumulation of information about "}
  ];
  return (
    <>
      <Header />
      <Info />
      <UsingStats stats={stats}/>
      <Description cards={<AdvantagesCards cards= {cards}/>} />
    </>
  )
}