import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col, Form, FloatingLabel, Button, Alert } from "react-bootstrap";

const AddEmployee = (props) => {
    // Costumer
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    // Address
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [postCode, setPostCode] = useState('');

    const [feedback, setFeedback] = useState(null)

    const submitHandler = async (event) => {
        event.preventDefault();

        console.log('Email: ' + email);
        console.log('Password: ' + password);
        console.log('Confirm Password: ' + confirmPassword);
        const newEmployee = {
            userName: email,
                name: name,
            surname: surname,
            email: email,
            password: password,
            phoneNumber: phone,
            houseNumber: houseNumber,
            street: street,
            country: country,
            townName: city,
            postCode: postCode,
            role: "WORKER"
        }
        await axios.post("http://localhost:8888/worker/registration", newEmployee).then((response) => {
            if (response.status === 200)
                setFeedback(
                    <Alert variant="success">
                        Konto dla pracownika {newEmployee.name} zostało utworzone!
                        <p>Na E-mail'u: {newEmployee.email} wysłano link z aktywacją konta.</p>
                    </Alert>
                )
            else
                setFeedback(
                    <Alert variant="danger">
                        Nie udało się stworzyć konta dla pracownika {newEmployee.name}!
                    </Alert>
                )
        }).catch((e) => {
            setFeedback(
                <Alert variant="danger">
                    Nie udało się stworzyć konta dla pracownika {newEmployee.name}!
                </Alert>
            )
            })
        setName('')
        setSurname('')
        setPhone('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setCountry('')
        setCity('')
        setStreet('')
        setHouseNumber('')
        setPostCode('')

    };

    return (
        <>
            <Form onSubmit={(e) => submitHandler(e)}>
                {feedback}
                <h4>Dane pracownika</h4>
                <hr />
                <Row className="mb-2">
                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Imię">
                            <Form.Control type="text" placeholder="Imię" onChange={(e) => setName(e.target.value)} value={name} />
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Nazwisko">
                            <Form.Control type="text" placeholder="Nazwisko" onChange={(e) => setSurname(e.target.value)} value={surname}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col xs={12} md={4}>
                        <FloatingLabel controlId="floatingPassword" label="Numer telefonu">
                            <Form.Control type="text" placeholder="Numer telefonu" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="E-mail">
                            <Form.Control type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Hasło">
                            <Form.Control type="text" placeholder="Hasło" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-3">

                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Potwiedź hasło">
                            <Form.Control type="text" placeholder="Potwiedź hasło" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <h4>Adres</h4>
                <hr />
                <Row className="mb-2">
                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Kraj">
                            <Form.Control type="text" placeholder="Kraj" onChange={(e) => setCountry(e.target.value)} value={country}/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={6}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Miasto">
                            <Form.Control type="text" placeholder="Miasto" onChange={(e) => setCity(e.target.value)} value={city}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col xs={12} md={4}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Ulica">
                            <Form.Control type="text" placeholder="Ulica" onChange={(e) => setStreet(e.target.value)} value={street}/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4}>
                        <FloatingLabel className="mb-1" controlId="floatingPassword" label="Numer mieszkania">
                            <Form.Control type="text" placeholder="Numer mieszkania" onChange={(e) => setHouseNumber(e.target.value)} value={houseNumber}/>
                        </FloatingLabel>
                    </Col>
                    <Col xs={12} md={4}>
                        <FloatingLabel controlId="floatingPassword" label="Kod pocztowy">
                            <Form.Control type="text" placeholder="Kod pocztowy" onChange={(e) => setPostCode(e.target.value)} value={postCode}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                        Dodaj pracownika
                    </Button>
                </div>
            </Form>
        </>
    );
}

export default AddEmployee