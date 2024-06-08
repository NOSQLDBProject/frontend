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

            <div className='w-[90%] h-full m-auto'>
                <EnhancedTable/>
            </div>
        </SharedPage>
    );
}