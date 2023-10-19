import $api from "../http";

export class AuthController {
    static async signIn({username, password, userType}) {
        try {
            const signInResponse = await $api.post('auth/login',{
                username,
                password,
                role: userType.toUpperCase()
            });
            if (signInResponse.error) {
                return {
                    error: signInResponse.error
                };
            } else {
                const {data} = signInResponse;

                return {
                    access_token: data
                };
            }
        } catch (e) {
            return {
                error: e?.response?.data?.error ?? 'Internal server error. Try again!',
            }
        }
    }

    static async verify(token) {
        try {
            const signInResponse = await $api.get('auth/verify',{
                headers: {
                    'Authorization': token
                }
            });

            if (signInResponse.error) {
                return {
                    error: signInResponse.error
                };
            } else {
                const {data} = signInResponse;

                return {
                    payload: data
                };
            }
        } catch (e) {
            console.log(e?.response?.data?.error ?? 'Internal server error. Try again!');
            return {
                error: e?.response?.data?.error ?? 'Internal server error. Try again!',
            }
        }
    }
    static async getNations() {
        try {
            const response = await $api.get('auth/nations');
            if (response.error) {
                return {
                    error: response.error
                };
            } else {
                const nations = response.data;
                return nations;
            }
        } catch (e) {
            return {
                error:
                    e?.response?.data?.error ??
                    'Internal server error. Try again!',
            }
        }
    }
}