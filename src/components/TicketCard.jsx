//import { useLocation } from 'react-router-dom';
import bg from '../assets/images/bg.png';
import vector from '../assets/images/vector.png';
import vector2 from '../assets/images/vector2.png';
import vector3 from '../assets/images/vector3.png';
import { useNavigate } from 'react-router-dom';

const TicketCard = () => {
  const userData = JSON.parse(localStorage.getItem('userData')) || {
    ticketType: 'free',
    ticketCount: 1,
    name: '',
    email: '',
    message: '',
  };
  const navigate = useNavigate();
  const userUrl = JSON.parse(localStorage.getItem('userUrl')) || null;
  const handleBack = () => {
    navigate('/');
  };
  return (
    <section className="flex flex-col justify-center w-[350px] sm:w-[375px]  md:w-[600px] p-12 gap-8 rounded-[40px] border-2 border-[#0E464F] bg-[#041E23] font-[JejuMyeongjo] font-normal text-white ">
      <div className="flex  justify-between items-start  md:items-center gap-7 md:flex-row flex-col ">
        <h1 className="text-white text-2xl md:text-[32px] font-normal ">
          Ready
        </h1>
        <p className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
          Step 3/3
        </p>
      </div>
      <div className="flex">
        <span className="w-full bg-[#24A0B5] h-1.5 rounded-2xl "></span>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-white text-[32px] font-normal font-['Alatsi']">
          Your Ticket is Booked!
        </h1>
        <p className="text-center">
          <span className="text-color-grey-98 text-base font-normal font-['Roboto'] leading-normal">
            Check your email for a copy or you can{' '}
          </span>
          <span className="text-white text-base font-bold font-['Roboto'] leading-normal">
            download
          </span>
        </p>
      </div>

      <div className="flex flex-col  justify-center w-full ">
        <div
          className=" self-center w-[320px] md:w-[300px] h-[600px] pt-6  object-cover  bg-auto bg-center md:bg-cover bg-no-repeat   flex flex-col  items-center  "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="  w-[260px] h-[446px] p-3.5 bg-[#031d21]/10 rounded-2xl border border-[#23a0b5] backdrop-blur-sm items-center gap-3  inline-flex flex-col">
            <h1 className="text-center text-white text-[34px] font-normal font-head leading-[34px]">
              Techember Fest ”25
            </h1>
            <div className="h-[42px] p-1 flex-col justify-center items-center gap-1 inline-flex">
              <div className="text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                📍 04 Rumens road, Ikoyi, Lagos
              </div>
              <div className="text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                📅 March 15, 2025 | 7:00 PM
              </div>
            </div>

            <div className="w-[140px] h-[140px] rounded-xl border-4 border-[#23a0b5]/50 ">
              <img
                src={userUrl}
                alt=""
                className="rounded-lg object-cover h-full"
              />
            </div>

            <div className=" bg-[#07333c]   rounded-lg border border-[#123d43] flex-col justify-center items-center inline-flex">
              <div className=" w-full border-b border-[#12464e] justify-start items-center gap-2 inline-flex">
                <div className=" w-1/2   p-1 border-r border-[#12464e] flex-col justify-center items-start gap-1 inline-flex">
                  <p className=" text-white opacity-30 text-[10px] font-normal font-['Roboto'] leading-[15px]">
                    Enter your name
                  </p>
                  <p className="text-white  text-xs font-bold font-['Roboto'] leading-[18px] break-all">
                    {userData.name}
                  </p>
                </div>
                <div className="w-1/2 p-1 flex-col justify-center items-start gap-1 inline-flex">
                  <div className="opacity-30 text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                    Enter your email *
                  </div>
                  <div className="text-white text-xs font-bold font-['Roboto'] leading-[18px] break-all">
                    {userData.email}
                  </div>
                </div>
              </div>
              <div className="self-stretch border-b border-[#12464e] justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 p-1 border-r border-[#12464e] flex-col justify-center items-start gap-1 inline-flex">
                  <div className="opacity-30 text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                    Ticket Type:
                  </div>
                  <div className="text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                    {userData.ticketType}
                  </div>
                </div>
                <div className="grow shrink basis-0 p-1 flex-col justify-center items-start gap-1 inline-flex">
                  <div className="opacity-30 text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                    Ticket for :
                  </div>
                  <div className="text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                    {userData.ticketCount}
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[65px] p-2 flex-col justify-center items-start gap-1 flex">
                <div className="self-stretch opacity-30 text-white text-[10px] font-normal font-['Roboto'] leading-[15px]">
                  Special request?
                </div>
                <div className="self-stretch text-white text-[10px] font-normal font-['Roboto'] leading-[15px] break-all">
                  {userData.message}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7 flex gap-1 items-start">
            <img src={vector2} alt="" className="h-[70px]" />
            <img src={vector3} alt="" />
            <img src={vector} alt="" />
            <img src={vector2} alt="" />
            <img src={vector2} alt="" />
            <img src={vector} alt="" />
            <img src={vector2} alt="" />
            <img src={vector} alt="" />
            <img src={vector2} alt="" className="h-[70px]" />
            <img src={vector2} alt="" />
            <img src={vector} alt="" />
            <img src={vector} alt="" />
            <img src={vector} alt="" />
            <img src={vector2} alt="" />
            <img src={vector} alt="" />
            <img src={vector} alt="" />
            <img src={vector2} alt="" />
            <img src={vector3} alt="" />
            <img src={vector} alt="" />
            <img src={vector3} alt="" />
            <img src={vector2} alt="" className="h-[70px]" />
            <img src={vector3} alt="" />
          </div>
        </div>
        {/* <img src={bg} alt="" /> */}
        <div className="flex gap-4 pt-6 md:flex-row flex-col">
          <button
            className="h-12 px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 inline-flex overflow-hidden w-full order-2 md:order-1"
            onClick={handleBack}
          >
            <p className="text-[#23a0b5] text-base font-normal font-['JejuMyeongjo'] leading-normal">
              Book Another Ticket
            </p>
          </button>
          <button
            className="h-12 px-6 py-3 bg-[#23a0b5] rounded-lg justify-center items-center gap-2 inline-flex overflow-hidden w-full order-1 md:order-2"
            type="submit"
          >
            <p className="text-white text-base font-normal font-['JejuMyeongjo'] leading-normal">
              Download Ticket
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TicketCard;
