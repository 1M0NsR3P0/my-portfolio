import { useEffect, useState } from "react";

const Navbar = () => {
    const [isMobile,setMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
          setMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    const downloadcv = ()=>{

            const cvUrl = "resume_of_nurul_absar.pdf";
            const link = document.createElement("a");
            link.href = cvUrl;
            link.download = "resume_of_nurul_absar.pdf";
            link.click();
          
    }
    return (
        <div>
            { isMobile?
                <div className="fixed top-0 mt-0 z-[100] w-full blurme">
                <div className="h-[80px] flex justify-center items-center">
                <div className="flex justify-between items-center gap-10">
                    <div className="text-gray-300 font-serif">
                    <img src="/logo.png" alt="" className="w-full ml-5" />
                    </div>
                    <div className="mr-3">
                        <button className="myButton btn-info btn  font-serif text-white" onClick={downloadcv}>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
            </div>
            :
            <>

                <div className=" fixed mt-0 top-0 h-[80px] z-[100] w-full blurme flex justify-center items-center">
                <div className=" justify-around gap-10 h-[80px] z-[100] w-full blurme flex  items-center">
                    <div className="text-gray-900 font-serif">
                    <img src="/logo.png" alt="" className="w-full" />
                    </div>
                    <div>
                        <button className="myButton btn  font-serif text-white" onClick={downloadcv}>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
            </>
            }
        </div>
    );
};

export default Navbar;