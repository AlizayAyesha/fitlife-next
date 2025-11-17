import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FitnessPack = () => {
  const packages = [
    {
      name: "Essential Pack",
      icon: "⭐",
      price: "$29",
      period: "month",
      desc: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to cardio & strength classes",
        "Basic training programs",
        "Nutrition guidance",
        "Mobile app access",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Premium Pack",
      icon: "👑",
      price: "$49",
      period: "month",
      desc: "Complete fitness solution for serious enthusiasts",
      features: [
        "All Essential Pack features",
        "Personal training sessions",
        "Advanced workout programs",
        "Meal planning support",
        "Progress tracking",
        "Priority booking"
      ],
      popular: true
    },
    {
      name: "Elite Pack",
      icon: "💎",
      price: "$89",
      period: "month",
      desc: "Ultimate fitness experience with exclusive access",
      features: [
        "All Premium Pack features",
        "Private coaching session",
        "Custom training programs",
        "VIP access to events",
        "Guest passes",
        "Exclusive merchandise"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Flexible Scheduling",
      description: "Train on your own schedule with 24/7 access to our facilities and online platform.",
      icon: "📅"
    },
    {
      title: "Expert Guidance",
      description: "Get personalized training programs designed by certified fitness professionals.",
      icon: "🎯"
    },
    {
      title: "Community Support",
      description: "Join a supportive community of fitness enthusiasts working towards their goals together.",
      icon: "🤝"
    },
    {
      title: "Equipment Access",
      description: "Use premium equipment, classes, and amenities designed for optimal training results.",
      icon: "💪"
    }
  ];

  const services = [
    { name: "Group Fitness Classes", icon: "👥", desc: "High-energy group workouts" },
    { name: "Personal Training", icon: "🏋️‍♂️", desc: "One-on-one coaching sessions" },
    { name: "Nutrition Coaching", icon: "🥗", desc: "Diet and meal planning support" },
    { name: "Recovery Services", icon: "🧘", desc: "Massage and recovery therapy" },
    { name: "Online Platform", icon: "💻", desc: "Digital workout tracking" },
    { name: "Fitness Assessment", icon: "📊", desc: "Regular progress measurement" }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="fp-hero">
          <div className="container">
            <div className="fp-hero-content">
              <h1 className="fp-h1">
                Fitness Packs
              </h1>
              <p className="fp-subtitle">
                Choose the perfect fitness package for your goals. From beginner programs to elite training,
                we have everything you need to achieve your fitness objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="fp-benefits">
          <div className="container">
            <div className="fp-benefits-card">
              <h2 className="fp-section-title">Why Choose FitLife Packs</h2>
              <p className="fp-benefits-description">
                Experience comprehensive fitness solutions designed to help you reach your goals faster and more effectively.
              </p>

              <div className="fp-benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="fp-benefit-item">
                    <div className="fp-benefit-icon">{benefit.icon}</div>
                    <h3 className="fp-benefit-title">{benefit.title}</h3>
                    <p className="fp-benefit-text">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="fp-packages">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="fp-section-title">Choose Your Pack</h2>
              <p className="fp-section-text">
                Select the fitness package that best fits your lifestyle and goals.
              </p>
            </div>

            <div className="fp-packages-grid">
              {packages.map((pack, index) => (
                <div key={index} className={`fp-package-card ${pack.popular ? 'popular' : ''}`}>
                  {pack.popular && (
                    <div className="fp-popular-badge">Most Popular</div>
                  )}
                  <div className="fp-package-icon">{pack.icon}</div>
                  <h3 className="fp-package-title">{pack.name}</h3>
                  <div className="fp-package-price">{pack.price}</div>
                  <div className="fp-package-period">per {pack.period}</div>
                  <p className="fp-package-desc">{pack.desc}</p>
                  <div className="fp-package-features">
                    {pack.features.map((feature, idx) => (
                      <p key={idx}>• {feature}</p>
                    ))}
                  </div>
                  <Button className="fp-package-btn">Choose Pack</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="fp-services">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="fp-section-title">What's Included</h2>
              <p className="fp-section-text">
                Get access to premium services and amenities in every fitness pack.
              </p>
            </div>

            <div className="fp-services-grid">
              {services.map((service, index) => (
                <div key={index} className="fp-service-card">
                  <div className="fp-service-icon">{service.icon}</div>
                  <h3 className="fp-service-title">{service.name}</h3>
                  <p className="fp-service-text">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="fp-cta">
          <div className="container">
            <div className="fp-cta-card">
              <div className="fp-cta-content">
                <h2 className="fp-cta-title">
                  Start Your Fitness Journey Today
                </h2>
                <p className="fp-cta-text">
                  Join thousands of members who have transformed their lives with our comprehensive fitness packs.
                </p>

                <div className="fp-cta-buttons">
                  <Link href="/register" className="btn fp-btn-primary">Get Started Now</Link>
                  <Link href="/coach" className="btn fp-btn-secondary">Schedule Consultation</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FitnessPack;
