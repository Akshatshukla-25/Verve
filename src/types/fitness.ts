export type MuscleGroup =
  | 'Chest'
  | 'Back'
  | 'Shoulders'
  | 'Biceps'
  | 'Triceps'
  | 'Legs'
  | 'Quads'
  | 'Hamstrings'
  | 'Calves'
  | 'Abs'
  | 'Glutes'
  | 'Full Body'
  | 'Cardio';

export type EquipmentType =
  | 'Barbell'
  | 'Dumbbell'
  | 'Machine'
  | 'Cable'
  | 'Bodyweight'
  | 'Kettlebell'
  | 'Smith Machine'
  | 'None';

export type SetType = 'W' | 'N' | 'D' | 'F'; // Warmup, Normal, Drop set, Failure

export interface Exercise {
  id: string;
  name: string;
  category: MuscleGroup;
  secondaryMuscles?: MuscleGroup[];
  equipment: EquipmentType;
  imageUrl: string;
  instructions?: string[];
  isCustom?: boolean;
}

export interface WorkoutSet {
  id: string;
  setNumber: number;
  type: SetType;
  weightKg: number;
  reps: number;
  completed: boolean;
  rpe?: number;
  prevWeightKg?: number;
  prevReps?: number;
}

export interface RoutineExercise {
  id: string;
  exerciseId: string;
  exercise: Exercise;
  targetSets: number;
  targetReps: string;
  restTimerSeconds: number;
  sets: WorkoutSet[];
}

export interface WorkoutRoutine {
  id: string;
  title: string;
  description?: string;
  dayOfWeek?: string;
  exercises: RoutineExercise[];
  updatedAt: string;
}

export interface LoggedWorkout {
  id: string;
  title: string;
  startTime: string;
  endTime?: string;
  durationSeconds: number;
  totalVolumeKg: number;
  totalSets: number;
  exercises: {
    exercise: Exercise;
    sets: WorkoutSet[];
  }[];
  notes?: string;
}

export interface GPSPoint {
  latitude: number;
  longitude: number;
  altitude?: number | null;
  speed?: number | null;
  timestamp: number;
}

export interface RunSplit {
  splitNumber: number;
  distanceKm: number;
  durationSeconds: number;
  avgPaceMinPerKm: number;
  elevationGainMeters: number;
}

export interface LoggedRun {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  durationSeconds: number;
  distanceKm: number;
  avgPaceMinPerKm: number;
  maxPaceMinPerKm: number;
  elevationGainMeters: number;
  caloriesBurned: number;
  avgHeartRate?: number;
  routePoints: GPSPoint[];
  splits: RunSplit[];
  notes?: string;
}

export type FeedItemType = 'run' | 'workout';

export interface FeedItem {
  id: string;
  type: FeedItemType;
  title: string;
  timestamp: string;
  durationSeconds: number;
  runData?: LoggedRun;
  workoutData?: LoggedWorkout;
  user: {
    name: string;
    avatarUrl: string;
  };
}
