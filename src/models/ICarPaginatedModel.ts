import {IPaginationPageModel} from "./IPaginationPageModel";
import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarPaginatedModel {
    total_items: number;
    total_pages: number;
    prev: IPaginationPageModel | null;
    next: IPaginationPageModel | null;
    items: ICarWithAuth[]
}