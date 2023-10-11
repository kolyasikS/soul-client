import $api from "../http";

export class ClubController {
    static async getTimetable({clubId}) {
        try {
            const response = await $api.get(`club/${clubId}/timetable`);
            if (response.error) {
                return {
                    error: response.error
                };
            } else {
                const timetable = response.data;
                return timetable;
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