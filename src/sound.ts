import { spawn } from "child_process";

export const playFiveSecondSound = async () => {
  const childProcess = spawn("afplay", ["src/sounds/5secondIndicator.wav"]);
  return new Promise((resolve, reject) => {
    childProcess.on("exit", () => {
      resolve();
    });
    childProcess.on("error", (err) => {
      reject(err);
    });
  });
};
