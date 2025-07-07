
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBuyNowClick = () => {
    window.open("https://wa.me/233505530447", "_blank");
  };

  const giftCards = [
    {
      name: "Amazon Card",
      image: "https://files.catbox.moe/8wb86i.jpg",
    },
    {
      name: "iTunes Card",
      image: "https://files.catbox.moe/2i1q3h.jpg",
    },
    {
      name: "Apple Card",
      image: "https://files.catbox.moe/u0r480.jpg",
    },
    {
      name: "Razer Gold",
      image: "https://files.catbox.moe/ilqno0.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-black">
      {/* Header */}
      <header className="relative bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://files.catbox.moe/xigevq.jpg" 
                alt="WUNPINI EXCHANGE Logo" 
                className="h-12 w-12 rounded-full border-2 border-white shadow-lg"
              />
              <h1 className="text-2xl font-bold text-white">WUNPINI EXCHANGE</h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-red-300 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-red-300 transition-colors">Services</a>
              <a href="#contact" className="text-white hover:text-red-300 transition-colors">Contact</a>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="text-white hover:text-red-300 transition-colors py-2">Home</a>
                <a href="#services" className="text-white hover:text-red-300 transition-colors py-2">Services</a>
                <a href="#contact" className="text-white hover:text-red-300 transition-colors py-2">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section id="home" className="text-center mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-red-500/30">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              WUNPINI EXCHANGE
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-red-300 mb-6">
              SERVICE
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-white">
              <p className="font-medium">* Bitcoin</p>
              <p className="font-medium">Gift Cards Trade</p>
              <p className="font-medium">And More</p>
            </div>
            <div className="mt-8 p-4 bg-red-600/80 rounded-xl backdrop-blur-sm">
              <p className="text-white font-bold text-xl">Contact: 0505530447</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Gift Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftCards.map((card, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-red-500/30 hover:border-red-400 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-lg mb-4 text-center">
                  {card.name}
                </h3>
                <button
                  onClick={handleBuyNowClick}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-red-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="bg-red-600/80 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-white font-bold text-xl mb-2">Phone Number</p>
                <a 
                  href="tel:0505530447" 
                  className="text-white text-lg hover:text-red-200 transition-colors"
                >
                  0505530447
                </a>
              </div>
              <div className="bg-red-600/80 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-white font-bold text-xl mb-2">WhatsApp</p>
                <button
                  onClick={handleBuyNowClick}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">
            © 2024 WUNPINI EXCHANGE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

