'use client';
import React, {useEffect} from 'react';
import store from "../../lib/store/store";
import {Provider} from "react-redux";
import {AuthController} from "../../lib/controllers/auth.controller";
import {ACCESS_TOKEN} from "../../lib/constraints/tokens";

const WithStoreProvider = ({children}) => {
    useEffect(() => {
        const ctx = localStorage.getItem('soul-user');
        if (ctx) {
            const parsedCtx = JSON.parse(ctx);
            const requirements = [
                'clubId',
                'email',
                'username',
                'name',
                'surname',
                'subscription'
            ]
            AuthController.retrieve({userId: parsedCtx.id, role: parsedCtx.role})
                .then(res => {
                    let trainer = {};
                    Object.keys(res)
                        .filter(key => requirements.includes(key))
                        .forEach(key => {
                            trainer[key] = res[key]
                        })
                    trainer.role = parsedCtx.role;
                    trainer.id = res._id;
                    if (!trainer.subscription) {
                        trainer.subscription = null
                    }
                    localStorage.setItem('soul-user', JSON.stringify(trainer));
                });
        }
    }, []);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default WithStoreProvider;