
export interface IUserLogin {
    id: number;
    email: string;
    isAdmin: boolean;
    password: string;
}


export type IssueInitialState = {
    user: IUserLogin;
    isAuth: boolean;
};

export const initialState: IssueInitialState = {
    user: {
        id: 0,
        isAdmin: false,
        email: "",
        password: "",
    },
    isAuth: false,
};
