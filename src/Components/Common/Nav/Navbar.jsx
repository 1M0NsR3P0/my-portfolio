const Navbar = () => {
    return (
        <div className="h-[80px] flex justify-center items-center">
            <div className="flex justify-between items-center gap-10">
                <div className="text-gray-300">
                Nurul Absar's Portfolio
                </div>
                <div>
                    <button className="btn btn-primary">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;