export default interface IUserPostModel {
    "id": number,
    "title": string,
    "body": string,
    "userId": number,
    "tags": string[],
    "reactions": number
}