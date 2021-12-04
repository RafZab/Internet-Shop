import React, { useEffect, useState } from 'react';
import { Row, Col, Stack, Form, FloatingLabel, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import Product from '../../../Home/components/Product/Product';
import Carousels from '../../../../components/UI/Carousel/Carousel';

const EditProduct = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [editProductId, setEditProductId] = useState(null)
    const [editProduct, setEditProduct] = useState(null)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

    const [feedback, setFeedback] = useState(null)

    const fetchProducts = async () => {
        await axios.get("http://localhost:8888/api/products").then((response) => {
            setProducts(response.data)
        })
        setLoading(true)
    }

    const fetchProduct = async () => {
        await axios.get(`http://localhost:8888/api/products/${editProductId}`).then((response) => {
            setEditProduct(response.data)
            setName(response.data.name)
            setDescription(response.data.description)
            setPrice(response.data.price)
        })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        fetchProduct()
        setFeedback(null)
    }, [editProductId])

    const editProductHandler = async (e) => {
        e.preventDefault();

        const editProduct =
        {
            name: name,
            description: description,
            price: price,
            category: {
                name: "s",
                discounts: []
            },
            producer: {
                nameOfCompany: "d",
                nip: "12"
            }
        }

        await axios.put(`http://localhost:8888/api/products/${editProductId}`, editProduct).then((response) => {
            console.log(response)
            if (response.status === 200)
                setFeedback(
                    <Alert variant="success">
                        Przedmiot został zedytowany!
                    </Alert>
                )
            else
                setFeedback(
                    <Alert variant="danger">
                        Nie udało się edytować produktu!
                    </Alert>
                )
        }).catch((e) => {
            console.log(e)
            setFeedback(
                <Alert variant="danger">
                    Nie udało się edytować produktu!
                </Alert>
            )
        })
    }

    const contextProduct = !loading ? <p>loading...</p> : products.map((product) =>
        <Col md="auto">
            <Product
                key={product.productId}
                id={product.productId}
                name={product.name}
                price={product.price}
                description={product.description.substr(0, 90)}
                panel={true}
                action="Edytuj"
                onId={setEditProductId}
            />
        </Col>
    )

    const contextEditProduct = !editProduct ? <p>loading...</p> : (
        <Row>
            {feedback}

            <Col xs={12} md={5}>
                <Carousels />
            </Col>
            <Col xs={12} md={7}>
                <Form onSubmit={(e) => editProductHandler(e)}>
                    <FloatingLabel className="mb-3" controlId="floatingPassword" label="Nazwa produktu">
                        <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Nazwa produktu" />
                    </FloatingLabel>
                    <p>Producent: {editProduct.producer.nameOfCompany}</p>
                    <hr />
                    <Row>
                        <Col xs={12} md={8}>
                            <FloatingLabel className="mb-3" controlId="floatingTextareaDescription" label="Opis produktu">
                                <Form.Control
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    as="textarea"
                                    placeholder="Opis produktu"
                                    style={{ height: '160px' }}
                                />
                            </FloatingLabel>
                        </Col>
                        <Col xs={12} md={4}>
                            <Stack gap={3}>
                                <FloatingLabel controlId="floatingPassword" label="Cena">
                                    <Form.Control onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder="Cena" />
                                </FloatingLabel>
                            </Stack>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <Button className="ps-4 pe-4" variant="outline-primary" type="submit">
                            Edytuj produkt
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    )

    return (
        <>
            <div className="m-4">
                <h1 className=" justify-content-md-center">{editProduct ? "Produkt" : "Produkty"}</h1>
                <hr />
                <Row className="justify-content-md-center">
                    {editProduct ? contextEditProduct : contextProduct}
                </Row>
            </div>

        </>);
}

export default EditProduct