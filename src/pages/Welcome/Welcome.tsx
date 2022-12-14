import { Header } from "../../components/Header/Header"
import { Info } from "../../components/Info/Info"
import { UsingStats } from "../../components/UsingStats/UsingStats"
import { UsingStatsType } from "../../types/types"

export const Welcome = () =>{
  const stats:UsingStatsType[] = [
    {title: "Happy Customers", info:"15K"},
    {title: "Monthly Visitors", info:"150K"},
    {title: "Countries Worldwide", info:"15"},
    {title: "Top Partners", info:"100+"},
  ]
  return (
    <>
      <Header />
      <Info />
      <UsingStats stats={stats}/>
    </>
  )
}