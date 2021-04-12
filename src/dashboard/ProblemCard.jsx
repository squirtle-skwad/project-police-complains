import { Button } from 'reactstrap';

const ProblemCard =
  ({ area, category, text }) => (
    <div className="problem-card d-flex flex-column" style={{ height: 'fit-content', minWidth: '300px' }}>
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/aa/DSM_Building_Collapse_2013.jpg"
        className="problem-img shadow-sm"
      /> */}
      <div className="p-3 d-flex flex-column align-items-start">
        <span className="h4 fw-bold">{category}</span>
        <div className="w-100 d-flex justify-content-between">
          <span className="h6 text-muted"> In {area} </span>
          <Button
            color="secondary"
            size="sm"
            className="fw-bold ml-auto"
          >
            Manage
          </Button>
        </div>
      </div>
    </div>
  );

export default ProblemCard;
