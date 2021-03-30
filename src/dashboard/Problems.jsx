import { Container, Row } from 'reactstrap';
import ProblemCard from './ProblemCard';

const Problems =
  () => (
    <Container>
      <Row className="text-center py-4">
        <h1 className="font-emp fw-bolder h3">Problems</h1>
      </Row>
      <Row>
        <section className="h-100 d-flex flex-column align-items-center">
          <ProblemCard />
        </section>
      </Row>
    </Container>
  );

export default Problems;
