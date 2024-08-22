
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import Sidebar from "./NewSidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function MainLayout() {
    const [controller,] = useMaterialTailwindController();
    const [isOpened, setIsOpened] = useState(true);

    const handleChildData = (data) => {
        setIsOpened(data);
    };

    return (
        <div className="min-h-screen bg-blue-gray-50/50" style={{ paddingTop: "5%" }}>
            <Sidebar sendDataToParent={handleChildData}/>
            <div className={`pt-4 pr-4 ${isOpened ? "xl:ml-80" : "xl:ml-36"}`}>
                <Header />
                <Outlet />
            </div>
        </div>
    );
}


export default MainLayout;
