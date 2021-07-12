import { parseISO } from "date-fns";
import { format } from "date-fns/esm";

export const getDate = (date) => {
  const [year, month, day] = date.split('-');

  return format(new Date(year, (month === 0 ? 0 : month - 1), day), 'MMMM do yyyy');
}

export const parseDate = (fullDate) => {
  const date = parseISO(fullDate).toDateString();
  const time = parseISO(fullDate).toLocaleTimeString('en-US');

  return { date, time };
}

export const containerVariants  = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 }},
  exit: { opacity: 0, y: '100vh', transition: { duration: 0.3 } }
};