import IUserModel from './IUserModel'
export default interface IUserResponseModel {
    limit: number
    skip: number
    total: number
    users: IUserModel[]
}