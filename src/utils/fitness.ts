/**
 * Calculates estimated 1 Rep Max using Brzycki formula
 */
export function calculate1RM(weightKg: number, reps: number): number {
  if (reps <= 1) return weightKg;
  return Math.round(weightKg * (36 / (37 - Math.min(reps, 36))));
}

/**
 * Calculates average pace (min/km) from distance and duration
 */
export function calculatePace(distanceKm: number, durationSeconds: number): string {
  if (distanceKm <= 0) return '0:00';
  const paceMinutes = (durationSeconds / 60) / distanceKm;
  const mins = Math.floor(paceMinutes);
  const secs = Math.round((paceMinutes - mins) * 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

/**
 * Formats duration in seconds to HH:MM:SS or MM:SS
 */
export function formatDuration(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
