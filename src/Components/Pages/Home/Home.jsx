import React, { useEffect, useState } from 'react';
import { Fab, Button } from '@mui/material';
import { ArrowDownward, ArrowUpward, Article, ContactMail, HomeMax, HomeMaxTwoTone, Person } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../Common/Nav/Navbar';
import './Home.css'

const Home = () => {
  const [isButtonListOpen, setIsButtonListOpen] = useState(false);
  const [isTrayOpen, setTrayOpen] = useState(false)
  const [isMobile, setMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate(null)
  const [shouldBounch,setBounch] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleButtonList = () => {
    setIsButtonListOpen(!isButtonListOpen);
    setBounch(isButtonListOpen)
  };
  const navigatorToggle = (route) => {
    navigate(route)
    setTrayOpen(true)
  }
  // bg-gradient-to-b from-blue-900 to-black 
  {/* all other contents */ }
  return (


    <div className={`w-full 
        
        bg-fixed
        bg-no-repeat
        bg-cover
        ${isMobile?'bg-left bg-[url("bg4.png")]':'bg-center bg-[url("bg8.png")]'}
        min-h-screen flex items-center justify-center text-white`}>
      {isMobile ? (
        <div className='w-full'>

          <div className='w-full absolute top-0 '>
            <Navbar></Navbar>
          </div>
          <div className='w-[80%] text-center mx-auto'>
            <Outlet></Outlet>
          </div>
          <div>
            <div className='fixed bottom-[2%] left-[85%] transform -translate-x-1/2 -translate-y-1/2'>
              {isButtonListOpen && <div className='fixed bottom-[-100px] left-[40%] transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col items-center gap-2'>
                  <div className='' >
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/')} className='w-[100px] flex flex-col '>
                      <span className=''>
                        Home
                      </span>
                      <HomeMax></HomeMax>
                    </Button>
                  </div>
                  <div className='' >
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/skills')} className='w-[100px] flex flex-col '>
                      <span className=''>
                        Skills
                      </span>
                      <HomeMax></HomeMax>
                    </Button>
                  </div>
                  <div className='' >
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/projects')} className='w-[100px] flex flex-col '>
                      <span className=''>
                        Projects
                      </span>
                      <Person></Person>
                    </Button>
                  </div>
                  <div className=''>
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/About')} className='w-[100px] flex flex-col '>
                      <span className=''>
                        About
                      </span>
                      <Article></Article>
                    </Button>
                  </div>
                  <div className=''>
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/contact')} className='w-[100px] flex flex-col '>
                      <span className=''>
                        Contact
                      </span>
                      <ContactMail></ContactMail>
                    </Button>
                  </div>
                </div>
              </div>}
              <Fab
                color="primary"
                aria-label="scroll-to-top"
                onClick={toggleButtonList}
              className={`${shouldBounch?'button-bouncy':''}`}
              >
                {!isButtonListOpen ? <ArrowUpward /> : <ArrowDownward />}
              </Fab>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <div className='fixed bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-row items-center gap-4'>
                  <Button variant="contained" color="primary">
                    Button 1
                  </Button>
                  <Button variant="contained" color="primary">
                    Button 2
                  </Button>
                  <Button variant="contained" color="primary">
                    Button 3
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>


  );
};

export default Home;