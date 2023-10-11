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
                const {data: {access_token}} = signInResponse;

                return {
                    access_token
                };
            }
        } catch (e) {
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