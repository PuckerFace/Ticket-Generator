import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TicketSelection = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const [ticketType, setTicketType] = useState('free');
  const navigate = useNavigate();
  const access = [
    { type: 'free', display: 'free', text: 'Regular Access', num: ' 20/52' },
    { type: 'VIP', display: '$150', text: 'VIP Access', num: ' 20/52' },
    { type: 'VVIP', display: '$150', text: 'VVIP Access', num: ' 20/52' },
  ];

  const handleNext = (e) => {
    e.preventDefault();
    const selectedData = { ticketType, ticketCount };
    localStorage.setItem('selectedData', JSON.stringify(selectedData));
    navigate('/form');
    console.log('Saving selectedData to local storage:', selectedData);
    console.log(ticketCount);
    console.log(ticketType);
  };

  const handleCancel = () => {
    setTicketCount(1);
    setTicketType('free');
  };
  useEffect(() => {
    localStorage.setItem(
      'ticketSelection',
      JSON.stringify({ ticketType, ticketCount })
    );
  }, [ticketCount, ticketType]);
  return (
    <section className="flex flex-col justify-center w-[350px] sm:w-[375px]  md:w-[700px] p-12 gap-8 rounded-[40px] border-2 border-[#0E464F] bg-[#041E23] font-[JejuMyeongjo] font-normal text-white ">
      <div className="flex  justify-between items-start  md:items-center gap-7 md:flex-row flex-col ">
        <h1 className="text-white text-2xl md:text-[32px] font-normal ">
          Ticket Selection
        </h1>
        <p className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
          Step 1/3
        </p>
      </div>
      <div className="flex">
        <span className="w-1/3 bg-[#24A0B5] h-1.5 rounded-2xl "></span>
        <span className="bg-[#0E464F] w-2/3 h-1.5 rounded-r-2xl "></span>
      </div>

      <div className="h-full md:h-[200px] p-6 background rounded-3xl border-2 border-[#07363e] backdrop-blur-[14px] flex-col justify-start items-center gap-4 md:gap-2 inline-flex">
        <div className="self-stretch h-[118px] flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch text-center text-neutral-50 text-4xl md:text-[62px] font-normal font-head leading-[48px] md:leading-[62px]">
            Techember Fest ”25
          </div>
          <div className="md:w-[340px] w-full text-center text-neutral-50 md:text-base font-normal font-['Roboto'] text-sm md:leading-normal leading-[21px]">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </div>
        </div>
        <div className="mt-4 justify-start items-start gap-2 md:gap-4 inline-flex md:flex-row flex-col">
          <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
            📍 [Event Location]
          </div>
          <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal md:block hidden">
            | |
          </div>
          <div className="text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
            March 15, 2025 | 7:00 PM
          </div>
        </div>
      </div>

      <hr className="border-2 border-[#07373F] " />
      <h2
        htmlFor=""
        className="text-color-grey-98 text-base font-normal font-['Roboto'] leading-normal"
      >
        Select Ticket Type:
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleNext}>
        <div className="md:h-[142px] h-full p-4 bg-[#042127] rounded-3xl border border-[#07363e] flex-col justify-center items-center gap-4 inline-flex w-full">
          <div className="self-stretch justify-between items-start inline-flex gap-4  md:flex-row flex-col">
            {access.map((info) => (
              <div
                key={info.type}
                className={`w-full  p-3 rounded-xl border-2 border-[#197686] flex-col justify-start items-start gap-3 inline-flex overflow-hidden hover:bg-[#2C545B] cursor-pointer ${
                  ticketType === info.type ? 'bg-[#12464E]' : 'bg-transparent'
                }`}
                onClick={() => setTicketType(info.type)}
              >
                <div className="text-white text-2xl font-semibold font-['Roboto'] leading-relaxed  ">
                  {info.display}
                </div>
                <div className="self-stretch h-[45px] flex-col justify-center items-start flex">
                  <div className="text-neutral-50 text-base font-normal font-['Roboto'] uppercase leading-normal">
                    {info.text}
                  </div>
                  <p className="text-[#d9d9d9] text-sm font-normal font-['Roboto'] leading-[21px]">
                    {info.num}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-7 text-color-grey-98 text-base font-normal font-['Roboto'] leading-normal">
          {' '}
          Number of Tickets
        </div>
        <div className="h-12 p-3 rounded-xl border border-[#07363e] justify-start items-center gap-2 inline-flex">
          <select
            name=""
            id=""
            className="grow shrink basis-0 bg-[#042127] text-white text-base font-normal font-['Roboto'] leading-normal"
            value={ticketCount}
            onChange={(e) => setTicketCount(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="flex gap-4 pt-6 md:flex-row flex-col">
          <button
            className="h-12 px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 inline-flex overflow-hidden w-full order-2 md:order-1"
            onClick={handleCancel}
          >
            <p className="text-[#23a0b5] text-base font-normal font-['JejuMyeongjo'] leading-normal">
              Cancel
            </p>
          </button>
          <button
            className="h-12 px-6 py-3 bg-[#23a0b5] rounded-lg justify-center items-center gap-2 inline-flex overflow-hidden w-full order-1 md:order-2"
            type="submit"
          >
            <p className="text-white text-base font-normal font-['JejuMyeongjo'] leading-normal">
              Next
            </p>
          </button>
        </div>
      </form>
    </section>
  );
};

export default TicketSelection;
