import { IMain } from "./IMain";
import { IWeather } from "./IWeather";
import { IWind } from "./IWind";

export interface IWeatherResponse{
    weather: IWeather[];
    main: IMain;
    wind: IWind;
    name: string;

}