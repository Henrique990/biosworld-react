import Cards from "./Cards";

import savana from "../../../public/animals-savana.svg";

export default function MeetTeam() {
  return (
    <div className="w-full 2xl:h-[1580px] relative mt-20 font-inter">
      <img alt="savana" className=" absolute bottom-0 object-fill w-full" src={savana} />
      <div className="lg:text-5xl text-3xl text-center font-['Cattino'] leading-[78px] capitalize text-green-400 w-full py-[6.94rem]">
        Meet The Team
      </div>
      <div className="flex justify-center">
        <Cards />
      </div>
    </div>
  );
}
