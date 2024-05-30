import React from "react"; 
import SharedPage from "./SharedPage";
import EnhancedTable from "../components/Table";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function AdherentPage() {
    const navigate = useNavigate();

    const navigateAdd = () => {
        navigate('add');
    }

    return(
        <SharedPage path="/adherents">
            <div className="w-full h-[10vh] flex">
                <button className="h-[6vh] w-[200px] mt-auto mb-auto rounded-[15px] bg-blue-600
                text-white font-bold font-maven-pro text-[2.2vh] hover:bg-blue-700 transition-all 
                duration-500 ease-in-out ml-auto mr-[5vw] hover:translate-y-[3px] pt-[-15px] shadow-xl 
                p-4 flex
                " onClick={() => navigateAdd()}>
                    <div className="mt-[-0.6vh] flex">
                        <IoIosAddCircleOutline className="text-[3.2vh] m-auto"/>Ajouter un adherent
                    </div>
                </button>
            </div>
            <div className='w-[90%] h-full m-auto'>
                <EnhancedTable/>
            </div>
        </SharedPage>
    );
}