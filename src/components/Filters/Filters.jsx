import {Container, Row, Col, Button, Stack} from 'react-bootstrap';
import React from "react";
import Fire from "../../Assets/imgs/Fire.png";
import Snacks from "../../Assets/imgs/Snacks.png";
import Sushi from "../../Assets/imgs/Sushi.png";
import Drink from "../../Assets/imgs/Drink.png";
import Dessert from "../../Assets/imgs/Dessert.png";
import Pizza from "../../Assets/imgs/Pizza.png";
import Combo from "../../Assets/imgs/Combo.png";


export const Filters = () => {
    return (
        <>
            <Container className="pt-4">
                <Row className="header-tabs">
                    <Col className="d-flex justify-content-center">
                        <Button variant="outline-dark" size="lg">
                            <Stack direction="vertical">
                                <div>
                                    <img
                                        src={Fire}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-middle"
                                        alt="акции"
                                    /></div>
                                <div>
                                    акции
                                </div>
                            </Stack>
                        </Button></Col>
                    <Col className="d-flex justify-content-center">
                        <Button variant="outline-dark" size="lg">
                            <Stack direction="vertical">
                                <div>
                                    <img
                                        src={Pizza}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-middle"
                                        alt="снеки"
                                    /></div>
                                <div>
                                    пицца
                                </div>
                            </Stack>
                        </Button></Col><Col className="d-flex justify-content-center">
                    <Button variant="outline-dark" size="lg">
                        <Stack direction="vertical">
                            <div>
                                <img
                                    src={Snacks}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-middle"
                                    alt="закуски"
                                /></div>
                            <div>
                                закуски
                            </div>
                        </Stack>
                    </Button></Col><Col className="d-flex justify-content-center">
                    <Button variant="outline-dark" size="lg">
                        <Stack direction="vertical">
                            <div>
                                <img
                                    src={Sushi}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-middle"
                                    alt="суши"
                                /></div>
                            <div>
                                суши
                            </div>
                        </Stack>
                    </Button>
                </Col>
                    <Col className="d-flex justify-content-center">
                    <Button variant="outline-dark" size="lg">
                        <Stack direction="vertical">
                            <div>
                                <img
                                    src={Drink}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-middle"
                                    alt="напитки"
                                /></div>
                            <div>
                                напитки
                            </div>
                        </Stack>
                    </Button></Col>
                    <Col className="d-flex justify-content-center">
                        <Button variant="outline-dark" size="lg">
                            <Stack direction="vertical">
                                <div>
                                    <img
                                        src={Dessert}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-middle"
                                        alt="десерты"
                                    /></div>
                                <div>
                                    дессерты
                                </div>
                            </Stack>
                        </Button></Col><Col className="d-flex justify-content-center">
                    <Button variant="outline-dark" size="lg">
                        <Stack direction="vertical">
                            <div>
                                <img
                                    src={Combo}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-middle"
                                    alt="комбо"
                                /></div>
                            <div>
                                комбо
                            </div>
                        </Stack>
                    </Button></Col>
                </Row>
            </Container>
        </>
    )
        ;
};
