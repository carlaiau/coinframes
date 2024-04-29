import { Buffer } from "buffer";
const encodeToBase64 = (data: string) => {
  const base64 = Buffer.from(data).toString("base64");
  return base64.replace(/\+/g, "-").replace(/\//g, "_");
};
const decodeFromBase64 = (encodedData: string | null): string | null => {
  if (!encodedData) {
    return null;
  }
  const base64 = encodedData.replace(/-/g, "+").replace(/_/g, "/");
  return Buffer.from(base64, "base64").toString();
};

const formatCurrency = (
  value: number,
  decimals: number = 2,
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value);
};

const formatDate = (date: Date) => {
  const options = {
    //    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export { encodeToBase64, decodeFromBase64, formatCurrency, formatDate };
