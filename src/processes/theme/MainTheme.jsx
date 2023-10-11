import React from 'react';
import {Theme} from "@radix-ui/themes";

const MainTheme = ({children}) => {
    return (
        <Theme appearance={'dark'} style={{width: '100%'}}>
            {children}
        </Theme>
    );
};

export default MainTheme;