import { speak } from "./say";
import { sleep } from "./sleep";
import { Activity, Interval, Set, Workout } from "./types";

export const startWorkout = async (workout: Workout) => {
  for (const activity of workout.workout) {
    await doActivity(activity);
  }
};

export const doActivity = async (activity: Activity) => {
  if (activity.type === "interval") return doWorkoutIntervalSet(activity);
  if (activity.type === "set") return doWorkoutSet(activity);
};

export const doWorkoutIntervalSet = async (intervalSet: Interval) => {
  for (const exercise of intervalSet.exercises) {
    speak(exercise.name);
    await sleep(intervalSet.duration);
  }
  await doSetRest(intervalSet)
};

export const doWorkoutSet = async (exercise: Set) => {
  speak(exercise.name);
  await sleep(exercise.duration);
  await doSetRest(exercise)
};

export const doSetRest = async (activity: Activity) => {
  if (activity?.rest === undefined || null) {
    return
  }
  speak("Break time!")
  await sleep(activity.rest)
}
