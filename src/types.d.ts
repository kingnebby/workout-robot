export type Workout = {
  workoutName: string;
  totalTime: string;
  workout: any;
};

export type Activity = Interval | Set;

export type Interval = {
  type: "interval";
  duration: string;
  rest?: string;
  exercises: Exercise[];
};

export type Set = {
  type: "set";
  name: string;
  duration: string;
  rest?: string
};

export type Exercise = {
  name: string;
};
