
interface IUserHairModel {
    "color": string,
    "type": string
}

interface IUserCoordinates {
        "lat": number,
        "lng": number
}

interface IUserAdress{
    "address": string,
    "city": string,
    "coordinates": IUserHairModel,
    "postalCode": string,
    "state": string
}

interface IUserBank{
    "cardExpire": string,
    "cardNumber": string,
    "cardType": string,
    "currency": string,
    "iban": string
}

interface IUserCompanyCoordinates{
    "lat": number,
    "lng": number
}

interface IUserCompanyAddress{
    "address": string,
    "city": string,
    "coordinates": IUserCompanyCoordinates,
    "postalCode": string,
    "state": string
}

interface IUserCompany {
    "address": IUserCompanyAddress,
    "department": string,
    "name": string,
    "title": string
}

 export default interface IUserModel{
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender:string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: IUserHairModel,
    domain: string,
    ip: string,
    "address": IUserAdress,
    "macAddress": string,
    "university": string,
    "bank": IUserBank,
    "company": IUserCompany,
    "ein": string,
    "ssn": string,
    "userAgent":string
}