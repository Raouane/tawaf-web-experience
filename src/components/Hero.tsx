export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Votre Voyage Spirituel Commence Ici
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Découvrez nos offres exclusives pour le Hajj et l'Omra avec un accompagnement personnalisé
        </p>
        <a 
          href="#packages"
          className="inline-block bg-accent hover:bg-accent-light text-primary-dark dark:text-primary-dark font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Découvrir nos offres
        </a>
      </div>
    </div>
  );
};