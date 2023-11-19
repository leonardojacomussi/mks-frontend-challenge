export const numberToCurrency = (valor: number, locale = "pt-BR", currency = "BRL"): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    compactDisplay: "short",
  }).format(valor).split(",")[0];
};