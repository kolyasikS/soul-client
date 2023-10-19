'use client'
import React, {useState} from 'react';
import {ClassicButton} from "../../shared/buttons/api";
import EditProfileDialog from "./EditProfileDialog";
import {ClassicDialog} from "../../shared/dialogs/api";

const EditProfile = ({name, surname, username, bio}) => {
    const [editForm, setEditForm] = useState(false);
    const edit = () => {
        setEditForm(true);
    }

    const changePassword = () => {

    }

    const cancel = () => {
        setEditForm(false);
    }

    const apply = () => {

        setEditForm(false);
    }
    return (
        <>
            <ClassicButton onClick={edit}>Edit profile</ClassicButton>
            <ClassicButton variant={'danger'} onClick={changePassword}>Change password</ClassicButton>
            {editForm && <ClassicDialog>
                <EditProfileDialog
                    cancel={cancel}
                    apply={apply}
                    name={name}
                    surname={surname}
                    username={username}
                    bio={bio}
                />
            </ClassicDialog>}
        </>
    );
};

export default EditProfile;