import $api from "../protocols";

export class DirectorController {
    static async signUp({
                            name, surname, username, password,
                            email, description,
                            nation, birthday
                        }) {
        try {
            const response = await $api.post('director', {
                name,
                surname,
                username,
                password,
                email,
                nation,
                birthday,
                selfDescription: description
            });
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

    static async update({
                            name, surname, username, selfDescription, id
                        }) {
        try {
            const response = await $api.patch(`director/${id}`, {
                name,
                surname,
                username,
                selfDescription
            }, {withCredentials: true});
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

    static async verificateSubscription(subscription) {
        try {
            const response = await $api.post(`club/verification`, {
                subscription
            }, {withCredentials: true});
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

    static async subscribe({seasons, number, exp_month, exp_year, cvc, directorId}) {
        try {
            const response = await $api.post(`club/subscription`, {
                seasons,
                card: {
                    number,
                    exp_month,
                    exp_year,
                    cvc
                },
                directorId
            }, {withCredentials: true});
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
