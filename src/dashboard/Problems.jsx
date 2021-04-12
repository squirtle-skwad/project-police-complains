import { Container, Row } from 'reactstrap';
import ProblemCard from './ProblemCard';

const Problems =
  ({ reports }) => (
    <Container>
      <Row className="text-center py-4">
        <h1 className="font-emp fw-bolder h3">REPORTS</h1>
        <hr></hr>
      </Row>
      <Row>
        <section className="h-100 d-flex flex-column align-items-center">
          {reports.map((r, i) => <ProblemCard {...r} key={i} />)}
        </section>
      </Row>
    </Container>
  );

export default Problems;
