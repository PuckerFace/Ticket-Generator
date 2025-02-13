import Nav from '../components/Nav';
import TicketForm from '../components/TicketForm';

const DetailsPage = () => {
  return (
    <div className="gradient w-full h-full  py-3  flex-col justify-start items-center gap-20 inline-flex md:overflow-hidden">
      <Nav />
      <div className="py-[56]">
        <TicketForm />
      </div>
    </div>
  );
};

export default DetailsPage;
