import {IPageModel} from "./IPageModel";
import {ICarModel} from "./ICarModel";

export interface IAllCarsInfoModel {
    total_items: number,
    total_page: number,
    prev: IPageModel | null,
    next: IPageModel | null,
    items: ICarModel[]
}