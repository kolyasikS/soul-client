'use client';

import React, {useEffect, useState} from 'react';
import {Box, Tabs} from "@radix-ui/themes";
import Loader from "react-loading";
import PeopleList from "../people/people/PeopleList";
import {AuthController} from "../../../lib/controllers/auth.controller";
import {ClassicButton} from "@shared/buttons/api";
import CreateClubModal from "../home/CreateClubModal";
import changePriceModal from "./ChangePriceModal";
import ChangePriceModal from "./ChangePriceModal";
import {useRouter} from "next/navigation";

const Page = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [price, setPrice] = useState();
    const [priceModal, setPriceModal] = useState(false)

    const router = useRouter();

    useEffect(() => {
        const ctx = localStorage.getItem('soul-user')
        if (ctx) {
            const parsedCtx = JSON.parse(ctx);
            if (parsedCtx.role !== 'ADMIN') {
                router.push('/en/authentication');
            }
        }
        AuthController.getSubscriptionPrice()
            .then(res => {
                setPrice(res);
                setIsLoading(false);
            })
    }, []);

    return (
        <div className={'min-h-[100vh] flex items-centers w-full pt-10'}>
            <Tabs.Root defaultValue="Subscription" className={'w-full flex flex-col items-center'}>
                <Tabs.List>
                    <Tabs.Trigger value="Subscription">Subscription</Tabs.Trigger>
                </Tabs.List>

                <Box px="4" pt="3" pb="2">
                    <Tabs.Content value="Subscription">
                        {isLoading
                            ? <div className={'w-full flex justify-center'}>
                                <Loader type={'spin'} width={30}/>
                            </div>
                            : <div className={'flex flex-col gap-5'}>
                                <p className={'text-3xl mt-5 font-bold text-blue-300'}>Subscription price: <span className={'text-red-600'}>{price}</span></p>
                                <ClassicButton onClick={() => setPriceModal(true)}>Change price</ClassicButton>
                            </div>
                        }
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
            {priceModal && <ChangePriceModal close={() => setPriceModal(false)}/>}
        </div>
    );
}

export default Page;

