import {AUTH_STORED_TOKEN_NAME} from "../constants";
import {ITokenObtainPair} from "../../models/ITokenObtainPair";

export const getTokens = (): ITokenObtainPair | null => {
    const tokens = localStorage.getItem(AUTH_STORED_TOKEN_NAME);

    return tokens ? JSON.parse(tokens) : null;
}
export const setTokens = (tokens: ITokenObtainPair): void => {
    localStorage.setItem(
        AUTH_STORED_TOKEN_NAME,
        JSON.stringify(tokens)
    );
}

export const removeTokens = (): void => {
    localStorage.removeItem(AUTH_STORED_TOKEN_NAME);
}