import React from 'react';
import AuthCard from "./AuthCard";
import {AuthTypes, UserTypes} from "@enums/auth";

const PlayerAuthCard = ({setAuthType}) => {
    return (
        <AuthCard
            onSignIn={() => setAuthType({
                userType: UserTypes.PLAYER,
                authType: AuthTypes.SIGN_IN,
            })}
            onSignUp={() => setAuthType({
                userType: UserTypes.PLAYER,
                authType: AuthTypes.SIGN_UP,
            })}
            title={UserTypes.PLAYER}
            bgColor={'#053e94'}
            icon={
                <svg fill="#fff" version="1.1" id="Layer_1"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 260 238"
                     enableBackground="new 0 0 260 238"
                     ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M195.288,5.905C191.522,3.32,187.267,2,183,2c-7,0-13.984,3.181-18.352,9.369c-6.831,9.953-4.489,23.809,5.464,30.64 s23.614,4.489,30.64-5.464S205.241,12.735,195.288,5.905z M247.981,47.502c-4.489-2.927-10.539-1.952-13.466,2.537l-20.687,29.274 l-35.129-24.785L164.452,44.38c-5.66-4.098-12.295-6.05-18.93-6.05h-44.496c-3.318-0.39-6.635,1.171-8.587,4.098L66.678,79.312 c-2.927,4.489-1.952,10.539,2.537,13.466c4.489,2.927,10.539,1.952,13.466-2.537l22.834-32.787h26.737L62.775,158.352l-43.52-11.514 c-7.416-1.952-14.832,2.342-16.784,9.563c-1.952,7.416,2.342,14.832,9.563,16.784l53.083,14.247 c3.318,0.781,7.221,0.585,10.539-1.366c2.537-1.366,3.903-4.098,5.464-6.05s24.005-34.348,24.005-34.348l42.545,30.25l8.587,48.595 c1.366,7.416,8.587,12.49,16.003,11.319c7.416-1.366,12.49-8.587,11.319-16.003l-9.563-54.059c-0.585-3.513-2.927-6.831-5.855-8.782 l-33.762-23.614l39.617-58.743l37.08,25.761c4.489,2.927,10.539,1.952,13.466-2.537l25.761-37.08 C253.445,56.674,252.469,50.429,247.981,47.502z M232.828,163.494c13.902,0,25.172,11.27,25.172,25.172s-11.27,25.172-25.172,25.172 s-25.172-11.27-25.172-25.172S218.926,163.494,232.828,163.494z"></path> </g>
                </svg>
            }
        />
    );
};

export default PlayerAuthCard;