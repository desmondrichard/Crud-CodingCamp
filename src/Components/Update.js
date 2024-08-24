import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Update({ show, handleClose, handleUpdateSubmit, name, setName, email, setEmail, mobile, setMobile, age, setAge }) {

    return (
        <div>
            <>
                <Modal centered
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    className='modal-xl'
                >
                    <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
                        <Modal.Title className='text-white'><h5>Update User :-
                        </h5></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleUpdateSubmit}>
                            <Form.Label htmlFor="name">Name:</Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                aria-describedby="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Form.Label htmlFor="name">Email:</Form.Label>
                            <Form.Control
                                type="text"
                                id="email"
                                aria-describedby="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Label htmlFor="mobile">Mobile:</Form.Label>
                            <Form.Control
                                type="text"
                                id="mobile"
                                aria-describedby="mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                            <Form.Label htmlFor="age">Age:</Form.Label>
                            <Form.Control
                                type="text"
                                id="age"
                                aria-describedby="age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <div className="d-grid gap-2 py-2 px-1">
                                <Button className='mt-2' variant="success" type="submit">Update</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                    {/* Footer: */}
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            {/* modal end: */}


        </div>
    )
}

export default Update