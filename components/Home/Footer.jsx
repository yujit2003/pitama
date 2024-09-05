import React from 'react';
import scrollHome from "../../images/scrollHome.webp";

const Footer = () => {
    return (
        <div className="mk-page-section-inner relative mt-6">
            <div className="background-clipper">
                <div className="background-layer-holder">
                    {/* Use inline styles to set background image */}
                    <div
                        className="relative h-[100vh] bg-cover bg-center bg-fixed w-full"
                        style={{
                            backgroundImage: `url(${scrollHome.src})`,
                        }}
                    >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full h-auto shadow-lg flex items-center justify-center p-10 md:p-16">
                            <div className="text-center">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <h1 className="text-[26px] text-[#b1cc39] flex justify-center items-center font-medium normal-case">
                                        Get in Touch
                                    </h1>
                                    <div>
                                        <div className="flex justify-center items-center mb-2 md:mb-0">
                                            <svg className="mk-svg-icon w-8 pb-2" data-name="mk-moon-location-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="#FFD700" d="M256 480c-88.366 0-160-71.634-160-160 0-160 160-352 160-352s160 192 160 352c0 88.366-71.635 160-160 160zm0-258c-54.124 0-98 43.876-98 98s43.876 98 98 98 98-43.876 98-98-43.876-98-98-98zm-62 98a62 62 1260 1 0 124 0 62 62 1260 1 0-124 0z" transform="scale(1 -1) translate(0 -480)"></path>
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            220 Milner Ave<br />
                                            Toronto<br />
                                            ON M1S 3R1
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center mb-2 md:mb-0">
                                            <svg className="mk-svg-icon w-8 pb-2" data-name="mk-moon-phone-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="#FFD700" d="M321.788 371.146c-11.188 6.236-20.175 2.064-32.764-4.572-11.46-8.748-45.402-35.438-81.226-71.188-26.156-33.084-46.162-64.288-55.375-79.293-.625-1.66-.944-2.632-.944-2.632-5.397-13.476-8.771-22.92-1.324-33.521 6.854-9.727 9.5-12.383 18.24-20.108l-87.79-130.124c-10.604 7.728-27.018 25.106-40.509 44.378-12.538 18.317-23.154 38.587-26.049 53.055 15.295 55.117 52.258 157.896 120.583 231.325l-.021.308c65.73 81.028 170.165 131.43 225.571 153.226 14.679-1.385 35.938-9.844 55.456-20.404 20.598-11.415 39.567-25.945 48.329-35.685l-120.288-100.829c-8.597 7.91-11.498 10.254-21.889 16.064zm-116.178-242.488c7.241-5.302 5.313-14.944 1.926-20.245l-66.579-101.913c-4.344-5.291-13.396-8.064-21.252-5.579l-27.433 18.381 88.034 129.879 25.304-20.523zm287.339 269.188l-94.473-76.788c-4.93-3.918-14.313-6.838-20.325-.188l-23.046 23.05 120.047 101.015 21.136-25.357c3.285-7.564 1.467-16.857-3.339-21.732z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            Phone<br />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center mb-2 md:mb-0">
                                            <svg className="mk-svg-icon w-8 pb-2" data-name="mk-li-mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="#FFD700" d="M460.038 75.505h-408.076c-26.003 0-47.086 21.083-47.086 47.086v266.818c0 26.002 21.082 47.086 47.086 47.086h408.075c26.002 0 47.086-21.083 47.086-47.086v-266.818c0-26.003-21.083-47.086-47.085-47.086zm11.908 324.001l-128.703-128.708 132.49-132.489v251.1c0 3.862-1.457 7.357-3.787 10.097zm-435.679-10.097v-251.039l131.493 131.497-128.581 128.581c-1.824-2.56-2.912-5.667-2.912-9.039zm153.688-97.352l39.138 39.138c7.173 7.181 16.722 11.135 26.876 11.135s19.703-3.954 26.876-11.135l38.203-38.204 112.104 112.112h-356.237l113.04-113.046zm270.083-185.161c.843 0 1.663.122 2.467.249l-201.854 201.857c-1.686 1.69-3.655 1.938-4.682 1.938-1.027 0-2.997-.249-4.683-1.938l-201.845-201.854c.827-.13 1.655-.253 2.522-.253h408.075z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            Email:<br />
                                            pitamafoods@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
