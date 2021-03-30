import { Col, Container, Row } from 'reactstrap';
import Map from './Map';
import Problems from './Problems';
import Sidebar from './Sidebar';

const MapContainer =
  () => (
    <div id="map-container">
      <Map />
    </div>
  );

const Dashboard =
  () => (
    <Container fluid className="vh-100 vw-100 bg-light">
      <Row>
        <Col sm={8} className="p-0">
          <Sidebar />
          <MapContainer/>
        </Col>
        <Col sm={4} className="shadow" style={{ zIndex: 1000, }}>
          <Problems />
        </Col>
      </Row>
    </Container>
  );

export default Dashboard;
