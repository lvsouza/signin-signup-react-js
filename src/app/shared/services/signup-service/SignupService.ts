import { Api } from "../axios-config/AxiosConfig";

interface UserSignup {
    name: string;
    email: string;
    username: string;
    password: string;
}

const signup = async (user: UserSignup): Promise<boolean> => {
    try {
        await Api.post('/SignUp', user);
        return true;
    } catch (error) {
        return false;
    }
}

export const SignupService = {
    signup
};
