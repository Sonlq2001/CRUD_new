import { format, utcToZonedTime } from "date-fns-tz";
import ja from "date-fns/locale/ja/index";

export const formatDate = (
  date: string | Date,
  pattern = "yyyy/MM/dd HH:mm"
) => {
  return format(new Date(date), pattern);
};

export const formatUTCDate = (
  date: string | number | Date,
  pattern = "yyyy-MM-dd HH:mm:ss"
) =>
  format(utcToZonedTime(new Date(date), "UTC"), pattern, { timeZone: "UTC" });

export const formatJaDate = (
  date: Date | string,
  pattern = "yyyy年MM月dd日（E）hh:mm"
) => {
  return format(new Date(date), pattern, { locale: ja });
};
