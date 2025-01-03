import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PackageCard } from "@/components/PackageCard";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { ReservationForm } from "@/components/ReservationForm";
import { FloatingReservationButton } from "@/components/FloatingReservationButton";
import { ReservationButton } from "@/components/ReservationButton";

const packages = [
  {
    title: "Omra Ramadan",
    description: "Vivez l'expérience unique de l'Omra pendant le mois sacré du Ramadan",
    price: "2500€",
    image: "https://images.unsplash.com/photo-1591604129939-f7c5f6145e31",
    features: [
      "Vol direct",
      "Hôtels 5 étoiles",
      "Guide francophone",
      "Pension complète",
      "Transferts inclus"
    ]
  },
  {
    title: "Hajj",
    description: "Accomplissez le cinquième pilier de l'Islam avec un accompagnement complet",
    price: "6500€",
    image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb",
    features: [
      "Visa Hajj inclus",
      "Accompagnement spirituel",
      "Hébergement premium",
      "Transport sur place",
      "Assistance 24/7"
    ]
  },
  {
    title: "Omra Premium",
    description: "Une expérience spirituelle exclusive avec des services haut de gamme",
    price: "3500€",
    image: "https://images.unsplash.com/photo-1564769625068-3e6c859d043b",
    features: [
      "Vols première classe",
      "Suites luxueuses",
      "Service conciergerie",
      "Guides privés",
      "Repas gastronomiques"
    ]
  },
  {
    title: "Omra Famille",
    description: "Un voyage spirituel adapté aux familles avec des services dédiés",
    price: "2800€",
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be",
    features: [
      "Chambres familiales",
      "Activités enfants",
      "Menus adaptés",
      "Guide familial",
      "Transferts privés"
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <ReservationButton />
      
      <section id="packages" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Offres</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Réservation</h2>
          <ReservationForm />
        </div>
      </section>

      <FloatingButtons />
      <FloatingReservationButton />
      <Footer />
    </div>
  );
};

export default Index;