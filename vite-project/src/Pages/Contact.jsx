import { Col, Container, Row } from "react-bootstrap"

export const Contact = () => {
    return (
        <>
     
            <div className="w-[90%] mx-[auto] flex flex-col sm:flex-col md:flex-row justify-center gap-[50px]">
                <div>
                    <img className="w-full md:max-w-[480px]" src="https://foreverbuy.in/assets/contact_img-CyOum2vk.png" alt="" />
                </div>
                <div className="flex align-items-center">
                     <div className="flex flex-col mt-2 sm:mt-2 md:mt-0">
                            <p className="text-gray-800 text-2xl font-semibold my-2">Our Store</p>
                            <div className="flex flex-col space-between my-2">
                                <span className="text-gray-500">54709 Willms Station</span>
                                <span className="text-gray-500 ">Suite 350, Washington, USA</span>
                            </div>
                            <div className="flex flex-col my-2">
                                <span className="text-gray-500">Tel: (415) 555-0132</span>
                                <span className="text-gray-500">Email: admin@forever.com</span>
                            </div>
                            <p className="text-gray-800 text-2xl font-semibold my-2">Careers at Easywear</p>
                            <span className="text-gray-500 my-2">
                                Learn more about our teams and job openings.
                            </span>
                            <button className="bg-white text-black border-1 border-black-200 w-[150px] py-3 my-2">
                                Explore Jobs
                            </button>

                        </div>
                </div>
            </div>
        </>
    )
}