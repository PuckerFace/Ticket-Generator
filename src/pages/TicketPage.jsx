import Nav from '../components/Nav';
import TicketCard from '../components/TicketCard';

const TicketPage = () => {
  return (
    <div className="gradient  w-full h-full  py-3  flex-col justify-start items-center gap-20 inline-flex md:overflow-hidden">
      <Nav />
      <div className="py-[56]">
        <TicketCard />
      </div>
    </div>
  );
};

export default TicketPage;
