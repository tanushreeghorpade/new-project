import React, { useState, useEffect } from "react";
import "./Header.css";
import girlpic from '../assets/girl.png'
import Frame1 from '../assets/Fr1.svg'
import Frame2 from '../assets/Fr2.svg'
import Frame3 from '../assets/Fr3.svg'
import Frame4 from '../assets/Fr4.svg'
import Frame5 from '../assets/Fr5.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Card = ({ card, animation }) => (
    <div
      className={`bg-white h-32 shadow-2xl w-72 mb-9 max-2xl:mr-1 mr-8 rounded-2xl flex ${animation}`}
    >
      <img className="h-auto w-16 mb-8 ml-2" src={card.image} alt="" />
      <div className="flex flex-col justify-center ml-1 mb-3">
        <p className="text-sm font-bold">{card.name}</p>
        <p className="text-sm w-28">{card.title}</p>
        <p className="text-sm">{card.sector}</p>
        <p className="h-3 w-3 rounded-full bg-green-800"></p>
      </div>
      <div className="flex left-16 mt-3 items-start">
        <img className="h-auto w-10" src={card.subImage1} alt="" />
        <img
          className="h-auto w-10 relative right-4"
          src={card.subImage2}
          alt=""
        />
        <img
          className="h-auto w-20 relative right-8"
          src={card.subImage3}
          alt=""
        />
      </div>
      <div className="w-full relative mb-3 flex justify-end items-end">
        <img className="h-5 w-20 mt-16 mr-5" src={card.icon} alt="" />
      </div>
    </div>
  );

  const cards = [
    {
      name: "Sharma V",
      title: "Startup X Founder",
      sector: "Health Sector",
      image: "src/assets/Elp300.svg",
      subImage1: "src/assets/Elp26.png",
      subImage2: "src/assets/Elp27.png",
      subImage3: "src/assets/Elp28.png",
      icon: "src/assets/Icon (1).svg",
    },
    {
      name: "Anik Dutta",
      title: "Startup Y Founder",
      sector: "Education",
      image: "src/assets/Elp301.svg",
      subImage1: "src/assets/Elp26.png",
      subImage2: "src/assets/Elp27.png",
      subImage3: "src/assets/Elp28.png",
      icon: "src/assets/Icon (1).svg",
    },
    {
      name: "Vicky D",
      title: "Startup Z Founder",
      sector: "Chemical Industry",
      image: "src/assets/Elp302.svg",
      subImage1: "src/assets/Elp26.png",
      subImage2: "src/assets/Elp27.png",
      subImage3: "src/assets/Elp28.png",
      icon: "src/assets/Icon (1).svg",
    },
    {
      name: "Bhuvaneshwar",
      title: "Startup E Founder",
      sector: "Commercial",
      image: "src/assets/Elp303.svg",
      subImage1: "src/assets/Elp26.png",
      subImage2: "src/assets/Elp27.png",
      subImage3: "src/assets/Elp28.png",
      icon: "src/assets/Icon (1).svg",
    },
    {
      name: "Chandru N",
      title: "Startup F Founder",
      sector: "Government",
      image: "src/assets/Elp304.svg",
      subImage1: "src/assets/Elp26.png",
      subImage2: "src/assets/Elp27.png",
      subImage3: "src/assets/Elp28.png",
      icon: "src/assets/Icon (1).svg",
    },
    {
      name: "Sharma V",
      title: "Startup G Founder",
      sector: "SAAS",
      image: "src/assets/Elp305.svg",
      subImage1: "src/assets/Elp26.png",
      subImage2: "src/assets/Elp27.png",
      subImage3: "src/assets/Elp28.png",
      icon: "src/assets/Icon (1).svg",
    },
  ];

  const [currentCards, setCurrentCards] = useState([0, 1]);
  const [animations, setAnimations] = useState([
    "card-slide-in-from-bottom",
    "",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimations(["card-slide-out-to-top", "card-slide-in-to-top"]);
      setTimeout(() => {
        setCurrentCards(([first, second]) => [
          second,
          (second + 1) % cards.length,
        ]);
        setAnimations(["", "card-slide-in-from-bottom"]);
      }, 1000); // Duration of the slideOut animation
    }, 3000); // Duration to show each card

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="">
      <nav className=" border-b-2  h-24 flex items-center">
        <div className=" text-start ml-8 items-center justify-center  flex  max-lg:ml-3">
          <p className="text-black text-2xl font-bold w-20 max-xl:text-xl ">
            hubnex <span className="font-normal"> invest</span>
          </p>
        </div>

        <div className="text-black flex text-center font-[Poppins] items-center ">
          <p className="ml-10 font-normal hover:font-medium text-xl hover:scale-125 cursor-pointer max-sm:hidden max-md:text-xs max-md:ml-4 max-lg:text-sm max-lg:ml-3 max-xl:text-sm max-xl:ml-6 max-2xl:text-lg max-2xl:ml-14">
            Home
          </p>
          <p className="ml-16 font-normal hover:font-medium text-xl hover:scale-125 cursor-pointer max-sm:hidden max-md:text-xs max-md:ml-4 max-lg:text-sm max-lg:ml-3 max-xl:text-sm max-xl:ml-6 max-2xl:text-lg max-2xl:ml-7">
            About Us
          </p>
          <p className="ml-16 font-normal hover:font-medium text-xl hover:scale-125 cursor-pointer max-sm:hidden max-md:text-xs max-md:ml-4 max-lg:text-sm max-lg:ml-3 max-xl:text-sm max-xl:ml-6 max-2xl:text-lg max-2xl:ml-7">
            What We Offer?
          </p>
          <p className="ml-16 font-normal hover:font-medium text-xl hover:scale-125 cursor-pointer max-sm:hidden max-md:text-xs max-md:ml-4 max-lg:text-sm max-lg:ml-3 max-xl:text-sm max-xl:ml-6 max-2xl:text-lg max-2xl:ml-7">
            Events
          </p>
          <p className="ml-16 font-normal hover:font-medium text-xl hover:scale-125 cursor-pointer max-sm:hidden max-md:text-xs max-md:ml-4 max-lg:text-sm max-lg:ml-3 max-xl:text-sm max-xl:ml-6 max-2xl:text-lg max-2xl:ml-7">
            Hubnex Labs
          </p>
          <p className="ml-16 font-normal hover:font-medium text-xl hover:scale-125 cursor-pointer max-sm:hidden max-md:text-xs max-md:ml-4  max-lg:text-sm max-lg:ml-4 max-xl:text-sm max-xl:ml-6 max-2xl:text-lg max-2xl:ml-7">
            Get In Touch
          </p>
        </div>
        <div class="relative ml-14 max-sm:hidden max-xl:ml-2">
          <input
            class="border border-slate-300  rounded-md p-2 pl-10 text-sm max-lg:w-36 w-48 focus:outline-none max-xl:-ml-0 max-2xl:mr-16 "
            type="search"
            placeholder="Search"
          />
          <svg
            class="absolute top-1/2 left-3 transform -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="currentColor"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
        </div>

        <div className="ml-14 flex max-lg:-ml-12 max-xl:-ml-10 max-2xl:-ml-3">
          <button
            className="bg-[#5C27C0] cursor-move text-xs font-thin ps-6 pe-6 text-white rounded-xl p-3 max-sm:hidden max-md:p-1 max-md:ml-2  "
            type="button"
          >
            Apply Now
          </button>
        </div>
        {/*----------------- Hamburger Code ------------------------- */}

        <div className="navbar hidden max-sm:block max-sm:justify-end max-sm:items-end ml-auto ">
          <div
            className="menu-icon mr-3 flex max-sm:justify-end max-sm:items-end"
            onClick={toggleMenu}
          >
            <div
              className={isOpen ? "menu-icon-line open" : "menu-icon-line"}
            ></div>
            <div
              className={isOpen ? "menu-icon-line open2" : "menu-icon-line"}
            ></div>
            <div
              className={isOpen ? "menu-icon-line open3" : "menu-icon-line"}
            ></div>
          </div>
        </div>

        {isOpen && (
          <div className="menu max-sm:w-full max-sm:mt-80 max-sm:flex absolute text-white bg-black hidden flex-col text-end justify-end items-center w-44 ">
            <p className="text-xl p-2 cursor-pointer hover:bg-slate-950 hover:w-full hover:flex justify-center hover:ml-0 max-sm:text-base max-md:text-xs max-md:ml-4 max-lg:text-sm max-lg:ml-6 max-xl:text-sm max-xl:ml-11 max-2xl:text-lg max-2xl:ml-20">
              Home
            </p>
            <p className="text-xl p-2 cursor-pointer hover:bg-slate-950 hover:w-full hover:flex justify-center hover:ml-0 max-sm:text-base max-md:text-xs max-md:ml-4 max-lg:text-sm max-lg:ml-6 max-xl:text-sm max-xl:ml-11 max-2xl:text-lg max-2xl:ml-16">
              About Us
            </p>
            <p className="text-xl p-2 cursor-pointer hover:bg-slate-950 hover:w-full hover:flex justify-center hover:ml-0 max-sm:text-base max-md:text-xs max-md:ml-4 max-lg:text-sm max-lg:ml-6 max-xl:text-sm max-xl:ml-11 max-2xl:text-lg max-2xl:ml-16">
              What We Offer?
            </p>
            <p className="text-xl p-2 cursor-pointer hover:bg-slate-950 hover:w-full hover:flex justify-center hover:ml-0 max-sm:text-base max-md:text-xs max-md:ml-4 max-lg:text-sm max-lg:ml-6 max-xl:text-sm max-xl:ml-11 max-2xl:text-lg max-2xl:ml-16">
              Events
            </p>
            <p className="text-xl p-2 cursor-pointer hover:bg-slate-950 hover:w-full hover:flex justify-center hover:ml-0 max-sm:text-base max-md:text-xs max-md:ml-4 max-lg:text-sm max-lg:ml-6 max-xl:text-sm max-xl:ml-11 max-2xl:text-lg max-2xl:ml-16">
              Hubnex Labs
            </p>
            <p className="text-xl p-2 cursor-pointer hover:bg-slate-950 hover:w-full hover:flex justify-center hover:ml-0 max-sm:text-base max-md:text-xs max-md:ml-4  max-lg:text-sm max-lg:ml-6 max-xl:text-sm max-xl:ml-11 max-2xl:text-lg max-2xl:ml-16">
              Get In Touch
            </p>
          </div>
        )}

        {/*----------------- Hamburger Code ------------------------- */}
      </nav>

      <div className="w-full  h-80 flex flex-col max-sm:items-center max-md:items-center">
        <div className=" ">
          <p className="text-[#565353]  ml-6 font-bold  font-[Poppins] text-7xl leading-normal max-sm:ml-0 max-sm:text-4xl max-sm:text-center max-md:text-center  space-y-20 mt-24 max-w-4xl max-2xl:text-6xl max-2xl:max-w-3xl max-2xl:leading-tight max-xl:text-5xl max-xl:max-w-xl max-xl:leading-normal max-xl:mt-14 max-lg:text-4xl max-lg:leading-relaxed max-lg:max-w-md max-lg:ml-8">
            Unlocking Investment Opportunities with Hubnex Invest
          </p>
        </div>

        <div>
          <p className="text-[#232323] text-3xl ml-6 mt-2 max-w-3xl max-sm:ml-0 max-sm:text-center max-xl:max-w-lg max-md:text-center  max-sm:text-xl max-sm:mt-14 max-xl:text-3xl  max-lg:text-2xl  max-lg:max-w-[25rem] max-lg:ml-8">
            Empowering Startup with Technology and Guidance
          </p>
        </div>

        <div className="max-sm:items-center cursor-pointer max-sm:justify-center max-sm:ml-0 max-sm:flex">
          <button
            className=" text-[#F3F1F7] bg-[#5C27C0]  font-semibold ml-6 max-sm:ml-0 mt-10 text-2xl rounded-lg p-4 ps-28 pe-28  max-xl:ps-20 max-xl:pe-20 max-lg:mt-10 max-lg:ml-8 "
            type="button"
          >
            Apply
          </button>
        </div>

        <div className="w-full -z-10 h-80  max-sm:-ml-16 flex relative  max-md:-bottom-20 max-md:-ml-28 max-[900px]:bottom-52  max-lg:bottom-64 bottom-96  justify-end">
          <div className="gradiant rounded-full w-[31rem] h-[31rem] max-[430px]:w-[20rem]  max-[430px]:h-[20rem]  max-sm:h-[28rem] max-md:h-[25rem] max-md:w-[25rem] max-[900px]:w-[23rem] max-[900px]:h-[23rem] max-lg:mr-14 max-lg:w-[25rem] max-lg:h-[25rem] max-sm:w-[28rem]  max-2xl:mr-20 mr-32 mb-96 flex content-center items-center justify-center">
            <img
              className="absolute  h-auto w-[46%] max-[430px]:w-[100%] max-md:w-[80%] max-lg:w-[58%] max-sm:w-[89%] max-[900px]:w-[60%] max-xl:w-[53%] max-[1115px]:w-[59%]  mr-11 mb-14"
              src={girlpic}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col max-[430px]:overflow-hidden max-[430px]:-bottom-64 max-[770px]:overflow-hidden items-end max-sm:-bottom-56 max-md:-bottom-56 max-[900px]:bottom-7 max-lg:bottom-12 relative bottom-24 justify-start">
        <Card card={cards[currentCards[0]]} animation={animations[0]} />
        <Card card={cards[currentCards[1]]} animation={animations[1]} />
      </div>

      <div className="flex overflow-hidden bg-white shadow-2xl max-md:-bottom-72 max-sm:-bottom-72 relative bottom-16  w-full h-28  ">
        <div className="flex flex-row justify-around  items-center w-[300%] animate-slide">
          <img
            className="w-36 filter grayscale brightness-50 m-28"
            src={Frame5}
            alt="Image Not Found"
          />
          <img
            className="w-36 filter grayscale brightness-50 m-28"
            src={Frame4}
            alt="Image Not Found"
          />
          <img
            className="w-36 filter grayscale brightness-50 m-28"
            src={Frame3}
            alt="Image Not Found"
          />
          <img
            className="w-36 filter grayscale brightness-50 m-28"
            src={Frame2}
            alt="Image Not Found"
          />
          <img
            className="w-36 filter grayscale brightness-50 m-28"
            src={Frame1}
            alt="Image Not Found"
          />
          <h1 className="text-gray-600 font-black font-[Poppins] text-4xl m-28">
            coinbase
          </h1>
          {/* <!-- Duplicate the images for seamless animation --> */}
          <img
            className="w-36 filter grayscale brightness-50 m-28"
            src={Frame5}
            alt="Image Not Found"
          />
          <img
            className="w-36 filter grayscale brightness-50 m-28"
            src={Frame4}
            alt="Image Not Found"
          />
          <img
            className="w-36 filter grayscale brightness-50 m-28"
            src={Frame3}
            alt="Image Not Found"
          />
          <img
            className="w-36 filter grayscale brightness-50 m-28"
            src={Frame2}
            alt="Image Not Found"
          />
          <img
            className="w-36 filter grayscale brightness-50 m-28"
            src={Frame1}
            alt="Image Not Found"
          />
          <h1 className="text-gray-600 font-black font-[Poppins] text-4xl m-28">
            coinbase
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
