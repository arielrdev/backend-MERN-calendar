import { getTime, isValid } from "date-fns";

export const isDate = (dateValue) => {
  if (!dateValue) return false;

  const getMiliseconds = getTime(dateValue);
 
  const date = isValid(getMiliseconds); // retorna true o false
  return date;
}