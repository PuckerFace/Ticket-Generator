import Nav from '../components/Nav';
import TicketSelection from '../components/TicketSelection';

const SelectionPage = () => {
  return (
    <div className="gradient w-full h-full md:h-[1082px] py-3  flex-col justify-start items-center gap-20 inline-flex md:overflow-hidden">
      <Nav />
      <div className="py-[56]">
        <TicketSelection />
      </div>
    </div>
  );
};

export default SelectionPage;
