export const toCurrency = (value: number, numberFractionDigits = 0) => {
  const formatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    minimumFractionDigits: numberFractionDigits,
  });
  return `${formatter.format(value).substr(1)}円`;
};
