import { Card, Form, FormGroup, Input, Label } from 'reactstrap';

const FormPage =
() => {
    return (
        <div className="vh-100 vw-100 justify-content-center align-items-center d-flex flex-column">
            <Card className="p-4">
                <Form>
                    <h3>Submit a grievance</h3>
                    <FormGroup>
                        <Label>Enter your phone number</Label>
                        <Input type="tel" pattern="[0-9]{10}"></Input>
                    </FormGroup>
                    
                </Form>            
            </Card>
        </div>
    );
}

export default FormPage;
