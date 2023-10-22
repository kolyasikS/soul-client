'use client';
import React from 'react';
import store from "../../lib/store/store";
import {Provider} from "react-redux";

const WithStoreProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default WithStoreProvider;