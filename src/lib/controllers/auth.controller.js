import $api, {API_URL} from "../protocols";
export class AuthController {
    static async signIn({username, password, userType}) {
        try {
            const signInResponse = await $api.post('auth/login',{
                username,
                password,
                role: userType.toUpperCase()
            }, {
                withCredentials: true,
            });
            if (signInResponse.error) {
                return {
                    error: signInResponse.error
                };
            } else {
                const {data} = signInResponse;

                return data;
            }
        } catch (e) {
            console.log(e);
            return {
                error: e?.response?.data?.error ?? 'Internal server error. Try again!',
            }
        }
    }
    static async signInAdmin({username, password}) {
        try {
            const signInResponse = await $api.post('auth/admin',{
                username,
                password,
            }, {
                withCredentials: true,
            });
            if (signInResponse.error) {
                return {
                    error: signInResponse.error
                };
            } else {

                return signInResponse.data;
            }
        } catch (e) {
            console.log(e);
            return {
                error: e?.response?.data?.error ?? 'Internal server error. Try again!',
            }
        }
    }
    static async logout() {
        try {
            const signInResponse = await $api.get('auth/logout',{
                withCredentials: true
            });
            if (signInResponse.error) {
                return {
                    error: signInResponse.error
                };
            } else {
                return signInResponse.data;
            }
        } catch (e) {
            console.log(e);
            return {
                error: e?.response?.data?.error ?? 'Internal server error. Try again!',
            }
        }
    }

    static async verify(token) {
        try {
            const response = await fetch(`${API_URL}auth/verify`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            }).then(res => res.json());
            if (response.error) {
                return {
                    error: response.error
                };
            } else {
                return {
                    ...response
                };
            }
        } catch (e) {
            console.log(e?.response?.data?.error ?? 'Internal server error. Try again!');
            return {
                error: e?.response?.data?.error ?? 'Internal server error. Try again!',
            }
        }
    }

    static async retrieve({userId, role}) {
        try {
            const response = await $api.post('auth/retrieve',{
                userId,
                role,
            }, {
                withCredentials: true,
            });
            if (response.error) {
                return {
                    error: response.error
                };
            } else {
                return response.data;
            }
        } catch (e) {
            console.log(e?.response?.data?.error ?? 'Internal server error. Try again!');
            return {
                error: e?.response?.data?.error ?? 'Internal server error. Try again!',
            }
        }
    }

    static async getSubscriptionPrice() {
        try {
            const response = await $api.get('club/subscription/get', {
                withCredentials: true,
            });
            if (response.error) {
                return {
                    error: response.error
                };
            } else {
                return response.data;
            }
        } catch (e) {
            console.log(e?.response?.data?.error ?? 'Internal server error. Try again!');
            return {
                error: e?.response?.data?.error ?? 'Internal server error. Try again!',
            }
        }
    }

    static async changePrice(price) {
        try {
            const response = await $api.post('admin/subscription', {
                price
            }, {
                withCredentials: true,
            });
            if (response.error) {
                return {
                    error: response.error
                };
            } else {
                return response.data;
            }
        } catch (e) {
            console.log(e?.response?.data?.error ?? 'Internal server error. Try again!');
            return {
                error: e?.response?.data?.error ?? 'Internal server error. Try again!',
            }
        }
    }

}