export interface TimerTickPayload {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

let targetTimeMs: number = 0;
let intervalId: ReturnType<typeof setInterval> | null = null;

function calculateRemaining(): TimerTickPayload {
  const now = Date.now();
  const diff = Math.max(0, targetTimeMs - now);

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  };
}

self.onmessage = (e: MessageEvent<{ command: string; targetDateIso?: string }>) => {
  const { command, targetDateIso } = e.data;

  if (command === "START" && targetDateIso) {
    targetTimeMs = new Date(targetDateIso).getTime();

    if (intervalId) {
      clearInterval(intervalId);
    }

    // Send immediate initial calculation
    self.postMessage(calculateRemaining());

    intervalId = setInterval(() => {
      const payload = calculateRemaining();
      self.postMessage(payload);
      if (payload.isComplete && intervalId) {
        clearInterval(intervalId);
      }
    }, 1000);
  } else if (command === "STOP" && intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};
