import { IWeatherResponse } from "../models/IWeatherResponse";
import { get } from "./serviceBase";

export const weatherResponse = async (): Promise<IWeatherResponse> =>{
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.881832&lon=-87.623177&appid=22c22c81677a5afd72f6f4410a4a4c57"
    const data = await get<IWeatherResponse>(url);
    console.log(data.main);
    
    return data;
}

//api key: 22c22c81677a5afd72f6f4410a4a4c57