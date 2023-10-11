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
}