import { CalendarPlus } from "lucide-react";
import { Button } from "./ui/button";

export const FloatingReservationButton = () => {
  const scrollToReservation = () => {
    const reservationSection = document.getElementById("reservation");
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={scrollToReservation}
      className="fixed bottom-24 right-4 z-50 rounded-full shadow-lg bg-accent hover:bg-accent-light text-primary-dark dark:text-primary-dark transition-colors"
    >
      <CalendarPlus className="mr-2" />
      Réserver
    </Button>
  );
};