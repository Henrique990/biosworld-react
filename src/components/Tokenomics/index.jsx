import preguiça from "../../../public/preguiça.png";
import esquilo from "../../../public/img/tokenomics/Group 46.png";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="w-full h-[900px] lg:h-[1550px] relative">
      <div className="text-5xl font-['Cattino'] leading-[78px] capitalize text-[#40a072]  w-full flex justify-center mt-52">
        Tokenomics
      </div>
      <div className="z-20 text-2xl lg:text-5xl font-bold leading-[72px] text-white flex justify-center  w-full mt-44">
        100,000,000,000
        <div className="text-2xl lg:text-5xl font-bold leading-[72px] text-[#deede4] contents">
          {" "}
        </div>
        <div className="text-2xl lg:text-5xl font-['Cattino'] leading-[72px] text-[#206c46] contents">
          Total Supply
        </div>
      </div>
      <img
        className="absolute top-0 left-0 w-[70%] md:w-[50%] "
        src={preguiça}
        alt="shoth"
      />
      <div className="flex justify-center">
        <div className="absolute top-[10%] flex flex-col justify-center items-center max-w-[1920px] w-full h-full">
          <div className="relative w-4/5 xl:w-3/5 flex justify-center items-center text-[8px] md:text-sm lg:text-lg xl:text-2xl">
            <img
              className="absolute max-w-[915px] w-full"
              src={esquilo}
              alt="squirrel"
            />
            <p className="absolute bottom-16 right-2 md:bottom-32 lg:bottom-40 2xl:right-24">
              20% for Exchanges
            </p>
            <p className="absolute bottom-2 -right-2 xl:-right-10 2xl:right-10 desktop2:bg-red">
              5% Marketing and <br /> Development Wallet
            </p>
            <p className="absolute top-7 -right-8 md:-right-14 md:top-12 lg:top-16 xl:-right-24 2xl:right-0">
              5% held for Charity Initiatives
            </p>
            <p className="absolute top-2 -left-6 xl:-left-20 2xl:left-0">
              70% of tokens will be sold <br /> thru public pre sales
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute w-full max-w-[1920px] bottom-0 flex flex-row justify-around text-xs lg:text-2xl xl:text-3xl">
          <div className=" leading-5 lg:leading-8 xl:leading-10">
            <p>8% Tax NFT's</p>
            <p>3 % distributed to seller</p>
            <p>4% distributed to holders</p>
            <p>1% to charity</p>
          </div>
          <div className=" leading-5 lg:leading-8 xl:leading-10">
            <p>No Tax</p>
            <p>No Fees</p>
            <p>Liquidity Locked for 2 years</p>
            <p>Contract Renounced</p>
            <p>1B Airdrop</p>
          </div>
        </div>
      </div>
    </section>
  );
}
