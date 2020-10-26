import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export const setData = async (data, key) => {
  await Storage.set({
    key,
    value: JSON.stringify(data),
  });
};

export const getData = async (key) => {
  let result = await Storage.get({ key });
  let data = await JSON.parse(result.value);
  return data;
};

export const clear = async () => await Storage.clear();
