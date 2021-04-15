import { Container, Row } from 'reactstrap';
import ProblemCard from './ProblemCard';

const Problems =
  ({ reports }) => (
    <Container>
      <Row>
        <section className="h-100 pt-5 d-flex flex-column align-items-center">
          {reports.map((r, i) => <ProblemCard float {...r} key={i} />)}
        </section>
      </Row>
    </Container>
  );

export default Problems;
