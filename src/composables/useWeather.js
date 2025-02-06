import { useWeatherStore } from "@/modules/registro/stores/wheatherStore";
import { getTemperatura } from "@/helpers/getWeather.js";

export const useWeather = async () => {
    const temperatura = await getTemperatura();
    const wheatherStore = useWeatherStore();
    wheatherStore.temperatura = temperatura;
}