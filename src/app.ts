import { safeLoad } from "js-yaml";
import { readFileSync } from "fs";
import { speak } from "./say";
import { Workout } from "./types";
import { startWorkout } from "./workout";

const exerciseFile = process.env.FILE || "./src/data/cardio-bodyweight.yml";

const json: Workout = safeLoad(readFileSync(exerciseFile, "utf-8")) as Workout;

const describeWorkout = async (workout: Workout): Promise<void> => {
  await speak(workout.workoutName);
  await speak(workout.totalTime);
};

const start = async () => {
  await describeWorkout(json);
  await startWorkout(json);
} 

start()