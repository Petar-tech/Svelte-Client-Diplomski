import { writable } from "svelte/store";

export const isOpen = writable(false);
export const title = writable("Home");
export const temp_min = writable(-100);
export const temp_max = writable(100);
export const press_min = writable(0);
export const press_max = writable(100000);
export const humid_min = writable(0);
export const humid_max = writable(100);
export const slider_value = writable(0);
export const optionsForm = [
  {
    name: "Temperature",
    unit: "degrees Celsius",
    min: temp_min,
    max: temp_max,
    default_min: -100,
    default_max: 100,
  },
  {
    name: "Humidity",
    unit: "gram per kilogram",
    min: humid_min,
    max: humid_max,
    default_min: 0,
    default_max: 100,
  },
  {
    name: "Pressure",
    unit: "milibar",
    min: press_min,
    max: press_max,
    default_min: 0,
    default_max: 100000,
  },
];
