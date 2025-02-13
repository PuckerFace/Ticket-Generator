import iconticket from '../assets/images/iconticket.svg';
import ticz from '../assets/images/ticz.svg';
import arrow from '../assets/images/arrow.svg';
import arrow2 from '../assets/images/arrow2.png';
import { useState } from 'react';

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="text-[#FFFFFF] bg-[#05252c66] flex py-3 px-4 justify-between items-center  border rounded-3xl backdrop-blur-xs border-[#197686] w-[320px]  lg:w-[1200px] font-[JejuMyeongjo]">
      <div className="flex gap-1">
        <img src={iconticket} alt="" />
        <img src={ticz} alt="" />
      </div>
      <div className="lg:flex justify-between gap-5 hidden ">
        <p>Events</p>
        <p className="text-[#B3B3B3]">My Tickets</p>
        <p className="text-[#B3B3B3]">About Project</p>
      </div>
      <div
        className="flex py-4 px-6 justify-center items-center gap-2 rounded-xl border-[#D5EA00]/10 text-[#0A0C11] bg-[#FFFFFF] hover:bg-[#24A0B5] hover:border-[#D9D9D9] hover:text-[#D9D9D9]"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <p>My Tickets</p>
        <img src={isHovered ? arrow2 : arrow} alt="arrow" />
      </div>
    </nav>
  );
};

export default Nav;
