import {IAuthDataModel} from "./IAuthDataModel";

export interface IAuthRegistrationDataModel extends IAuthDataModel {
    confirm_password: string
}