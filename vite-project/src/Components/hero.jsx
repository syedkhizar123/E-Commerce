import React from "react"
import { Col, Row } from "react-bootstrap"
import hero from "../assets/hero.jpg"

export const Hero = () => {
    return(
        <>
            <div className=" border-1 border-black mx-auto  mt-5 mb-5 w-[95%] max-w-[1320px]">
                <Row className="w-[100%] mx-auto">
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-0 text-center flex items-center">
                        <div className="flex flex-col  items-center mx-[auto] my-5 lg:my-2">
                            <h5 className="my-1 lg:my-2">--- OUR BEST SELLERS</h5>
                            <h1 className="my-1 lg:my-2 ">LATEST ARRIVALS</h1>
                            <h5 className="my-1 lg:my-2">SHOP NOW ---</h5>
                        </div>
                    </Col>
                     <Col className="w-[100%] col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 flex p-0 ">
                        <img className="h-[400px] sm:h-[500px] w-[100%] mx-auto"  src={hero} />
                    </Col>
                </Row>    
            </div>


         

        </>
    )
}