import React, { useEffect, useState } from 'react';
import './Card.css'

const Projects = () => {
    const [isMobile, setMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
      const handleResize = () => {
        setMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <>
            { isMobile?
                <div className='pt-20'>
                    <div className='text-blue-200'>
                        My Recent Projects
                    </div>
                    <div className='myCard'>
                        <div className='myCard-img-container overflow-hidden'>
                            <img className='myCard-img' src="/project2.png" alt="website pic" />
                        </div>
                        <div className='myCard-body'>
                            <div className='flex justify-between'>
                                <h1 className='text-xl text-left'><a href="">Perfect-Shot</a></h1>
                                <ul className='flex gap-2 '>
                                    <li className='myCard-links'><a href="https://github.com/1M0NsR3P0/perfe3ct-shot">client</a></li>
                                    <li className='myCard-links'><a href="https://github.com/1M0NsR3P0/perfect-shot-server">server</a></li>
                                    <li className='myCard-links'><a href="https://perfect-shots.web.app/">Live</a></li>
                                </ul>
                            </div>
                            <div><p className='text-sm text-slate-400 text-left my-1'>
                                THis is a Online Course learning platform, where Students can learn and instructors and teach Photography.</p></div>
                            <div>
                                <h1 className='text-left text-lg'>technologies used:</h1>
                                <ul className='grid grid-cols-4 justify-start gap-x-2 gap-y-4 my-1 u'>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/react-native-firebase-1-logo-png-transparent.png" alt="" />Firebase</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/express-js.png" alt="" />ExpressJs</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/images.jpeg" alt="" />Mongodb</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/daisyui-logomark-1024-1024.png" alt="" />Daisyui</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/atom.png" alt="" />React</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/logo.png" alt="" />Mui</li>
                                </ul>
                                <div className='text-end my-2'>
                                    <button className='btn-outline btn btn-info btn-sm absolute bottom-5 right-0'>Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='myCard'>
                        <div className='myCard-img-container overflow-hidden'>
                            <img className='myCard-img' src="/project3.png" alt="website pic" />
                        </div>
                        <div className='myCard-body'>
                            <div className='flex justify-between'>
                                <h1 className='text-xl text-left'><a href="">Cute-Cars</a></h1>
                                <ul className='flex gap-2 '>
                                    <li className='myCard-links'><a href="https://github.com/1M0NsR3P0/perfe3ct-shot">client</a></li>
                                    <li className='myCard-links'><a href="https://github.com/1M0NsR3P0/perfect-shot-server">server</a></li>
                                    <li className='myCard-links'><a href="https://perfect-shots.web.app/">Live</a></li>
                                </ul>
                            </div>
                            <div><p className='text-sm text-slate-400 text-left my-1'>
                                This is a Toy Shop for kids. WHere User can easily buy a toy with toy categories. </p></div>
                            <div>
                                <h1 className='text-left text-lg'>technologies used:</h1>
                                <ul className='grid grid-cols-4 justify-start gap-x-2 gap-y-4 my-1 u'>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/react-native-firebase-1-logo-png-transparent.png" alt="" />Firebase</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/express-js.png" alt="" />ExpressJs</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/images.jpeg" alt="" />Mongodb</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/daisyui-logomark-1024-1024.png" alt="" />Daisyui</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/logo.png" alt="" />Mui</li>
                                </ul>
                                <div className='text-end my-2'>
                                    <button className='btn-outline btn btn-info btn-sm'>Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='myCard'>
                        <div className='myCard-img-container overflow-hidden'>
                            <img className='myCard-img' src="/project1.png" alt="website pic" />
                        </div>
                        <div className='myCard-body'>
                            <div className='flex justify-between'>
                                <h1 className='text-xl text-left'><a href="">Deshi-Khabar</a></h1>
                                <ul className='flex gap-2 '>
                                    <li className='myCard-links'><a href="https://github.com/1M0NsR3P0/perfe3ct-shot">client</a></li>
                                    <li className='myCard-links'><a href="https://github.com/1M0NsR3P0/perfect-shot-server">server</a></li>
                                    <li className='myCard-links'><a href="https://perfect-shots.web.app/">Live</a></li>
                                </ul>
                            </div>
                            <div><p className='text-sm text-slate-400 text-left my-1'>
                                THis is a online resturant where user can find their selected recipe to order and learn about recipe ingredients with their selected chef. user can order food online. and so on...</p></div>
                            <div>
                                <h1 className='text-left text-lg'>technologies used:</h1>
                                <ul className='grid grid-cols-4 justify-start gap-x-2 gap-y-4 my-1 u'>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/react-native-firebase-1-logo-png-transparent.png" alt="" />Firebase</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/express-js.png" alt="" />ExpressJs</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/images.jpeg" alt="" />Mongodb</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/daisyui-logomark-1024-1024.png" alt="" />Daisyui</li>
                                </ul>
                                <div className='text-end my-2'>
                                    <button className='btn-outline btn btn-info btn-sm'>Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className='pt-20  '>
                    <div className='text-blue-200 mx-[150px] my-5 text-2xl'>
                        My Recent Projects
                    </div>
                    <div className='flex gap-10 mx-[150px]'>
                    <div className='myCard flipper'>
                        <div className='myCard-img-container overflow-hidden'>
                            <img className='myCard-img' src="/project2.png" alt="website pic" />
                        </div>
                        <div className='myCard-body'>
                            <div className='flex justify-between p-5'>
                                <h1 className='text-xl text-left'><a href="">Perfect-Shot</a></h1>
                                <ul className='flex gap-2 '>
                                    <li className='myCard-links '><a target="blank" href="https://github.com/1M0NsR3P0/perfe3ct-shot">client</a></li>
                                    <li className='myCard-links '><a target="blank" href="https://github.com/1M0NsR3P0/perfect-shot-server">server</a></li>
                                    <li className='myCard-links '><a target="blank" href="https://perfect-shots.web.app/">Live</a></li>
                                </ul>
                            </div>
                            <div><p className='text-sm px-5 text-slate-100 text-left my-1'>
                                THis is a Online Course learning platform, where Students can learn and instructors and teach Photography.</p></div>
                            <div className='px-5'>
                                <h1 className='text-left text-lg'>technologies used:</h1>
                                <ul className='grid grid-cols-4 justify-start gap-x-2 gap-y-4 my-1 u'>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/react-native-firebase-1-logo-png-transparent.png" alt="" />Firebase</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/express-js.png" alt="" />ExpressJs</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/images.jpeg" alt="" />Mongodb</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/daisyui-logomark-1024-1024.png" alt="" />Daisyui</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/atom.png" alt="" />React</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/logo.png" alt="" />Mui</li>
                                </ul>
                                <div className='text-end my-2'>
                                    <button className='btn-outline btn btn-info btn-sm absolute bottom-5 right-0'>Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='myCard flipper'>
                        <div className='myCard-img-container overflow-hidden'>
                            <img className='myCard-img' src="/project3.png" alt="website pic" />
                        </div>
                        <div className='myCard-body'>
                            <div className='flex justify-between p-5'>
                                <h1 className='text-xl text-left'><a href="">Cute-Cars</a></h1>
                                <ul className='flex gap-2 '>
                                    <li className='myCard-links '><a target="blank" href="https://github.com/1M0NsR3P0/perfe3ct-shot">client</a></li>
                                    <li className='myCard-links '><a target="blank" href="https://github.com/1M0NsR3P0/perfect-shot-server">server</a></li>
                                    <li className='myCard-links '><a target="blank" href="https://perfect-shots.web.app/">Live</a></li>
                                </ul>
                            </div>
                            <div><p className='text-sm px-5 text-slate-100 text-left my-1'>
                                This is a Toy Shop for kids. WHere User can easily buy a toy with toy categories. </p></div>
                            <div className='px-5'>
                                <h1 className='text-left text-lg'>technologies used:</h1>
                                <ul className='grid grid-cols-4 justify-start gap-x-2 gap-y-4 my-1 u'>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/react-native-firebase-1-logo-png-transparent.png" alt="" />Firebase</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/express-js.png" alt="" />ExpressJs</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/images.jpeg" alt="" />Mongodb</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/daisyui-logomark-1024-1024.png" alt="" />Daisyui</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/logo.png" alt="" />Mui</li>
                                </ul>
                                <div className='text-end my-2'>
                                    <button className='btn-outline btn btn-info btn-sm absolute bottom-5 right-0'>Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='myCard flipper'>
                        <div className='myCard-img-container overflow-hidden'>
                            <img className='myCard-img' src="/project1.png" alt="website pic" />
                        </div>
                        <div className='myCard-body'>
                            <div className='flex justify-between p-5'>
                                <h1 className='text-xl text-left'><a href="">Deshi-Khabar</a></h1>
                                <ul className='flex gap-2 '>
                                    <li className='myCard-links '><a target="blank" href="https://github.com/1M0NsR3P0/perfe3ct-shot">client</a></li>
                                    <li className='myCard-links '><a target="blank" href="https://github.com/1M0NsR3P0/perfect-shot-server">server</a></li>
                                    <li className='myCard-links '><a target="blank" href="https://perfect-shots.web.app/">Live</a></li>
                                </ul>
                            </div>
                            <div><p className='text-sm px-5 text-slate-100 text-left my-1'>
                                THis is a online resturant where user can find their selected recipe to order and learn about recipe ingredients with their selected chef. user can order food online. and so on...</p></div>
                            <div className='px-5'>
                                <h1 className='text-left text-lg'>technologies used:</h1>
                                <ul className='grid grid-cols-4 justify-start gap-x-2 gap-y-4 my-1 u'>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/react-native-firebase-1-logo-png-transparent.png" alt="" />Firebase</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/express-js.png" alt="" />ExpressJs</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/images.jpeg" alt="" />Mongodb</li>
                                    <li className='border p-2 rounded-[20px] text-xs flex-col justify-center flex items-center'><img className='w-[32px] bg-slate-400 rounded-lg' src="/icon/daisyui-logomark-1024-1024.png" alt="" />Daisyui</li>
                                </ul>
                                <div className='text-end my-2'>
                                    <button className='btn-outline btn btn-info btn-sm absolute bottom-5 right-0'>Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            }
        </>
    );
};

export default Projects;