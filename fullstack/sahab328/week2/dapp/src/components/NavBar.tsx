import { ConnectButton } from "@mysten/dapp-kit";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-600 shadow-md h-16">
            <div className="text-xl font-bold text-white hover:cursor-pointer"
                onClick={() => navigate('/')}
            >   
            Manager
            </div>
            <div>
            <ConnectButton />
            </div>
        </header>
    );
}

export default NavBar;