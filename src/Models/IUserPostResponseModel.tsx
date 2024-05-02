import IUserPostModel from './IUserPostModel'
export default interface IUserPostResponseModel {
    limit: number,
    posts: IUserPostModel[],
    skip: number,
    total: number
}
