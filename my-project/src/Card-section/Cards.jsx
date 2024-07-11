import React from "react";
import "./Cards.css";
import Photoroom from '../assets/card1.png'
import Vector from '../assets/Vec.png'
import Business from '../assets/card2.png'
import team from '../assets/card3.png'
import freeteam from '../assets/card4.png'

function Cards() {
  return (
    <>
    <div>
      <div className="flex flex-wrap justify-around mt-20">
        <div className="con4 bg-white border-2  hover:border rounded-xl mb-12 max-w-96 h-[350px] overflow-hidden flex flex-col justify-between items-center cursor-pointer hover:transition-transform hover:duration-500 hover:scale-110 group">
          <p className="text-3xl text-center text-[#3A3562] group-hover:text-4xl group-hover:text-white  font-semibold font-[Manrope] top-16 w-36 relative transition-all duration-300 hover-item ">
            Strategic Guidance
          </p>
          <p className="text-center w-72  mt-4 transition-all group-hover:text-white duration-500 opacity-0 hover-item group-hover:mt-10">
            Know More
          </p>
          <img
            className="relative overflow-hidden top-24 transition-opacity duration-500 group-hover:opacity-0"
            src={Vector}
            alt=""
          />
          <img
            className="relative  overflow-hidden hover:bottom-0"
            src={Photoroom}
            alt=""
          />
        </div>

        <div className="con4 bg-white border-2 hover:border font-[Manrope]  rounded-xl mb-12 max-w-96 h-[350px] overflow-hidden  flex flex-col justify-between items-center cursor-pointer hover:transition-transform hover:duration-500 hover:scale-110 group">
          <p className="text-3xl w-52 text-center text-[#3A3562] group-hover:text-white  font-semibold top-16 relative transition-all duration-300 hover-item group-hover:text-4xl">
            Investment Opportunities
          </p>
          <p className="text-center w-72 mt-4 transition-all group-hover:text-white duration-500 opacity-0 hover-item group-hover:mt-10 ">
            Know More
          </p>
          <img
            className="relative overflow-hidden top-24 transition-opacity duration-500 group-hover:opacity-0"
            src={Vector}
            alt=""
          />
          <img
            className=" relative overflow-hidden hover:bottom-0"
            src={Business}
            alt=""
          />
        </div>

        <div className="con4 bg-white border-2 hover:border font-[Manrope]  rounded-xl mb-12 max-w-96 h-[350px] overflow-hidden flex flex-col justify-between items-center cursor-pointer hover:transition-transform hover:duration-500 hover:scale-110 group">
          <p className="text-3xl w-52 text-center text-[#3A3562] group-hover:text-white  font-semibold top-16 relative transition-all duration-300  hover-item group-hover:text-4xl">
            Ecosystem Development
          </p>
          <p className="text-center w-72 mt-4 transition-all group-hover:text-white  duration-500 opacity-0 hover-item group-hover:mt-10">
            Know More
          </p>
          <img
            className="relative overflow-hidden top-24 transition-opacity duration-500 group-hover:opacity-0"
            src={Vector}
            alt=""
          />
          <img
            className=" relative  overflow-hidden hover:bottom-0"
            src={team}
            alt=""
          />
        </div>
        <div className="con4 bg-white border-2 hover:border font-[Manrope]  rounded-xl mb-12 max-w-96 h-[350px] overflow-hidden flex flex-col justify-between items-center cursor-pointer hover:transition-transform hover:duration-500 hover:scale-110 group">
          <p className="text-3xl w-52 text-center font-semibold group-hover:text-white text-[#3A3562] top-16 relative transition-all duration-300  hover-item group-hover:text-4xl">
            Technology Enablement
          </p>
          <p className="text-center w-72 mt-4 transition-all group-hover:text-white  duration-500 opacity-0 hover-item group-hover:mt-10">
            Know More
          </p>
          <img
            className="relative overflow-hidden top-24 transition-opacity duration-500 group-hover:opacity-0"
            src={Vector}
            alt=""
          />
          <img
            className=" relative overflow-hidden hover:bottom-0"
            src={freeteam}
            alt=""
          />
        </div>
      </div>


      <div className="linear-g w-full h-40 mb-20 flex max-sm:flex-col max-sm:h-52 max-sm:items-center max-sm:justify-around max-sm:text-center  justify-between items-center">
        <div className="text-[#FFFFFF] max-w-2xl ml-14 max-sm:ml-0 max-md:ml-5 font-[Plus Jakarta Sans] text-3xl">
        Unleash the best opportunities to gear up your startup journey with Hubnex!
        </div>
        <button className="ps-16 pe-16 p-2 rounded-lg font-semibold max-sm:mr-0 max-md:mr-12  mr-24 text-[#5C27C0]  bg-white" type="button">Apply</button>

      </div>
      </div>

    </>
  );
}

export default Cards;
