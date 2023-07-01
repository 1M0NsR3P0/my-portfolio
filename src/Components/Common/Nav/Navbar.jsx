const Navbar = () => {
    const downloadcv = ()=>{

            const cvUrl = "resume_of_nurul_absar.pdf";
            const link = document.createElement("a");
            link.href = cvUrl;
            link.download = "resume_of_nurul_absar.pdf";
            link.click();
          
    }
    return (
        <div className="fixed mt-0 z-[100] bg-blur bg-slate-400 w-full">
            <div className="h-[80px] flex justify-center items-center">
            <div className="flex justify-between items-center gap-10">
                <div className="text-gray-300 font-serif">
                Nurul Absar imon
                </div>
                <div>
                    <button className="btn btn-primary" onClick={downloadcv}>
                        Download CV
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;