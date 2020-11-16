import ms from "ms";

export const sleep = async (timeout: string) => {
  let sleepTime: number = ms(timeout);
  return new Promise((resolve) => {
    setTimeout(resolve, sleepTime);
  });
};
