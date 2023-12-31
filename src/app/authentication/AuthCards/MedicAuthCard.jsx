import React from 'react';
import AuthCard from "./AuthCard";
import {AuthTypes, UserTypes} from "@enums/auth";

const MedicAuthCard = ({setAuthType}) => {
    return (
        <AuthCard
            onSignIn={() => setAuthType({
                userType: UserTypes.MEDIC,
                authType: AuthTypes.SIGN_IN,
            })}
            onSignUp={() => setAuthType({
                userType: UserTypes.MEDIC,
                authType: AuthTypes.SIGN_UP,
            })}
            title={UserTypes.MEDIC}
            bgColor={'#87832f'}
            icon={
                <svg fill="#ffffff" version="1.1" id="Doctor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M185.996,7H114v62c0.162,19.641,16.29,35.507,35.969,35.507c19.65,0,35.822-15.907,36.031-35.507L185.996,7z M126,19h48.004 l0.027,38.066L126,57.007V19z M163,34h-9v-9h-8v9h-9v8h9v9h8v-9h9V34z M196.333,114h-21.175L157,153.405V114h-14v39.482L124.845,114 h-21.179C76.28,114,54,136.281,54,163.667V271.5c0,12.406,10.093,22.5,22.5,22.5c6.512,0,12.388-2.781,16.5-7.218V294h114v-7.218 c4.112,4.437,9.987,7.218,16.5,7.218c12.406,0,22.5-10.094,22.5-22.5V163.667C246,136.281,223.72,114,196.333,114z M234,271.5 c0,5.79-4.71,10.5-10.5,10.5s-10.5-4.71-10.5-10.5V171h-18v111h-90V171H87v100.5c0,5.79-4.71,10.5-10.5,10.5S66,277.29,66,271.5 V163.667C66,142.897,82.897,126,103.667,126h13.488l32.808,71.35L182.842,126h13.491c20.77,0,37.667,16.897,37.667,37.667V271.5z"></path> </g></svg>
            }
        />
    );
};

export default MedicAuthCard;