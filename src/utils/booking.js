/**
 * Generates the external booking engine URL for the hotel.
 * 
 * @param {Object} options
 * @param {string} options.locale - The current language/locale (e.g. 'es', 'en', 'pt').
 * @param {string} [options.hotelId="3032"] - The hotel ID in the booking system.
 * @param {string} [options.roomId=null] - Optional room ID to pre-select a specific room.
 * @param {string} [options.checkin=""] - Optional check-in date (YYYY-MM-DD).
 * @param {string} [options.checkout=""] - Optional check-out date (YYYY-MM-DD).
 * @param {number} [options.adults=0] - Optional number of adults.
 * @param {number} [options.children=0] - Optional number of children.
 * @returns {string} The fully qualified booking engine URL.
 */
export function getBookingUrl({
  locale,
  hotelId = "3032",
  roomId = null,
  checkin = "",
  checkout = "",
  adults = 0,
  children = 0
}) {
  const params = new URLSearchParams({
    idHotel: hotelId,
    forzarLimpiar: "true"
  });

  if (roomId) {
    params.append("idHabitacion", roomId);
  }
  if (checkin) {
    params.append("fechaDesde", checkin);
  }
  if (checkout) {
    params.append("fechaHasta", checkout);
  }
  if (adults > 0) {
    params.append("adultos", adults.toString());
  }
  if (children > 0) {
    params.append("ninios", children.toString());
  }

  return `https://www.todoalojamiento.com/portal/${locale}?${params.toString()}`;
}
