import React, { useContext, useState } from "react";
import { Col, Row, Tab, Nav, Tabs } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AuthContext from "../../store/auth-context";
import AddCategory from "./components/Category/AddCategory";
import DeleteCategory from "./components/Category/DeleteCategory";
import EditCategory from "./components/Category/EditCategory";
import AddEmployee from "./components/Employee/AddEmployee";
import RemoveEmployee from "./components/Employee/RemoveEmployee";
import Orders from "./components/Orders/Orders";
import AddProducer from "./components/Producer/AddProducer";
import DeleteProducer from "./components/Producer/DeletePoducer";
import EditProducer from "./components/Producer/EditProducer";
import AddProduct from "./components/Products/AddProduct";
import DeleteProduct from "./components/Products/DeleteProduct";
import EditProduct from "./components/Products/EditProduct";
import AddSales from "./components/Sales/AddSales";
import DeleteSales from "./components/Sales/DeleteSales";
import Users from "./components/User/Users";

import styles from './EmployeePanel.module.css'

const EmployeePanel = () => {
    const authCtx = useContext(AuthContext)

    const [updateData, setUpdateData] = useState(false)
    return (
        <>
            <Navbar />
            <div className={`${styles.bodyContainer}`}>
                <div className="m-4">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="product">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="product">Produkty</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="categories">Kategorie</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="order">Zamówienia</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="producers">Producenci</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sales">Przeceny</Nav.Link>
                                    </Nav.Item>
                                    {authCtx.role === "ADMIN" &&
                                        <Nav.Item>
                                            <Nav.Link eventKey="employee">Pracownicy</Nav.Link>
                                        </Nav.Item>}
                                    {authCtx.role === "ADMIN" &&
                                        <Nav.Item>
                                            <Nav.Link eventKey="client">Klienci</Nav.Link>
                                        </Nav.Item>}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="product">
                                        <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                                            <Tab eventKey="add" title="Dodaj produkt">
                                                <AddProduct change={updateData} onChange={setUpdateData} />
                                            </Tab>
                                            <Tab eventKey="edit" title="Edytuj produkt">
                                                <EditProduct change={updateData} onChange={setUpdateData} />
                                            </Tab>
                                            <Tab eventKey="delate" title="Usuń produkt" >
                                                <DeleteProduct change={updateData} onChange={setUpdateData} />
                                            </Tab>
                                        </Tabs>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="categories">
                                        <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                                            <Tab eventKey="add" title="Dodaj kategorie">
                                                <AddCategory onChange={setUpdateData} />
                                            </Tab>
                                            <Tab eventKey="edit" title="Edytuj kategorie">
                                                <EditCategory change={updateData} onChange={setUpdateData} />
                                            </Tab>
                                            <Tab eventKey="delate" title="Usuń kategorie" >
                                                <DeleteCategory change={updateData} onChange={setUpdateData} />
                                            </Tab>
                                        </Tabs>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="order">
                                        <Orders change={updateData} onChange={setUpdateData} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="producers">
                                        <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                                            <Tab eventKey="add" title="Dodaj producenta">
                                                <AddProducer onChange={setUpdateData} />
                                            </Tab>
                                            <Tab eventKey="edit" title="Edytuj producenta">
                                                <EditProducer change={updateData} onChange={setUpdateData} />
                                            </Tab>
                                            <Tab eventKey="delate" title="Usuń producenta" >
                                                <DeleteProducer change={updateData} onChange={setUpdateData} />
                                            </Tab>
                                        </Tabs>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sales">
                                        <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                                            <Tab eventKey="add" title="Dodaj przecene">
                                                <AddSales change={updateData} onChange={setUpdateData} />
                                            </Tab>
                                            <Tab eventKey="delate" title="Usuń przecene" >
                                                <DeleteSales change={updateData} onChange={setUpdateData} />
                                            </Tab>
                                        </Tabs>
                                    </Tab.Pane>
                                    {authCtx.role === "ADMIN" &&
                                        <Tab.Pane eventKey="employee">
                                            <Tabs defaultActiveKey="add" id="uncontrolled-tab-example" className="mb-3">
                                                <Tab eventKey="add" title="Dodaj pracownika">
                                                    <AddEmployee onChange={setUpdateData} />
                                                </Tab>
                                                <Tab eventKey="delate" title="Usuń pracownika" >
                                                    <RemoveEmployee change={updateData} onChange={setUpdateData} />
                                                </Tab>
                                            </Tabs>
                                        </Tab.Pane>}
                                    {authCtx.role === "ADMIN" &&
                                        <Tab.Pane eventKey="client">
                                            <Users change={updateData} onChange={setUpdateData} />
                                        </Tab.Pane>}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default EmployeePanel