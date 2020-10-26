import { writable, derived } from "svelte/store";
import Temperature24 from "carbon-icons-svelte/lib/Temperature24";
import Smoke24 from "carbon-icons-svelte/lib/Smoke24";
import Fog24 from "carbon-icons-svelte/lib/Fog24";
import io from "socket.io-client";

export const socket = io("https://node-backend-diplomski.herokuapp.com/");

export const temperature = writable([]);
export const humidity = writable([]);
export const pressure = writable([]);
export const isOpen = writable(false);
export const title = writable("Home");
export const sortValue = ["Ascending", "Descending"];

export const optionsDrawer = [
  { name: "Temperature", icon: Temperature24, url: "/temp" },
  { name: "Humidity", icon: Smoke24, url: "/humid" },
  { name: "Pressure", icon: Fog24, url: "/press" },
];
