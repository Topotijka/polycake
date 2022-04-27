import { Button, Row, Col, Container, Navbar, Form } from 'react-bootstrap';
import React from "react";
import mapMark from "../../Assets/imgs/mapMark.svg.png"
import doge from "../../Assets/imgs/doge.png"
import telega from "../../Assets/imgs/telega.png"


export const Header = () => {
    return (
        <>
            <Navbar bg="white" expand="sm">
                <Container>
                    <Row style={{width: "100%"}}>
                        <Col className="d-flex flex-nowrap align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    src={mapMark}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-middle"
                                    alt="Карта"
                                />
                                <Form.Select bsPrefix="dropdown--no-padding dropdown-toggle--header"
                                             className="border-0" size="sm">
                                    <option>Москва</option>
                                    <option>Тверь</option>
                                    <option>Краснодар</option>
                                    <option>Нижний Новгород</option>
                                </Form.Select>
                            </div>
                            <Button style={{color: "#FF8C00"}} className="ms-lg-3 text-decoration-none" variant="link">Проверить
                                адрес</Button>
                            <div style={{color: "#FF8C00"}} className="ms-lg-3">среднее время доставки: 123</div>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end">
                            <span style={{color: "#FF8C00"}}>время работы: 9:00 - 21:00</span>

                            <a className="d-flex ms-lg-3 align-items-center text-decoration-none " href="#">
                                <span style={{color: "#FF8C00"}}>авторизация</span>
                            </a>

                        </Col>
                    </Row>
                </Container>
            </Navbar>


            <Navbar bg="white" expand="sm">
                <Container>
                    <Row style={{width: "100%"}}>
                        <Col className="d-flex flex-nowrap align-items-start">
                            <div className="d-flex align-items-center">
                                <img
                                    src={doge}
                                    width="60"
                                    height="60"
                                    className="d-inline-block align-middle"
                                    alt="doge"
                                />
                                <h5 style={{color: "#FF8C00"}}>Shibanya</h5>
                            </div>
                        </Col>
                        <Col className="d-flex flex-nowrap justify-content-end pe-0">
                            <Button variant="warning">
                                <div><img
                                    src={telega}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-middle"
                                    alt="doge"
                                /> корзина
                                </div>
                            </Button>{' '}

                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>

    )
        ;
}


