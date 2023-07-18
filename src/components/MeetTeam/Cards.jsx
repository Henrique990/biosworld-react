import rosto from "../../../public/rosto-menina.png";
import fox from "../../../public/fox.png";
import animals from "../../../public/animals.png";

export default function Cards() {
  return (
    <div className="flex flex-col 2xl:flex-row justify-between w-4/5 sm:w-2/3 2xl:w-full max-w-[1520px] items-center z-10 lg:mx-[7rem] xl:mx-14 gap-6">
      <div className="bg-[#203d41] flex flex-col justify-start sm:gap-6 items-stretch pt-8 sm:pb-16 px-8 2xl:h-[50rem] 2xl:w-[100rem]">
        <img
          alt="face"
          src={rosto}
          className="min-h-0 min-w-0 self-center mb-3"
        />
        <div className="text-3xl font-['Cattino'] leading-[42px] capitalize text-white justify-start ml-1 mr-4">
          flora - Founder
          <br />
          <div className="text-sm leading-[21px] capitalize text-white contents">
            Tech-savvy treehugger
          </div>
        </div>
        <div className="md:text-xl md:leading-[44px] text-[#e9e9e9] self-stretch ml-3 h-[48.38%]">
          Our meme-tastic founder, is a true connoisseur of code who swapped the
          concrete jungle for the heart of the rainforest. Known for her genius
          in tech, she's as comfortable crafting complex algorithms as she is
          identifying the calls of rare birds.
        </div>
      </div>
      <div className="bg-[#203d41] flex flex-col justify-start gap-2 sm:gap-6 items-stretch pt-8 md:pb-16 px-8 2xl:h-[50rem] 2xl:w-[100rem]">
        <img 
          alt="fox"
          src={fox}
          className="min-h-0 min-w-0 self-center mb-3"
        />
        <div className="text-xl sm:text-3xl font-['Cattino'] sm:leading-[42px]  capitalize text-white justify-start ml-1 mr-4">
          fauna - co-founder
          <br />bro can you add this in the pageVery good
          <div className="text-sm leading-[21px] capitalize text-white contents">
            doctor-techie championing biodiversity
          </div>
        </div>
        <div className="sm:text-xl sm:leading-[44px] text-[#e9e9e9] h-[48.38%] mx-1">
          Fauna is more than just a meme – she's a revolution. Armed with a
          stethoscope in one hand and a keyboard in the other, she's a genius
          doctor and tech enthusiast who's breaking boundaries as the co-founder
          of Bios World.
        </div>
      </div>
      <div className="bg-[#203d41] flex flex-col justify-start gap-2 sm:gap-6 items-stretch pt-8 sm:pb-16 px-8 2xl:h-[50rem] 2xl:w-[100rem]">
        <img
          alt="animals"
          src={animals}
          className="min-h-0 min-w-0 self-center mb-6"
        />
        <div className="text-3xl font-['Cattino'] leading-[42px] capitalize text-white justify-start ml-1 mr-4">
          bios code army
          <br />
          <div className="text-sm leading-[21px] capitalize text-white contents">
            tech warriors of the wild
          </div>
        </div>
        <div className="sm:text-xl sm:leading-[44px] text-[#e9e9e9] h-[48.38%] mx-1">
          The meme-tastic tech team that's traded office desks for forest dens.
          Living in harmony with nature, they're the coding champions behind
          Bios World, turning the whispers of the wilderness into digital
          dialects.
        </div>
      </div>
    </div>
  );
}
