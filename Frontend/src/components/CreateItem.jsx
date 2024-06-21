import { useState } from 'react';
import { Button, Container, Row, Col, Form, Stack } from 'react-bootstrap';

export const CreateItem = ({handleAdd}) => {

    const [description, setDescription] = useState('');

    function handleClear() {
        setDescription('');
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    return (
        <Container>
        
        <h1>Add Items</h1>
        <Form.Group as={Row} className="mb-3" controlId="formAddTodoItem">
            <Form.Label column sm="2">
            Description
            </Form.Label>
            <Col md="6">
            <Form.Control
                type="text"
                placeholder="Enter description..."
                value={description}
                onChange={handleDescriptionChange}
            />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 offset-md-2" controlId="formAddTodoItem">
            <Stack direction="horizontal" gap={2}>
            <Button variant="primary" onClick={() => handleAdd(description)}>
                Add Item
            </Button>
            <Button variant="secondary" onClick={() => handleClear()}>
                Clear
            </Button>
            </Stack>
        </Form.Group>
        </Container>
    );
};