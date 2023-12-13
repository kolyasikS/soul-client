'use client'
import React, {useState} from 'react';
import {ClassicButton} from "@shared/buttons/api";
import {ClassicDialog} from "@shared/dialogs/api";
import EditProfileDialog from "./EditProfileDialog";
import {useSelector} from "react-redux";
import {selectUsername} from "../../../../lib/store/selectors/user.selectors";
import {DirectorController} from "../../../../lib/controllers/director.controller";

const EditProfile = ({name, surname, username, bio, role, id}) => {
    const [editForm, setEditForm] = useState(false);
    const authUsername = useSelector(selectUsername);
    const edit = () => {
        setEditForm(true);
    }

    const cancel = () => {
        setEditForm(false);
    }

    const apply = (newUser) => {
        console.log(role)
        if (role === 'Director') {
            DirectorController.update({
                name: newUser.name,
                surname: newUser.surname,
                selfDescription: newUser.bio,
                id
            }).then((res) => {
                if (!res.error) {
                    window.location.reload();
                }
            })
        }
        setEditForm(false);
    }
    return (
        authUsername === username && <>
            <ClassicButton onClick={edit}>Edit profile</ClassicButton>
            {/*<ClassicButton variant={'danger'} onClick={changePassword}>Change password</ClassicButton>*/}
            {editForm && <ClassicDialog>
                <EditProfileDialog
                    cancel={cancel}
                    apply={apply}
                    name={name}
                    surname={surname}
                    bio={bio}
                />
            </ClassicDialog>}
        </>
    );
};

export default EditProfile;