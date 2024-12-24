import { CalendarPlus } from "lucide-react";
import { Button } from "./ui/button";

export const ReservationButton = () => {
  const scrollToReservation = () => {
    const reservationSection = document.getElementById("reservation");
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center my-16">
      <Button
        onClick={scrollToReservation}
        className="group bg-primary hover:bg-primary-dark dark:bg-mauve dark:hover:bg-mauve-dark text-white px-8 py-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
      >
        <CalendarPlus className="mr-2 h-6 w-6 text-accent group-hover:text-accent-light" />
        <span className="text-lg font-semibold">Réserver Maintenant</span>
      </Button>
    </div>
  );
};