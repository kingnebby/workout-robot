import { speak } from "./say";
import {
  sleepForOneHalf,
  sleepString,
  sleepTillFiveSecTillEnd,
} from "./sleep";
import { playFiveSecondSound } from "./sound";
import { Activity, Interval, Set, Workout } from "./types";

export const startWorkout = async (workout: Workout) => {
  for (const activity of workout.workout) {
    await Promise.all([
      doActivity(activity),
      notifyWhenHalfway(activity.duration),
      playFiveSecondIndicator(activity.duration),
    ]);
  }
};

export const doActivity = async (activity: Activity) => {
  if (activity.type === "interval") return doWorkoutIntervalSet(activity);
  if (activity.type === "set") return doWorkoutSet(activity);
};

export const doWorkoutIntervalSet = async (intervalSet: Interval) => {
  for (const exercise of intervalSet.exercises) {
    speak(exercise.name);
    await sleepString(intervalSet.duration);
  }
  await doSetRest(intervalSet);
};

export const doWorkoutSet = async (exercise: Set) => {
  speak(exercise.name);
  await sleepString(exercise.duration);
  await doSetRest(exercise);
};

export const doSetRest = async (activity: Activity) => {
  if (activity?.rest === undefined || null) {
    return;
  }
  speak("Break time!");
  await sleepString(activity.rest);
};

export const notifyWhenHalfway = async (duration: string) => {
  await sleepForOneHalf(duration);
  speak("You are half way there, keep going!");
};

export const playFiveSecondIndicator = async (duration: string) => {
  await sleepTillFiveSecTillEnd(duration);
  playFiveSecondSound();
};
