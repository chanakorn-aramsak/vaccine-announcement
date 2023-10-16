import { IHospital } from "./IHospital";

export interface IHospitalsResponse {
    count: number,
    data: IHospital[],
    pagination: any,
    success: boolean,
}
