import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

const updateTimeSlots = () => {
  const date = new Date();
  const time = date.getHours();

  let availableTimeSlots = {
    morning: [],
    afternoon: [],
    evening: []
  };

  if (time >= 6 && time < 12) {
    availableTimeSlots.morning = ["12"];
  } else if (time >= 12 && time < 18) {
    availableTimeSlots.afternoon = ["20"];
  } else {
    availableTimeSlots.evening = ["10"];
  }

  return availableTimeSlots;
};

const initTimeSlots = (initAvailableTimeSlots) => {
  return updateTimeSlots();
};

const Reservations = () => {
  const [availableTimeSlots, dispatchTimeslotsOnDateChange] = useReducer(
    updateTimeSlots,
    { morning: [], afternoon: [], evening: [] },
    initTimeSlots
  );

  const navigate = useNavigate();

  const submitReservation = (reservation) => {
    console.log("Reservation Form Data:", reservation);
    console.log("Reserved");

    const confirmPageMap = new Map();
    confirmPageMap.set("confirmedBooking", {
      name: 'Confirmed Booking',
      path: '/ConfirmedBooking',
      anchorable: true
    });

    // Simulate successful submission by always navigating to the confirm page
    navigate(confirmPageMap.get("confirmedBooking").path);
  };

  return (
    <>
      <BookingForm
        submitReservation={submitReservation}
        availableTimeSlots={availableTimeSlots}
        dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChange}
      />
    </>
  );
};

export default Reservations;