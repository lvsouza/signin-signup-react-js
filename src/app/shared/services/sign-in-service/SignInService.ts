import { AxiosError } from "axios";

import { IRequestResult } from "../../interfaces/IRequestResult";
import { Api } from "../axios-config/AxiosConfig";

const signIn = async (email: string, password: string): Promise<IRequestResult> => {
    try {
        await Api.post('/sign-in', { email, password });

        return { success: true };
    } catch (error) {
        const err = error as AxiosError;

        const result: IRequestResult = { messages: [], success: false };

        if (err.response?.data) {
            err.response.data.errors?.emailOrPassword?.forEach((fieldError: string) => {
                result.messages?.push(fieldError);
            });
        } else if (err.message === 'Network Error') {
            result.messages?.push("Certifique-se de estar conectado na internet.");
        }

        return result;
    }
}

export const SignInService = {
    signIn
};
