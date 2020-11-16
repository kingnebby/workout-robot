import ms from "ms";

export const sleepString = async (sleepTime: string): Promise<void> => {
  let sleepTimeNumber: number = ms(sleepTime);
  return sleepNumber(sleepTimeNumber);
};

export const sleepNumber = async (sleepTime: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, sleepTime));
};

export const sleepForOneHalf = async (duration:string): Promise<void> => {
  const sleepTime = ms(duration) / 2
  return sleepNumber(sleepTime)
}

export const sleepTillFiveSecTillEnd = async (duration:string): Promise<void> => {
  const sleepTime = ms(duration) - 5000
  return sleepNumber(sleepTime)
}
