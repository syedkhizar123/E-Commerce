import { Col, Container, Row } from "react-bootstrap"

export const About = () => {
    return (
        <>
            <Container className="my-5">
                <Row className="">
                    <Col className="col-12 col-sm-12 col-md-6 flex ">
                        <img src="https://foreverbuy.in/assets/about_img-BAJyTXw9.png" />
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-6 flex flex-col items-center justify-center ">
                        <div className="flex flex-col gap-3 mt-4 md:mt-0">
                            <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                            <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers</p>
                            <p className="font-semibold">Our Mission</p>
                            <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <Row className="mt-5">
                    <div className="mt-3 mb-5">
                        <h1 className="text-center ">WHY CHOOSE US ---</h1>
                    </div>
                    <Col className="col-12 col-sm-12 col-md-4 flex justify-center p-5 border  flex-col border-grey-200">
                        <p className=" font-bold ">Quality Assurance:</p>
                        <p className=" text-grey-600 text-sm ">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                    </Col>
                     <Col className="col-12 col-sm-12 col-md-4 flex justify-center p-5 border flex-col  border-grey-200">
                        <p className=" font-bold">Convenience:</p>
                        <p className=" text-grey-600 text-sm">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                    </Col>
                     <Col className="col-12 col-sm-12 col-md-4 flex  justify-center p-5 border flex-col  border-grey-200">
                        <p className="text-start  font-bold">Exceptional Customer Service:</p>
                        <p className=" text-grey-600 text-sm">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}