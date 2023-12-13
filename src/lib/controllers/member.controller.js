import $api from "../protocols";
import {ACCESS_TOKEN} from "../constraints/tokens";

export class MemberController {
    static async getNations() {
        try {
            const response = await $api.get('member/nations/list');
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
    static async find({limit, offset, username, clubId, token, name = null, surname = null, role = null}) {
        try {
            const response = await $api.get('member', {
                params: {
                    limit,
                    offset,
                    clubId,
                    name,
                    surname,
                    role,
                    username
                },
                headers: {
                    'Cookie': `${ACCESS_TOKEN}=${token};`,
                },
                withCredentials: true
            });
            if (response.error) {
                return {
                    error: response.error
                };
            } else {
                return response.data;
            }
        } catch (e) {
            return {
                error:
                    e?.response?.data?.error ??
                    'Internal server error. Try again!',
            }
        }
    }

    static async findOne(username, token) {
        try {
            const response = await $api.get(`member/${username}`, {
                headers: {
                    'Cookie': `${ACCESS_TOKEN}=${token};`,
                },
                withCredentials: true
            });
            if (response.error) {
                return {
                    error: response.error
                };
            } else {
                return response.data;
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