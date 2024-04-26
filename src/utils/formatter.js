import moment from "moment";

export const dateFormatter = (date) => moment(date).format("MMM Do YY");

export const timeFormatter = (time) => moment(time).format("HH:mm");
