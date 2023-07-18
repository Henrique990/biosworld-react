import monkey from "../../../public/nature-monkey.png";
import rabit from "../../../public/rabit.png";
import lacoste from "../../../public/lacost.png";
import tartaruga from "../../../public/tartaruga.png";
import lion from "../../../public/lion.png";

export default function HowToBuySection() {
  return (
    <section id="howtobuy" className="w-full pb-10 xl:h-[165.875rem] relative my-[0%]">
      <img className="absolute bottom-0 w-full h-full object-fill" src={monkey} alt="monkey" />
      <h2 className="text-center pt-36 text-2xl lg:text-5xl font-['Cattino'] mb-10 lg:leading-[72px] text-green-300">How to Buy</h2>
      <h3 className="text-center text-xl lg:text-3xl font-['Cattino'] pb-10 lg:leading-[72px] text-[#ffffff]">Meme-ify Your Wallet with Biosw in 4 Simple Steps</h3>
      <div className="flex justify-center">
        <div className="relative flex flex-col justify-center gap-10 max-w-[82.33rem] items-stretch mt-12">
          <img className="absolute top-2 md:-top-4 lg:top-8 right-1/4 w-20 md:w-28 2xl:top-0 2xl:w-40" src={rabit} alt="rabit" />
          <div className="text-2xl lg:text-5xl font-['Cattino'] lg:leading-[72px] text-green-600 self-start lg:w-1/2">
            1. Meme-ify Your Mobile:
          </div>
          <div className="bg-white/10 flex flex-col justify-start lg:mb-16 lg:h-[302px] shrink-0 items-stretch lg:pt-16 pb-12 px-2 lg:px-12">
            <div className="text-base lg:text-3xl leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-1 h-full">
              To join the BIOSW brigade, you're going to need a crypto wallet.
              Trust Wallet, MetaMask, or another of your choice will do the trick.
              Pop over to the App Store or Google Play to snag one, or if you're
              on desktop, grab the MetaMask Chrome extension.
            </div>
          </div>
          <div className="max-w-[82.33rem] relative">
          <img className="absolute top-6 md:-top-4 lg:top-8 right-1/4 w-20 md:w-28 2xl:top-0 2xl:w-40" src={tartaruga} alt="rabit" />
            <div className="text-2xl lg:text-5xl font-['Cattino'] mb-10 lg:leading-[72px] text-green-600 self-start lg:w-3/5">
              2. Feed Your Wallet with BNB:
            </div>
            <div className="bg-white/10 flex flex-col justify-center lg:mb-16 lg:h-[339px] shrink-0 items-stretch px-2 lg:px-12">
              <div className="text-base lg:text-3xl leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-1 lg:h-[66.96%]">
                Your wallet's got a serious hunger for some BNB, the magic key to
                unlock your BIOSW. You can grab some directly through MetaMask,
                transfer from another wallet, or buy on an exchange and withdraw it
                to your wallet. Remember to dance with the Binance Smart Chain
                BEP-20 network when you do.{" "}
              </div>
            </div>
          </div>
          <div className="max-w-[82.33rem] relative">
          <img className="absolute top-10 md:-top-4 lg:top-8 right-1/4 w-24 md:w-36 2xl:top-0 2xl:w-40" src={lacoste} alt="rabit" />
            <div className="text-2xl lg:text-5xl font-['Cattino'] lg:leading-[72px] text-green-600 mb-10 lg:mr-[426px]">
              3. Unleash the Power of Uniswap:
            </div>
            <div className="bg-white/10 flex flex-col justify-start lg:mb-16 lg:h-[357px] shrink-0 items-stretch px-2 lg:px-12 lg:py-16">
              <div className="text-base lg:text-3xl leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-3 lg:h-[78.19%]">
                It's time to connect to Uniswap, your portal to the BIOSW universe.
                We've made it super simple by embedding Uniswap right here on
                biosworld.io. If you're going solo on your browser, make sure you're
                on the official Uniswap site, select token, and paste in the
                official BIOSW token address.
              </div>
            </div>
          </div>
          <div className="max-w-[82.33rem] relative">
          <img className="absolute top-4 md:-top-4 lg:top-8 right-1/4 w-20 md:w-28 2xl:top-0 2xl:w-40" src={lion} alt="rabit" />
          <div className="text-2xl lg:text-5xl font-['Cattino'] lg:leading-[72px] text-green-600 mb-10 ml-0 lg:mr-[426px]">
            4. Make the Swap:
          </div>
          <div className="bg-white/10 flex flex-col justify-center lg:h-[357px] shrink-0 items-stretch mx-0 lg:px-12">
            <div className="text-base lg:text-3xl leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-2 lg:h-[68.91%] px-2">
              Now that you've got BNB in your wallet, you can swap it for some
              shiny BIOSW. Make sure you keep enough BNB for those gas fees, and
              then review and confirm your transaction. Congratulations! You're
              now a card-carrying member of the BIOSW brigade, making a real
              difference while having fun. Welcome to Bios World, where memes and
              nature unite!
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
