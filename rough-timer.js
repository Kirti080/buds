// Simple timer-state example; this does not schedule a live countdown.
export const duration = 60;

export function startTimer(seconds = duration) {
  const remaining = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  return { remaining, running: remaining > 0 };
}
