import { Phone, MessageCircle } from "lucide-react";

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      <a
        href="tel:+33123456789"
        className="flex items-center justify-center w-12 h-12 bg-primary hover:bg-primary-light text-white rounded-full shadow-lg transition-colors animate-float"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/33123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors animate-float"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
};