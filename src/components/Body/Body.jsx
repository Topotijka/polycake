import {Container, Accordion, InputGroup, FormControl, Row, Col, Button, Stack} from 'react-bootstrap';
import React from "react";
import dog1 from "../../Assets/imgs/dog1.jfif";
import Pancake from "../../Assets/imgs/Pancake.jfif";
import dog3 from "../../Assets/imgs/dog3.jfif";
import dog2 from "../../Assets/imgs/dog2.jfif";
import a1 from "../../Assets/imgs/a1.png";
import a2 from "../../Assets/imgs/a2.png";
import a3 from "../../Assets/imgs/a3.png";
import a4 from "../../Assets/imgs/a4.png";


export const Body = () => {
    return (
        <>
            <Container className="pt-4">
                <Stack direction="horizontal" className="text-center">
                    <Col>
                        <a href="#">
                            <img
                                src={a1}
                                className="d-inline-block  rounded-2"
                                alt="акции"
                            />
                        </a>
                    </Col>
                    <Col>
                        <a href="#">
                            <img
                                src={a2}
                                className="d-inline-block  rounded-2"
                                alt="акции"
                            />
                        </a>
                    </Col>
                    <Col>
                        <a href="#">
                            <img
                                src={a3}
                                className="d-inline-block  rounded-2"
                                alt="акции"
                            />
                        </a>
                    </Col>
                    <Col>
                        <a href="#">
                            <img
                                src={a4}
                                className="d-inline-block  rounded-2"
                                alt="акции"
                            />
                        </a>
                    </Col>
                </Stack>
                <InputGroup className="mt-3">
                    <FormControl
                        placeholder="проверить адрес"
                        aria-label="проверить адрес"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="warning" id="button-addon2">
                        проверить
                    </Button>
                </InputGroup>
                <h1>Пицца</h1>
                <Row>
                    <Col>
                        <Stack direction="vertical" bg="white" className="text-center
                        p-2 border-1 border-dark border bg-white rounded-2">
                            <Col>
                                <img
                                    src={dog1}
                                    width="90%"
                                    className="d-inline-block  rounded-2"
                                    alt="акции"
                                />
                            </Col>
                            <Col>
                                <span className="ms-3 d-flex fw-bold">
                                    Чикен сладкий чили
                                </span>
                                <span className="text-md-start">
                                    Курица, Лук, Перец Халапеньо, Сыр Моцарелла
                                </span>
                                <Col>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <Button
                                            className="ms-3"
                                            variant="warning">
                                            Выбрать
                                        </Button>
                                        <span style={{color: "#FF8C00"}}>
                                           350.00 руб.
                                       </span>
                                    </div>
                                </Col>
                            </Col>
                        </Stack>
                    </Col>
                    <Col><Stack direction="vertical" bg="white" className="text-center
                        p-2 border-1 border-dark border bg-white rounded-2">
                        <Col>
                            <img
                                src={dog2}
                                width="90%"
                                className="d-inline-block align-middle rounded-2"
                                alt="акции"
                            />
                        </Col>
                        <Col>
                                <span className="ms-3 d-flex fw-bold">
                                    Чикен сладкий чили
                                </span>
                            <span className="text-md-start">
                                    Курица, Лук, Перец Халапеньо, Сыр Моцарелла
                                </span>
                            <Col>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Button
                                        className="ms-3"
                                        variant="warning">
                                        Выбрать
                                    </Button>
                                    <span style={{color: "#FF8C00"}}>
                                           350.00 руб.
                                       </span>
                                </div>
                            </Col>
                        </Col>
                    </Stack></Col>
                    <Col><Stack direction="vertical" bg="white" className="text-center
                        p-2 border-1 border-dark border bg-white rounded-2">
                        <Col>
                            <img
                                src={Pancake}
                                width="90%"
                                className="d-inline-block align-middle rounded-2"
                                alt="акции"
                            />
                        </Col>
                        <Col>
                                <span className="ms-3 d-flex fw-bold">
                                    Чикен сладкий чили
                                </span>
                            <span className="text-md-start">
                                    Курица, Лук, Перец Халапеньо, Сыр Моцарелла
                                </span>
                            <Col>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Button
                                        className="ms-3"
                                        variant="warning">
                                        Выбрать
                                    </Button>
                                    <span style={{color: "#FF8C00"}}>
                                           350.00 руб.
                                       </span>
                                </div>
                            </Col>
                        </Col>
                    </Stack></Col>
                    <Col><Stack direction="vertical" bg="white" className="text-center
                        p-2 border-1 border-dark border bg-white rounded-2">
                        <Col>
                            <img
                                src={dog3}
                                width="90%"
                                className="d-inline-block align-middle rounded-2"
                                alt="акции"
                            />
                        </Col>
                        <Col>
                                <span className="ms-3 d-flex fw-bold">
                                    Чикен сладкий чили
                                </span>
                            <span className="text-md-start">
                                    Курица, Лук, Перец Халапеньо, Сыр Моцарелла
                                </span>
                            <Col>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Button
                                        className="ms-3"
                                        variant="warning">
                                        Выбрать
                                    </Button>
                                    <span style={{color: "#FF8C00"}}>
                                           350.00 руб.
                                       </span>
                                </div>
                            </Col>
                        </Col>
                    </Stack></Col>
                </Row>
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="mt-4">
                    <Accordion.Header><h5>О нашей доставке</h5></Accordion.Header>
                    <Accordion.Body className="align-items-center">
                        <h6>Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не
                        то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто!
                        Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza
                        есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий
                        ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и
                        любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы
                            вкусное и ароматное блюдо не успевало остыть.</h6>

                        <h6>Как сделать заказ
                        Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть
                        Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу
                        онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в
                        «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из
                        ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!</h6>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </Container>
        </>
    )
        ;
};
