'use client';
import React, {useEffect, useState} from 'react';
import {Box, Tabs, Text} from "@radix-ui/themes";
import PeopleList from "../people/people/PeopleList";
import {MemberController} from "../../../lib/controllers/member.controller";
import {ACCESS_TOKEN} from "../../../lib/constraints/tokens";
import {useSelector} from "react-redux";
import {selectUser} from "../../../lib/store/selectors/user.selectors";
import Board from "./Board";
import Loader from "react-loading";

const Page = () => {
    const [people, setPeople] = useState([]);
    const user = useSelector(selectUser);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        MemberController.find({limit: 1000, offset: 0, token: window.localStorage.getItem(ACCESS_TOKEN)})
            .then(res => {
                setPeople(res.members.filter(mem => mem.clubId === user.clubId && mem.email !== user.email))
                setIsLoading(false)
            })
    }, [user]);

    return (
        <div className={'min-h-[100vh] flex items-centers w-full pt-10'}>
            <Tabs.Root defaultValue="Члени команди" className={'w-full flex flex-col items-center'}>
                <Tabs.List>
                    <Tabs.Trigger value="Члени команди">Члени команди</Tabs.Trigger>
                    {/*<Tabs.Trigger value="Board">Board</Tabs.Trigger>*/}
                </Tabs.List>

                <Box px="4" pt="3" pb="2">
                    <Tabs.Content value="Члени команди">
                        {isLoading
                            ? <div className={'w-full flex justify-center'}>
                                <Loader type={'spin'} width={30}/>
                            </div>
                            : people.length > 0
                                ? <PeopleList people={people} setPeople={setPeople} isClubList={true}/>
                                : <p className={'text-3xl mt-5 font-bold text-red-600'}>Поки нікого немає</p>
                        }
                    </Tabs.Content>

                    {/*<Tabs.Content value="Board">
                        <Text size="2">
                            <Board/>
                        </Text>
                    </Tabs.Content>*/}
                </Box>
            </Tabs.Root>
        </div>
    );
};

export default Page;