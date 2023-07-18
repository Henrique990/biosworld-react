import { Button } from "@material-tailwind/react";

import twitter from "../../../public/twitter.png";
import telegran from "../../../public/telegram.png";
import facebook from "../../../public/facebook.png";
import youtube from "../../../public/youtube.png";
import medium from "../../../public/medium.png";

import eth from "../../../public/img/WalletConnection/eth.png";
import bnb from "../../../public/img/WalletConnection/bnb.png";
import usdt from "../../../public/img/WalletConnection/usdt.png";
import biosw from "../../../public/img/WalletConnection/BIOSW 1.png";
import suricato from "../../../public/11 1-min.png";
import bird from "../../../public/img/WalletConnection/bird-01 1.png";
import MyPage from "./MyCountdown";

export default function CardPayment() {
  return (
    <div className="relative z-20 w-4/5 h-4/5  md:w-2/5 2xl:w-1/4 2xl:h-3/5 lg:ml-[30%] xl:h-4/5  bg-gray-900 bg-opacity-90 shadow-md rounded-sm p-4 flex justify-center items-center">
      <div className="space-y-4 xl:space-y-8 lg:space-y-4 flex flex-col ">
        <div className="flex justify-center">
          <h2 className="text-3xl 2xl:text-5xl mb-10 font-['Cattino'] text-[#40A072]">Pre-sale Starts in...</h2>
        </div>
        <MyPage />
        <div className="group-two flex w-full h-5 rounded-md border border-gray-500 hover:border-green-300 bg-gray-700">
          <div className="bg-green-600 border-0 rounded-md text-sm px-4">
            <p>Until Next Price: $0.00008</p>
          </div>
        </div>
        <div className="group-tree flex justify-center text-xs">
          <p>BNB Raised: 0 BNB / 000 BNB</p>
        </div>
        <div className="group-four flex justify-center items-center">
          <div className="border border-gray-500 hover:border-green-300 h-0 w-1/4"></div>
          <div className="mx-4 text-[10px]">1 BIOSW = $0.00008</div>
          <div className="border border-gray-500 hover:border-green-300 h-0 w-1/4"></div>
        </div>
        <div className="group-five flex flex-row space-x-4 text-[6px] lg:text-[8px]">
          <div className="w-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2 lg:p-0">
            <img className="w-1/2 lg:w-[2rem] lg:p-1" src={eth} alt="eth"/>
            <div className="flex flex-col justify-center items-center w-1/2 leading-3">
              <p>ETH</p>
            </div>
          </div>
          <div className="w-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2 lg:p-0">
            <img className="w-1/2 lg:w-[2rem] lg:p-1" src={usdt} alt="usdt" />
            <div className="flex flex-col justify-center items-center w-1/2 leading-3">
              <p>USDT</p>
              <p>ERC20</p>
            </div>
          </div>
          <div className="w-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2 lg:p-0">
            <img className="w-1/2 lg:w-[2rem] lg:p-1" src={bnb} alt="bnb" />
            <div className="flex flex-col justify-center items-center w-1/2 leading-3">
              <p>BNB</p>
            </div>
          </div>
          <div className="w-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2 lg:p-0">
            <img className="w-1/2 lg:w-[2rem] lg:p-1" src={usdt} alt="usdt" />
            <div className="flex flex-col justify-center items-center w-1/2 leading-3">
              <p>USDT</p>
              <p>BEP20</p>
            </div>
          </div>
        </div>
        <div className="group-six flex flex-col justify-center items-center space-y-2">
          <p>ETH Balance 00.00</p>
          <div className="border border-gray-500 hover:border-green-300 w-full"></div>
        </div>
        <div className="group-seven flex justify-between">
          <div className="flex flex-col w-[45%] h-[20%]">
            <div className="flex flex-row justify-between px-2 text-[8px]">
              <p>Amount in BNB you pay</p>
              <p>Max</p>
            </div>
            <div className="flex flex-row justify-between h-[10%] p-1  border border-gray-500 hover:border-green-300 rounded-md">
              <input className="w-full bg-transparent border-0 " type="number" />
              <img className="" src={bnb} alt="eth" />
            </div>
          </div>
          <div className="relative flex flex-col w-[45%] h-[20%]">
            <div className="flex flex-row justify-between px-2 text-[8px]">
              <p>Amount in BIOS you pay</p>
              <p>Max</p>
            </div>
            <div className="flex justify-between h-[10%] p-1 border border-gray-500 hover:border-green-300 rounded-md">
              <input className="w-full bg-transparent border-0" type="number" />
              <img src={biosw} alt="Bios" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1 text-[8px]">
          <p>
            0.0025 BNB is reserved for gas.The actual amount used will depend an
            the network.
          </p>

          <Button className="p-4 text-center rounded-md" color="green">Connect Wallet</Button>
          <p className="flex justify-center pt-4 text-sm">LISTING PRICE: $0.000155</p>
        </div>
         <ul className="flex justify-center gap-3">
              <li>
                <a href="https://t.me/+SHC0-kzuABk0NGQ5">
                  <img alt="Logo Telegran" src={telegran} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbiosworld23">
                  <img alt="Logo Twitter" src={twitter} />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@biosworld23">
                  <img alt="Logo medium" src={medium} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/biosworld">
                  <img alt="Logo Discord" src={facebook} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCIN-JdOQFvMN82zxhLY6lkQ">
                  <img alt="Logo Discord" src={youtube} />
                </a>
              </li>
            </ul>
      </div>
         <img className='absolute top-[-15%] -right-[25%] w-[55%] ' src={bird} alt="bird" />
         <img className='absolute -right-[40%] -bottom-[10%] w-[50%]' src={suricato} alt="meerkat" />


    </div>
  );
}
