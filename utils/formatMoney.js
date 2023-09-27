export const formatMoney = (value) => {
  const options = {
    style: "currency",
    currency: "PYG",
    minimumFractionDigits: 0,
  };

  const formatter = new Intl.NumberFormat("es-PY", options);

  return formatter.format(value);
};
