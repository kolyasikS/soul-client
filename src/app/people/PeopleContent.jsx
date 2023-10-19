'use client'
import React, {useState} from 'react';
import Filters from "./filters/Filters";
import PeopleList from "./people/PeopleList";
import Sorts from "./sorts/Sorts";

const PeopleContent = ({initialPeople}) => {
    const [people, setPeople] = useState(initialPeople);

    return (
        <>
            <Filters setPeople={setPeople}/>
            <PeopleList people={people} setPeople={setPeople}/>
            <Sorts setPeople={setPeople}/>
        </>
    );
};

export default PeopleContent;