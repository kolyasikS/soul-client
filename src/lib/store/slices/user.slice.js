import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    username: '',
    role: '',
    email: '',
    name: '',
    surname: '',
    clubId: ''
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            const user = action.payload;
            if (!user) {
                clearUser(state);
                return;
            }
            state.name = user.name;
            state.surname = user.surname;
            state.username = user.username;
            state.email = user.email;
            state.role = user.role;
            state.clubId = user.clubId;
        },
        clearUser(state) {
            state.name = '';
            state.surname = '';
            state.username = '';
            state.email = '';
            state.role = '';
            state.clubId = '';
        }
    }
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;