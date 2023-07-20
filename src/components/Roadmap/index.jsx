import guaxinin from "../../../public/guaxinin.png";
import galho from "../../../public/galho.png";
import bananeira from "../../../public/bananeira.png";
import espinho from "../../../public/porco-espinho.png";
import viado from "../../../public/viado.png";
import urso from "../../../public/urso.png";
import estrada from "../../../public/estrada.png";

export default function Roadmap() {
  return (
    <div id="roadmap" className="w-full h-screen xl:[121.87rem] relative px-2 pb-20">
      <img
        alt="raccoon"
        className="max-w-[50.12rem] w-[50%] md:w-[40%] absolute right-0 top-0 sm:top-[20%] lg:top-14"
        src={guaxinin}
      />
      <img
        className="absolute max-w-[18rem] w-[7rem] md:w-[30%] top-[2.9%] lg:top-40 left-[18%] lg:left-44 z-10"
        src={viado}
        alt="fag"
      />
      <img
        className="absolute max-w-[36rem] w-[60%] top-0 left-2"
        src={galho}
        alt="tree branches"
      />
      <img
        className="absolute max-w-[43rem] w-[60%] top-[8%] lg:top-80 left-1"
        src={bananeira}
        alt="banana tree"
      />
      <img
        className="absolute w-[3rem] left-[8.5rem] top-[1.5%] md:top-8 md:w-[6rem] md:left-[32%] lg:top-[8.81rem] lg:left-[22.3rem] z-10"
        src={espinho}
        alt="Hedgehog"
      />
      <img
        className="absolute w-[10rem] md:w-[20rem]  -bottom-[8%] md:-bottom-[15%] xl:left-28"
        src={urso}
        alt="bear"
      />
      <div className="flex justify-center">
        <img
          className="absolute bottom-[4rem] sm:bottom-1 md:-bottom-[4rem] xl:bottom-[35rem]"
          src={estrada}
          alt="road"
        />
      </div>

      <div className="text-center text-5xl font-['Cattino'] leading-[78px] capitalize text-green-400 w-full mt-[20rem] xl:mt-64 relative z-20">
        Roadmap
      </div>
      {/* <div className="relative z-20 flex justify-center md:mb-[14rem] mt-[20%] xl:mt-56">
        <div className="Group88 w-[70%] md:w-[60%] lg:w-[40%] xl:w-[1315px] xl:h-[1348px] relative space-y-6 md:space-y-10 ml-2">
          <div className="Group82 space-y-2 xl:w-[314px] xl:h-[346px] xl:left-0 xl:top-[311px] xl:absolute">
            <div className="Group81 xl:w-52 xl:h-[46px] xl:left-0 xl:top-0 xl:absolute">
              <div className="Rectangle70 flex justify-center items-center h-8 md:h-[48px] xl:w-52 xl:h-[46px] xl:left-0  xl:absolute bg-green-500 rounded-md sm:rounded-2xl xl:flex xl:justify-center xl:items-center">
                <div className="Discovery flex justify-center items-center xl:w-[108px] xl:h-[33px] xl:left-[50px] xl:top-[6px] xl:absolute text-gray-200 md:text-[28px] font-['Cattino']">
                  Discovery
                </div>
              </div>
            </div>
            <div className="xl:w-[313px] xl:h-[279px] xl:left-[1px] xl:top-[67px] xl:absolute text-gray-200 text-sm md:text-lg lg:text-[22px] font-normal ml-3 leading-4 md:leading-10">
              Pre-sale Website
              <br />
              Pre-sale Live
              <br />
              10,000 Telegram Community
              <br />
              Media/PR
              <br />
              Social Channel Live
            </div>
          </div>
          <div className="Group84 space-y-2 xl:w-[463px] xl:h-[382px] xl:left-[353px] xl:top-[966px] xl:absolute">
            <div className="Group83 xl:w-52 xl:h-[46px] xl:left-0 xl:top-0 xl:absolute">
              <div className="Rectangle69 flex justify-center items-center xl:w-52 h-8 md:h-[46px] xl:left-0 xl:top-0 xl:absolute bg-green-500 rounded-md sm:rounded-2xl">
                <div className="Protection flex justify-center items-center xl:w-[116px] xl:h-[33px] xl:left-[46px] xl:top-[5px] xl:absolute text-gray-200 md:text-[28px] font-['Cattino']">
                  Protection
                </div>
              </div>
            </div>
            <div className="space-y-2 xl:w-[463px] xl:left-0 xl:top-[74px] xl:absolute text-gray-200 text-sm md:text-lg lg:text-[22px] font-normal ml-3 leading-4 md:leading-10">
              1st donation to Biodiversity
              <br />
              30,000 telegram community
              <br />
              Ambassador Campaign
              <br />
              Full Website Live
              <br />
              1st Launch on DEX/Cex
              <br />
              Chain Bridge added
              <br />
              Airdrop 500M
            </div>
          </div>
          <div className="Group78 space-y-2 xl:w-[310px] xl:h-[416px] xl:left-[438px] xl:top-[8px] xl:absolute">
            <div className="Group77 xl:w-52 xl:h-[46px] xl:left-0 xl:top-0 xl:absolute">
              <div className="Rectangle71 flex justify-center items-center xl:w-52 h-8 md:h-[46px] xl:left-0 xl:top-0 xl:absolute bg-green-500 rounded-md sm:rounded-2xl">
                <div className="Restoration flex justify-center items-center xl:w-[126px] xl:h-[34px] xl:left-[41px] xl:top-[4px] xl:absolute text-gray-200 md:text-[28px] font-['Cattino']">
                  Restoration
                </div>
              </div>
            </div>
            <div className="xl:w-[310px] xl:h-[352px] xl:left-0 xl:top-[64px] xl:absolute text-gray-200 text-sm md:text-lg lg:text-[22px] font-normal ml-3 leading-4 md:leading-10">
              NFT Release <br />
              CrowdFunding Website Live <br />
              2nd Donation to Biodiversity <br />
              60,000 Holders <br />
              60,000 community <br />
              Partnership <br />
              2nd Launch on DEX/CEX <br />
              Airdrop 500M{" "}
            </div>
          </div>
          <div className="Group86 space-y-2 xl:w-[478px] xl:h-[368px] xl:left-[816px] xl:top-[729px] xl:absolute">
            <div className="Group85 xl:w-[222px] xl:h-[46px] xl:left-0 xl:top-0 xl:absolute">
              <div className="Rectangle71 flex justify-center items-center h-8 md:h-[48px] xl:w-[222px] xl:h-[46px] xl:left-0 xl:top-0 xl:absolute bg-green-500 rounded-md sm:rounded-2xl">
                <div className="Sustainability flex justify-center items-center xl:w-[153px] xl:h-[33px] xl:left-[34px] xl:absolute text-gray-200 md:text-[28px] font-['Cattino']">
                  Sustainability
                </div>
              </div>
            </div>
            <div className="xl:w-[477px] xl:left-[1px] xl:top-[60px] xl:absolute text-gray-200 text-sm md:text-lg lg:text-[22px] font-normal ml-3 leading-4 md:leading-10">
              NFT MarketPlace <br />
              Climate Change Initiative Launch (Flora & Fauna) 50,000 volunteers{" "}
              <br />
              200,000 Holders <br />
              Partnership <br />
              BIOSwap Live <br />
              Staking Live{" "}
            </div>
          </div>
          <div className="Group80 space-y-2 xl:w-80 xl:h-[424px] xl:left-[995px] xl:top-0 xl:absolute">
            <div className="Group79 xl:w-52 xl:h-[46px] xl:left-[1px] xl:top-0 xl:absolute">
              <div className="Rectangle70 flex justify-center py-2 xl:w-52 xl:h-[46px] lx:left-0 lx:top-0 xl:absolute bg-green-500 rounded-md sm:rounded-2xl">
                <div className="Education xl:w-[108px] xl:h-[34px] lx:left-[50px] lx:top-[4px] xl:absolute text-gray-200 md:text-[28px] font-['Cattino']">
                  Education
                </div>
              </div>
            </div>

            <div className="xl:w-80 h-[366px] xl:left-0 xl:top-[58px] xl:absolute text-gray-200 text-sm md:text-lg lg:text-[22px] font-normal ml-3 leading-4 md:leading-10">
              Academy with AI tools
              <br />
              BIOS Gaming (P2E with cause)
              <br />
              ZOO on Metaverse Live
              <br />
              5% token to Charities
              <br />
              500,000 holders
              <br />
              100,000 Volunteers
              <br />
              1B Market Cap
              <br />
              BIOS Protocol ( Continued......
            </div>
          </div>
        </div>
      </div> */}

      <div className="container relative w-full h-3/5">
        <div className="absolute bottom-0">
          <div className="bg-green-500 w-28">
              <h3 className="p-2 text-center font-['Cattino']">Discovery</h3>
          </div>
          <div className="text-xs">
            <p>Pre-sale Website</p>
            <p>Pre-sale Live</p>
            <p>10,000 Telegram Community</p>
            <p>Media/PR</p>
            <p>Social Channel Live</p>
          </div>
        </div>
        </div>
      </div>
  );
}
