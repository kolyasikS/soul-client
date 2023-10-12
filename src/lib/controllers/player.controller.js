import $api from "../http";

export class PlayerController {
    static async getPositions() {
        try {
            const response = await $api.get('player/positions');
            if (response.error) {
                return {
                    error: response.error
                };
            } else {
                const positions = response.data;
                return positions;
            }
        } catch (e) {
            return {
                error:
                    e?.response?.data?.error ??
                    'Internal server error. Try again!',
            }
        }
    }
    static async signUp({name, surname, username, password,
                            email, number, position,
                            nation, birthday}) {
        try {
            const response = await $api.post('player');
            if (response.error) {
                return {
                    error: response.error
                };
            } else {
                return {};
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