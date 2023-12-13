import { IWeatherResponse } from "../models/IWeatherResponse";
import { get } from "./serviceBase";

export const weatherResponse = async (): Promise<IWeatherResponse> =>{
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=22c22c81677a5afd72f6f4410a4a4c57&units=metric"
    const data = await get<IWeatherResponse>(url);
    return data;
}

//api key: 22c22c81677a5afd72f6f4410a4a4c57