export const formatDate = (date: Date): string =>
  date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
  });

export const formatDayOfWeek = (date: Date): string =>
  date.toLocaleString("en-GB", { weekday: "short" });

export const formatTime = (date: Date): string =>
  date.toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
export const isValidDate = (date: Date): boolean => !isNaN(date.getTime());

export const parseDateToDayAndTime = (
  dateStr: string
): { dayOfWeek: string; time: string; formattedDate: string } | null => {
  const date = new Date(dateStr);
  if (!isValidDate(date)) return null;

  return {
    dayOfWeek: formatDayOfWeek(date),
    time: formatTime(date),
    formattedDate: formatDate(date),
  };
};
