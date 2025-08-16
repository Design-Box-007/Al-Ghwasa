import InduvialHero from "./Hero";
import Features from "./Features";
import InduvialTable from "./InduvialTable";
import Steps from "./Steps";
import Explore from "./Explore";

export default function InduvialProduct() {
  return(
    <div>
      <InduvialHero/>
       <Features/>
       <InduvialTable/>
       <Steps/> 
       <Explore/>
    </div>
  )
}