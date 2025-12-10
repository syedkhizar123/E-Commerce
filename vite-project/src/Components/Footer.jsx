import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export const Footer = () => {
    return (
        <>
            <Container className="mt-5">
                <Row className="mt-5 mb-5">
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-5">
                        <div>
                            <h3 className="text-center mb-3">Subscribe now & get 20% off!</h3>
                            <h6 className="text-center text-secondary text-red-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  assumenda vero doloribus.</h6>
                            <div className="flex text-center justify-center ">
                                <input className="border border-grey-300 h-12 w-[300px] mt-3 pl-3" type="email" placeholder="Enter your email" />
                                <button className=" text-white bg-black h-12 mt-3 w-[150px]"> Subscribe</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                        <h3 className="mt-5">EASYWEAR</h3>
                        <p className="mt-4 w-[85%] text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum saepe, ex debitis voluptatum, culpa eligendi, voluptate laudantium dicta non incidunt facilis animi! Minus tempora ipsum beatae voluptatum optio ipsa.</p>
                    </Col>
                    <Col className="mt-5 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 px-3">
                        <Row>
                            <Col className="col-12 col-sm-12 col-md-6">
                                <div className="mt-3">
                                    <div>
                                        <h5 className="mb-4">COMPANY</h5>
                                        <div className="flex flex-col gap-1 text-secondary">
                                            <span>Home</span>
                                            <span>About Us</span>
                                            <span>Delivery</span>
                                            <span>Privacy policy</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                              <Col className="col-12 col-sm-12 col-md-6">
                                <div className="mt-3">
                                    <div>
                                        <h5 className="mb-4">GET IN TOUCH</h5>
                                        <div className="flex flex-col gap-1 text-secondary">
                                            <span>+92 334 1463 543</span>
                                            <span>easywear@gmail.com</span>
                                            <span>Instagram</span>
                                           
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                    <hr className="text-black my-5" />
                    <p className="mt-2 text-black  text-center">Copyright 2025@easywear-All rights reserved.</p>
                </Row>
            </Container>
        </>
    )
}