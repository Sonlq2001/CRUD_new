import { addMinutes, format } from "date-fns";

export const eachMinuteOfInterval = ({
  start = new Date(2000, 1, 1, 0),
  end = new Date(2000, 1, 1, 24),
  formatTime = "HH:mm",
  step = 1,
  perStep = 15,
}: {
  start?: Date;
  end?: Date;
  formatTime?: string;
  step?: number;
  perStep?: number;
}): string[] => {
  start.setMinutes(
    Math.ceil(start.getMinutes() / perStep / step) * perStep * step
  );

  let currentTime = start;

  const times = [];

  while (currentTime.getTime() < end.getTime()) {
    times.push(format(currentTime, formatTime));
    currentTime = addMinutes(currentTime, step * perStep);
  }

  return times;
};
