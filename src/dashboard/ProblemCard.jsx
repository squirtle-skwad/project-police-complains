import { Button } from 'reactstrap';

const ProblemCard =
  () => (
    <div className="problem-card d-flex flex-column" style={{ height: 'fit-content' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/aa/DSM_Building_Collapse_2013.jpg"
        className="problem-img shadow-sm"
      />
      <div className="p-3 d-flex justify-content-between">
        <span className="h5 fw-bold">Building Colapse</span>
        <Button
          color="secondary"
          size="sm"
          className="fw-bold"
        >
          Manage
         </Button>
      </div>
    </div>
  );

export default ProblemCard;
