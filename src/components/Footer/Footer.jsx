import {Stack, Col, Container, Navbar} from 'react-bootstrap';
import React from "react";
import doge from "../../Assets/imgs/doge.png";
import inst from "../../Assets/imgs/Inst.png";
import fbk from "../../Assets/imgs/fbk.png";
import mapMark from "../../Assets/imgs/mapMark.png";
import phone from "../../Assets/imgs/phone.png";


export const Footer = () => {
    return (
        <>
            <Navbar bg="white" expand="sm" className="mt-4">
                <Container>
                    <Stack direction="horizontal" style={{width: "100%"}}>
                        <Col>
                            <div className="mt-4 d-flex align-items-center ">
                                <img
                                    src={doge}
                                    width="60"
                                    height="60"
                                    className="d-inline-block align-middle"
                                    alt="doge"
                                />
                                <h5 style={{color: "#FF8C00"}}>Shibanya</h5>
                            </div>
                            <span className="d-flex mt-lg-5">© Copyright 2021 — Куда Пицца</span>
                        </Col>
                        <Col>
                            <div className="anone">
                                <h5 className="ms-4">Куда пицца</h5>
                                <ul style={{listStyle: "none"}}>
                                    <li><a href="#">О компании</a></li>
                                    <li><a href="#">Пользовательское соглашение</a></li>
                                    <li><a href="#">Условия гарантии</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="anone">
                                <h5 className="ms-4">Помощь</h5>
                                <ul style={{listStyle: "none"}}>
                                    <li><a href="#">Ресторан</a></li>
                                    <li><a href="#">Контакты</a></li>
                                    <li><a href="#">Поддержка</a></li>
                                    <li><a href="#">Отследить заказ</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="anone">
                                <h5 className="ms-4">Контакты</h5>
                                <ul style={{listStyle: "none"}}>
                                    <li>
                                        <div className="mt-4 d-flex align-items-center ">
                                            <img
                                                src={phone}
                                                width="25"
                                                height="25"
                                                className="d-inline-block align-middle"
                                                alt="phone"
                                            /><a className="ms-3" href="#">+7 (926) 223-10-11
                                        </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mt-4 d-flex align-items-center ">
                                            <img
                                                src={mapMark}
                                                width="20"
                                                height="25"
                                                className="d-inline-block align-middle"
                                                alt="mark"
                                            />
                                            <a className="ms-3" href="#">Москва, ул. Юных Ленинцев, д.99
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mt-4 d-flex align-items-center ">
                                            <img
                                                src={fbk}
                                                width="25"
                                                height="25"
                                                className="d-inline-block align-middle"
                                                alt="mark"
                                            />
                                            <a className="ms-3" href="#">Facebok</a>
                                            <a className="ms-3" href="#">
                                                <img
                                                    src={inst}
                                                    width="25"
                                                    height="25"
                                                    className="d-inline-block align-middle"
                                                    alt="mark"
                                                />
                                                Instagram</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Stack>
                </Container>
            </Navbar>
            < />

            )
            ;
            }

