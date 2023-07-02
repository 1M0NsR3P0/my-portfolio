import React, { useContext, useEffect, useState } from 'react';
import { Fab, Button } from '@mui/material';
import { ArrowDownward, ArrowUpward, Article, ContactMail, HomeMax, HomeMaxTwoTone, PanoramaFishEyeSharp, Person, VisibilityOff, VisibilityOutlined } from '@mui/icons-material';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../Common/Nav/Navbar';
import './Home.css'
import { DarkModeContext } from '../../Utilities/DarkmodeContext';


const Home = () => {
  const [isButtonListOpen, setIsButtonListOpen] = useState(false);
  const [isTrayOpen, setTrayOpen] = useState(false)
  const [isDarkMode,setDarkmode] = useState(localStorage.getItem('mode')?localStorage.getItem('mode'):true)
  const navigate = useNavigate(null)
  const [shouldBounch, setBounch] = useState(true)
  const [isMobile, setMobile] = useState(window.innerWidth < 768);


  localStorage.setItem('mode',true)
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
  const {darkMode,toggleDarkMode} = useContext(DarkModeContext)



  useEffect(() => {
    localStorage.setItem('mode', isDarkMode.toString());
  }, [isDarkMode, toggleDarkMode]);
  
  const manageDarkMode = ()=>{
    toggleDarkMode()
  }
  
  return (


    <div className={`w-full bg-fixed bg-no-repeat bg-cover overflow-x-hidden
    ${isMobile ? 'flex items-center justify-center' : ''}
        ${isMobile ? 'bg-left bg-[url("/bg4.png")]' : 'bg-center bg-[url("/bg8.png")]'}
        min-h-screen text-white`}>
      {isMobile ? (
        <div className='w-full'>

          <div className='w-full '>
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
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/')} className='w-[100px] btnBg myButton flex flex-col '>
                      <span className=''>
                        Home
                      </span>
                      <HomeMax></HomeMax>
                    </Button>
                  </div>
                  <div className='' >
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/services')} className='w-[100px] btnBg myButton flex flex-col '>
                      <span className=''>
                        Services
                      </span>
                      <HomeRepairServiceIcon />
                    </Button>
                  </div>
                  <div className='' >
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/projects')} className='w-[100px] btnBg myButton flex flex-col '>
                      <span className=''>
                        Projects
                      </span>
                      <AccountTreeOutlinedIcon />
                    </Button>
                  </div>
                  <div className=''>
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/About')} className='w-[100px] btnBg myButton flex flex-col '>
                      <span className=''>
                        About
                      </span>
                      <Article></Article>
                    </Button>
                  </div>
                  <div className=''>
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/contact')} className='w-[100px] btnBg myButton flex flex-col '>
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
                className={`${shouldBounch ? 'button-bouncy myButton btnBg' : 'myButton btnBg'}`}
              >
                {!isButtonListOpen ? <ArrowUpward /> : <ArrowDownward />}
              </Fab>
            </div>
          </div>
        </div>
      ) : (
        <div className=''>
          <div>
            <div className=''>
              <div>
                <Navbar />
              </div>
              <div>
                <Outlet />
              </div>
            </div>
            <div className=''>
              <div className=' fixed bottom-[0] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-row items-center gap-4'>
                  <div className='' >
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/')} className='w-[100px] myButton flex flex-col '>
                      <span className=''>
                        Home
                      </span>
                      <HomeMax></HomeMax>
                    </Button>
                  </div>
                  <div className='' >
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/services')} className='w-[100px] myButton flex flex-col '>
                      <span className=''>
                        Services
                      </span>
                      <HomeRepairServiceIcon />
                    </Button>
                  </div>
                  <div className='' >
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/projects')} className='w-[100px] myButton flex flex-col '>
                      <span className=''>
                        Projects
                      </span>
                      <AccountTreeOutlinedIcon />
                    </Button>
                  </div>
                  <div className=''>
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/About')} className='w-[100px] myButton flex flex-col '>
                      <span className=''>
                        About
                      </span>
                      <Article></Article>
                    </Button>
                  </div>
                  <div className=''>
                    <Button variant="contained" color="primary" onClick={() => navigatorToggle('/contact')} 
                    className='w-[100px] myButton flex flex-col myButton' >
                      <span className=''>
                        Contact
                      </span>
                      <ContactMail></ContactMail>
                    </Button>
                  </div>
                  <div className=''>
                    <Button variant="contained" color="primary" onClick={manageDarkMode} 
                    className='w-[100px] myButton flex flex-col myButton' >
                      <span className=''>
                        DarkMode
                      </span>
                      {
                        isDarkMode?<VisibilityOff/>:<VisibilityOutlined/>
                      }
                    </Button>
                  </div>
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


