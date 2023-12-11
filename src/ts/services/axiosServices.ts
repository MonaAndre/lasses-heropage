import { IDog } from "../models/IDog";
import { get } from "./serviceBase";

export const generateDogs = async () => {
  const url = "https://api.thedogapi.com/v1/images/search?limit=3";
  const data = await get<IDog[]>(url);
  return data;
};
