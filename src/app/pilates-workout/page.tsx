import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PilatesWorkout = () => {
  const exercises = [
    { name: "Pilates Hundred", icon: "💯", desc: "Core strengthening exercise with controlled breathing" },
    { name: "Roll Over", icon: "🔄", desc: "Spine articulation and back strength movement" },
    { name: "Single Leg Circles", icon: "⭕", desc: "Hip mobility and core control exercise" },
    { name: "Rolling Like a Ball", icon: "⚽", desc: "Whole body coordination and balance" },
    { name: "Open Leg Rocker", icon: "🦵", desc: "Full body coordination and precision" },
    { name: "Corkscrew", icon: "🌀", desc: "Obliques and spinal rotation exercise" }
  ];

  const benefits = [
    {
      title: "Core Strength",
      description: "Pilates focuses on building deep core stability and strength for better posture and movement.",
      icon: "💪"
    },
    {
      title: "Mind-Body Connection",
      description: "Develops mindfulness and body awareness through precise, controlled movements.",
      icon: "🧠"
    },
    {
      title: "Flexibility & Mobility",
      description: "Improves joint mobility and overall flexibility while maintaining joint stability.",
      icon: "🤸‍♀️"
    },
    {
      title: "Postural Alignment",
      description: "Corrects postural imbalances and teaches proper body alignment for daily activities.",
      icon: "📐"
    }
  ];

  const programs = [
    {
      title: "Beginner Pilates",
      icon: "🌱",
      desc: "Perfect for those new to Pilates. Focus on fundamental movements and breath control.",
      features: ["15-30 min sessions", "Basic core exercises", "Breathing techniques", "Proper form instruction"],
      color: "#10B981"
    },
    {
      title: "Intermediate Pilates",
      icon: "⚡",
      desc: "For experienced practitioners ready to challenge themselves with more advanced movements.",
      features: ["30-45 min sessions", "Advanced core work", "Props integration", "Flow sequences"],
      color: "#F59E0B"
    },
    {
      title: "Clinical Pilates",
      icon: "🏥",
      desc: "Therapeutic Pilates designed for rehabilitation and injury prevention.",
      features: ["Personalized programs", "Injury-specific focus", "Rehabilitation drills", "Progress tracking"],
      color: "#EF4444"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="wlt-hero">
          <div className="container">
            <div className="wlt-hero-content">
              <h1 className="wlt-h1">
                Pilates Workouts
              </h1>
              <p className="wlt-subtitle">
                Discover the transformative power of Pilates. Strengthen your core, improve flexibility,
                and achieve better body awareness through controlled, mindful movements.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Pilates</h2>
              <p className="wlt-benefits-description">
                Experience the mind-body connection that Pilates offers for holistic fitness and well-being.
              </p>

              <div className="wlt-benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="wlt-benefit-item">
                    <div className="wlt-benefit-icon">{benefit.icon}</div>
                    <h3 className="wlt-benefit-title">{benefit.title}</h3>
                    <p className="wlt-benefit-text">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Exercises Section */}
        <section className="wlt-exercises">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Fundamental Exercises</h2>
              <p className="wlt-section-text">
                Master these essential Pilates movements to build a strong foundation.
              </p>
            </div>

            <div className="wlt-exercises-grid">
              {exercises.map((exercise, index) => (
                <div key={index} className="wlt-exercise-card">
                  <div className="wlt-exercise-icon">{exercise.icon}</div>
                  <h3 className="wlt-exercise-title">{exercise.name}</h3>
                  <p className="wlt-exercise-text">{exercise.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="wlt-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Pilates Programs</h2>
              <p className="wlt-section-text">
                Choose the program that matches your experience level and goals.
              </p>
            </div>

            <div className="wlt-programs-grid">
              {programs.map((program, index) => (
                <div key={index} className="wlt-program-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{program.icon}</div>
                    <h3 className="wlt-program-title">{program.title}</h3>
                  </div>
                  <p className="wlt-program-desc">{program.desc}</p>
                  <div className="wlt-program-features">
                    {program.features.map((feature, idx) => (
                      <p key={idx}>• {feature}</p>
                    ))}
                  </div>
                  <Button className="wlt-program-btn" style={{border: `2px solid ${program.color}`}}>
                    Start Program
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="wlt-cta">
          <div className="container">
            <div className="wlt-cta-card">
              <div className="wlt-cta-content">
                <h2 className="wlt-cta-title">
                  Transform Your Practice
                </h2>
                <p className="wlt-cta-text">
                  Whether you're seeking rehabilitation, strength, or mindfulness, Pilates offers something for everyone.
                  Join our Pilates community today.
                </p>

                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Start Your Journey</Link>
                  <Link href="/coach" className="btn wlt-btn-secondary">Book a Class</Link>
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

export default PilatesWorkout;
