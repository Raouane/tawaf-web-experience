interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export const PackageCard = ({ title, description, price, image, features }: PackageCardProps) => {
  return (
    <div className="flip-card w-full max-w-sm mx-auto">
      <div className="flip-card-inner relative w-full h-[400px]">
        {/* Front */}
        <div className="flip-card-front absolute w-full h-full">
          <div className="relative h-full rounded-xl overflow-hidden shadow-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-lg font-semibold">À partir de {price}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back absolute w-full h-full">
          <div className="h-full bg-primary text-white p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="mb-4">{description}</p>
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a 
              href="#contact"
              className="inline-block bg-accent hover:bg-accent-light text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};