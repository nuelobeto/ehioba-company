export const formatStrDate = (str: string) => {
  const date = new Date(str);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};
