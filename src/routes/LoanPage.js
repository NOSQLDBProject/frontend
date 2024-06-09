import React from "react"; 
import SharedPage from "./SharedPage";
import Table from "../components/Table";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function LoanPage() {
    const navigate = useNavigate();

    const navigateAdd = () => {
        navigate('prets');
    }

    return(
        <SharedPage path="/prets">
            <div className='w-[90%] h-full m-auto'>
                <Table type='loans'/>
            </div>
        </SharedPage>
    );
}
