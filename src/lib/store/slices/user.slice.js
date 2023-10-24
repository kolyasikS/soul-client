import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    username: '',
    role: '',
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            console.log(action);
            const user = action.payload;
            if (!user) {
                clearUser(state);
                return;
            }
            state.username = user.username;
            state.role = user.role;
        },
        clearUser(state) {
            state.username = '';
            state.role = '';
        }
    }
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;