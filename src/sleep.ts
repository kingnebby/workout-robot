import ms from "ms";

export const sleep = async (timeout: string) => {
  let sleepTime: number = ms(timeout);
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};
