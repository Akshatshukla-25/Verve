import { INITIAL_EXERCISES } from './exerciseData';
import { Exercise, WorkoutRoutine, LoggedWorkout, LoggedRun, FeedItem } from '../types/fitness';

class StorageService {
  private exercises: Exercise[] = [...INITIAL_EXERCISES];
  private routines: WorkoutRoutine[] = [];
  private workouts: LoggedWorkout[] = [];
  private runs: LoggedRun[] = [];

  constructor() {
    this.seedDefaultRoutines();
    this.seedSampleActivities();
  }

  private seedDefaultRoutines() {
    const bench = this.exercises.find(e => e.id === 'chest-barbell-bench-press') || INITIAL_EXERCISES[0];
    const inclineDumbbell = this.exercises.find(e => e.id === 'chest-incline-dumbbell-press') || INITIAL_EXERCISES[1];
    const ohp = this.exercises.find(e => e.id === 'shoulders-overhead-press') || INITIAL_EXERCISES[12];
    const tricepPushdown = this.exercises.find(e => e.id === 'triceps-rope-pushdown') || INITIAL_EXERCISES[17];

    this.routines = [
      {
        id: 'routine-push-day',
        title: 'Push Day - Hypertrophy',
        description: 'Chest, Shoulders & Triceps focus',
        dayOfWeek: 'Monday',
        updatedAt: '2026-08-09T08:00:00.000Z',
        exercises: [
          {
            id: 're-1',
            exerciseId: bench.id,
            exercise: bench,
            targetSets: 4,
            targetReps: '8-10',
            restTimerSeconds: 90,
            sets: [
              { id: 's1', setNumber: 1, type: 'W', weightKg: 60, reps: 10, completed: true },
              { id: 's2', setNumber: 2, type: 'N', weightKg: 80, reps: 8, completed: false, prevWeightKg: 80, prevReps: 8 },
              { id: 's3', setNumber: 3, type: 'N', weightKg: 80, reps: 8, completed: false, prevWeightKg: 80, prevReps: 8 },
              { id: 's4', setNumber: 4, type: 'F', weightKg: 85, reps: 6, completed: false }
            ]
          },
          {
            id: 're-2',
            exerciseId: inclineDumbbell.id,
            exercise: inclineDumbbell,
            targetSets: 3,
            targetReps: '10-12',
            restTimerSeconds: 75,
            sets: [
              { id: 's5', setNumber: 1, type: 'N', weightKg: 28, reps: 10, completed: false },
              { id: 's6', setNumber: 2, type: 'N', weightKg: 28, reps: 10, completed: false },
              { id: 's7', setNumber: 3, type: 'D', weightKg: 22, reps: 12, completed: false }
            ]
          },
          {
            id: 're-3',
            exerciseId: ohp.id,
            exercise: ohp,
            targetSets: 3,
            targetReps: '8-10',
            restTimerSeconds: 90,
            sets: [
              { id: 's8', setNumber: 1, type: 'N', weightKg: 50, reps: 8, completed: false },
              { id: 's9', setNumber: 2, type: 'N', weightKg: 50, reps: 8, completed: false },
              { id: 's10', setNumber: 3, type: 'N', weightKg: 50, reps: 8, completed: false }
            ]
          },
          {
            id: 're-4',
            exerciseId: tricepPushdown.id,
            exercise: tricepPushdown,
            targetSets: 3,
            targetReps: '12-15',
            restTimerSeconds: 60,
            sets: [
              { id: 's11', setNumber: 1, type: 'N', weightKg: 30, reps: 12, completed: false },
              { id: 's12', setNumber: 2, type: 'N', weightKg: 30, reps: 12, completed: false },
              { id: 's13', setNumber: 3, type: 'F', weightKg: 30, reps: 10, completed: false }
            ]
          }
        ]
      }
    ];
  }

  private seedSampleActivities() {
    const bench = this.exercises[0];

    this.workouts = [
      {
        id: 'w-sample-1',
        title: 'Morning Push Session',
        startTime: '2026-08-08T09:00:00.000Z',
        durationSeconds: 3420,
        totalVolumeKg: 4280,
        totalSets: 13,
        notes: 'Hit personal record on Barbell Bench Press! Felt great energy.',
        exercises: [
          {
            exercise: bench,
            sets: [
              { id: 'sw1', setNumber: 1, type: 'W', weightKg: 60, reps: 10, completed: true },
              { id: 'sw2', setNumber: 2, type: 'N', weightKg: 85, reps: 8, completed: true },
              { id: 'sw3', setNumber: 3, type: 'N', weightKg: 85, reps: 8, completed: true },
              { id: 'sw4', setNumber: 4, type: 'F', weightKg: 90, reps: 6, completed: true }
            ]
          }
        ]
      }
    ];

    this.runs = [
      {
        id: 'run-sample-1',
        title: 'Sunset 5K Tempo Run',
        startTime: '2026-08-07T18:00:00.000Z',
        endTime: '2026-08-07T18:25:15.000Z',
        durationSeconds: 1515,
        distanceKm: 5.02,
        avgPaceMinPerKm: 5.03,
        maxPaceMinPerKm: 4.15,
        elevationGainMeters: 48,
        caloriesBurned: 385,
        avgHeartRate: 156,
        notes: 'Pushed hard on split 3 & 4. Strong finish!',
        routePoints: [
          { latitude: 37.7749, longitude: -122.4194, timestamp: 1786096800000 },
          { latitude: 37.7758, longitude: -122.4185, timestamp: 1786097100000 },
          { latitude: 37.7770, longitude: -122.4172, timestamp: 1786097400000 },
          { latitude: 37.7785, longitude: -122.4150, timestamp: 1786097700000 },
          { latitude: 37.7792, longitude: -122.4138, timestamp: 1786098000000 }
        ],
        splits: [
          { splitNumber: 1, distanceKm: 1.0, durationSeconds: 312, avgPaceMinPerKm: 5.20, elevationGainMeters: 10 },
          { splitNumber: 2, distanceKm: 1.0, durationSeconds: 304, avgPaceMinPerKm: 5.06, elevationGainMeters: 12 },
          { splitNumber: 3, distanceKm: 1.0, durationSeconds: 295, avgPaceMinPerKm: 4.55, elevationGainMeters: 8 },
          { splitNumber: 4, distanceKm: 1.0, durationSeconds: 298, avgPaceMinPerKm: 4.58, elevationGainMeters: 11 },
          { splitNumber: 5, distanceKm: 1.02, durationSeconds: 306, avgPaceMinPerKm: 5.00, elevationGainMeters: 7 }
        ]
      }
    ];
  }

  public getExercises(): Exercise[] {
    return this.exercises;
  }

  public addCustomExercise(exercise: Omit<Exercise, 'id' | 'isCustom'>): Exercise {
    const newEx: Exercise = {
      ...exercise,
      id: `custom-ex-${Date.now()}`,
      isCustom: true
    };
    this.exercises.unshift(newEx);
    return newEx;
  }

  public getRoutines(): WorkoutRoutine[] {
    return this.routines;
  }

  public saveRoutine(routine: WorkoutRoutine): WorkoutRoutine {
    const idx = this.routines.findIndex(r => r.id === routine.id);
    if (idx >= 0) {
      this.routines[idx] = routine;
    } else {
      this.routines.push(routine);
    }
    return routine;
  }

  public getWorkouts(): LoggedWorkout[] {
    return this.workouts;
  }

  public saveWorkout(workout: LoggedWorkout): LoggedWorkout {
    this.workouts.unshift(workout);
    return workout;
  }

  public getRuns(): LoggedRun[] {
    return this.runs;
  }

  public saveRun(run: LoggedRun): LoggedRun {
    this.runs.unshift(run);
    return run;
  }

  public getFeed(): FeedItem[] {
    const feed: FeedItem[] = [];

    this.runs.forEach(run => {
      feed.push({
        id: `feed-run-${run.id}`,
        type: 'run',
        title: run.title,
        timestamp: run.startTime,
        durationSeconds: run.durationSeconds,
        runData: run,
        user: {
          name: 'Akshat Shukla',
          avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
        }
      });
    });

    this.workouts.forEach(w => {
      feed.push({
        id: `feed-w-${w.id}`,
        type: 'workout',
        title: w.title,
        timestamp: w.startTime,
        durationSeconds: w.durationSeconds,
        workoutData: w,
        user: {
          name: 'Akshat Shukla',
          avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
        }
      });
    });

    return feed.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }
}

export const Storage = new StorageService();
