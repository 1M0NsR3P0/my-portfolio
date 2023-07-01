import React, { useState } from 'react';
import AOS from 'aos';

const About = () => {
    const [isMobile, setMobile] = useState(window.innerWidth < 768);
    AOS.init();
    return (
        <>
            <div className='text-white text-left mt-16'>
                {
                    isMobile ?
                        <div >
                            <div
                                data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                className='text-4xl py-5 text-blue-500'>
                                Let's Know About Me
                            </div>
                            <div
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                className='font-serif opacity-[80%] font-extralight'>
                                My Name is Nurul Absar (imon). I have honed my skills in frontend technologies and web development, mastering JavaScript, React JS, Firebase, Node JS, Express JS, and other relevant tools. With a strong passion for learning and staying up-to-date, I excel in challenging environments and consistently exceed expectations. Additionally, my educational background in Business Studies provides a unique perspective on the convergence of business and technology. I am confident in my ability to deliver value and contribute to the success of your team. I would appreciate the opportunity for a formal interview to discuss further. Thank you for considering my application, and I look forward to hearing from you soon.
                            </div>
                            <div className='text-purple-500'>
                                <ul className='flex justify-center items-center gap-2 p-5'>
                                    <li
                                        data-aos="flip-right"
                                        data-aos-duration="2000"
                                        data-aos-mirror="true"
                                        data-aos-once="false"
                                        className='border-blue-400 border px-6 flex justify-center items-center flex-col py-3'>Front End Developer <img src="/public/icon/atom (1).png" alt="" className='w-[64px] p-2' /></li>
                                    <li
                                        data-aos="flip-left"
                                        data-aos-duration="2000"
                                        data-aos-mirror="true"
                                        data-aos-once="false"
                                        className='border-blue-400 border px-6 flex justify-center items-center flex-col py-3'>Basic PhotoShop <img src="/public/icon/photoshop-express.png" alt="" className='w-[64px] p-2' /></li>
                                    <li
                                        data-aos="flip-up"
                                        data-aos-duration="2000"
                                        data-aos-mirror="true"
                                        data-aos-once="false"
                                        className='border-blue-400 border px-6 flex justify-center items-center flex-col py-3'>Problem Solver <img src="/public/icon/idea.png" alt="" className='w-[64px] p-2' /></li>
                                </ul>
                            </div>
                            <div className='text-2xl text-center text-yellow-400'>Contact Me Here</div>
                            <ul className='flex justify-center items-center gap-3 my-2'>
                                <li
                                    data-aos="flip-up"
                                    data-aos-duration="2000"
                                    data-aos-mirror="true"
                                    data-aos-once="false"
                                    className='bg-blue-400 w-[64px] p-1 m-1'><a target='blank' href="https://www.facebook.com/naimon.chy"><img src="/public/icon/facebook-logo.png" alt="" /></a></li>
                                <li
                                    data-aos="flip-up"
                                    data-aos-duration="2000"
                                    data-aos-mirror="true"
                                    data-aos-once="false"
                                    className='bg-blue-400 w-[64px] p-1 m-1'><a target='blank' href="https://www.instagram.com/n_a_imon/"><img src="/public/icon/instagram.png" alt="" /></a></li>
                                <li
                                    data-aos="flip-up"
                                    data-aos-duration="2000"
                                    data-aos-mirror="true"
                                    data-aos-once="false"
                                    className='bg-blue-400 w-[64px] p-1 m-1'><a target='blank' href="https://www.linkedin.com/in/nurul-absar-imon-a9203424a/"><img src="/public/icon/linkedin.png" alt="" /></a></li>
                                <li
                                    data-aos="flip-up"
                                    data-aos-duration="2000"
                                    data-aos-mirror="true"
                                    data-aos-once="false"
                                    className='bg-blue-400 w-[64px] p-1 m-1'><a target='blank' href="https://github.com/1M0NsR3P0?tab=repositories"><img src="/public/icon/github.png" alt="" /></a></li>
                            </ul>
                            <div className='my-5 py-5'>
                                <div data-aos="fade-right" className='text-2xl text-leftpy-3'>
                                    Education and Experiences
                                </div>
                                <div className='py-3'>
                                    <h2 data-aos="fade-up" className='font-mono'>Higher Secondary School<span className='font-mono text-xs text-gray-500'> (2014-2016)</span></h2>
                                    <p data-aos="fade-right-up" className='font-sans text-gray-400'>Hathazari University College, Bangladesh</p>
                                </div>
                                <div className='py-3'>
                                    <h2 data-aos="fade-down" className='font-mono'>BBA (Accounting) <span className='font-mono text-xs text-gray-500'> (2016-running)</span></h2>
                                    <p data-aos="fade-left-up" className='font-sans text-gray-400'>National University Of Bangladesh</p>
                                </div>
                                <div>
                                    Experiences:
                                </div>
                                <div className='text-gray-600'>
                                    No Professional Experiences Yet.
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div>
                                if this is a pc
                            </div>
                        </div>
                }
            </div>
        </>
    );
};

export default About;