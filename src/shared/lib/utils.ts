const nextDay = new Date();
nextDay.setDate(nextDay.getDate() + 1);
nextDay.setHours(0, 0, 0, 0);

export const NEXT_DAY = nextDay.toISOString().split('T')[0];
