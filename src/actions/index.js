import types from "../ref/types";

export const updateTicketList = (data) => ({
  type: types.SET_TICKET,
  data,
});
