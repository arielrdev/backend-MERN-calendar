import { isValid } from "date-fns";

export const isDate = (dateValue) => {
  if (!dateValue) return false;
 
  const date = isValid(dateValue); // retorna true o false
  return date;
}