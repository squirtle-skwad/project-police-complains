import { Button } from 'reactstrap';
import { RiPoliceCarFill, RiTreasureMapFill, RiLogoutBoxFill } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';

const Sidebar =
() => {
  return (
    <div id="sidebar" className="shadow py-5">
      <Button color="light">
        <CgProfile size={32} />
      </Button>

      <Button color="light" className="mt-auto">
        <RiTreasureMapFill size={32} />
      </Button>

      <Button color="light" className="mt-4">
        <RiPoliceCarFill size={32} />
      </Button>

      <Button color="light" className="mt-4">
        <ImStatsDots size={32} />
      </Button>

      <Button color="light" className="mt-auto">
        <RiLogoutBoxFill size={32} />
      </Button>
    </div>
  );
};

export default Sidebar;
