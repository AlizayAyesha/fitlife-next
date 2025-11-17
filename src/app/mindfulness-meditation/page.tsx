import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MindfulnessMeditation = () => {
  const techniques = [
    { name: "Breath Awareness", icon: "🫁", desc: "Focus on your natural breathing pattern to center the mind" },
    { name: "Body Scan", icon: "🧘‍♀️", desc: "Systematically bring attention to different parts of the body" },
    { name: "Loving Kindness", icon: "❤️", desc: "Practice compassion and kindness toward yourself and others" },
    { name: "Walking Meditation", icon: "🚶‍♀️", desc: "Mindful walking combined with breath awareness" },
    { name: "Mantra Meditation", icon: "📿", desc: "Use sound or phrase repetition for focus and calm" },
    { name: "Visualization", icon: "🌅", desc: "Create positive mental images to promote relaxation" }
  ];

  const benefits = [
    {
      title: "Reduced Stress",
      description: "Mindfulness meditation significantly lowers cortisol levels and stress responses.",
      icon: "😌"
    },
    {
      title: "Better Focus",
      description: "Regular practice enhances concentration and cognitive function.",
      icon: "🎯"
    },
    {
      title: "Emotional Balance",
      description: "Develop greater emotional resilience and improved mood regulation.",
      icon: "⚖️"
    },
    {
      title: "Better Sleep",
      description: "Mindfulness practices promote deeper, more restorative sleep patterns.",
      icon: "🌙"
    }
  ];

  const programs = [
    {
      title: "Beginner Mindfulness",
      icon: "🌱",
      desc: "Perfect for those new to meditation. Start with short, guided sessions.",
      duration: "5-10 minutes daily",
      features: ["Breath awareness basics", "Simple sitting posture", "Guided audio sessions", "Stress relief techniques"]
    },
    {
      title: "Intermediate Practice",
      icon: "🌿",
      desc: "For practitioners ready to deepen their mindfulness experience.",
      duration: "15-20 minutes daily",
      features: ["Extended meditation periods", "Advanced breath work", "Walking meditation", "Mindful movement"]
    },
    {
      title: "Daily Mindfulness Routine",
      icon: "☯️",
      desc: "Comprehensive daily practice for holistic well-being benefits.",
      duration: "20-30 minutes daily",
      features: ["Full meditation practice", "Movement integration", "Reflection journaling", "Community connection"]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="wlt-hero">
          <div className="container">
            <div className="wlt-hero-content">
              <h1 className="wlt-h1">
                Mindfulness Meditation
              </h1>
              <p className="wlt-subtitle">
                Discover the transformative power of mindfulness. Learn techniques to quiet the mind,
                reduce stress, and live more present in each moment.
              </p>
            </div>
          </div>
        </section>

        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Mindfulness</h2>
              <p className="wlt-benefits-description">
                Experience the profound impact mindfulness has on mental and physical well-being.
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

        <section className="wlt-exercises">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Mindfulness Techniques</h2>
              <p className="wlt-section-text">
                Explore different approaches to mindfulness meditation tailored to your needs.
              </p>
            </div>
            <div className="wlt-exercises-grid">
              {techniques.map((technique, index) => (
                <div key={index} className="wlt-exercise-card">
                  <div className="wlt-exercise-icon">{technique.icon}</div>
                  <h3 className="wlt-exercise-title">{technique.name}</h3>
                  <p className="wlt-exercise-text">{technique.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wlt-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Mindfulness Programs</h2>
              <p className="wlt-section-text">Find the practice level that matches your experience and commitment.</p>
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
                    <p><strong>• Duration:</strong> {program.duration}</p>
                    {program.features.map((feature, idx) => (
                      <p key={idx}>• {feature}</p>
                    ))}
                  </div>
                  <Button className="wlt-program-btn" style={{border: `2px solid #805ad5`}}>
                    Begin Practice
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wlt-cta">
          <div className="container">
            <div className="wlt-cta-card">
              <div className="wlt-cta-content">
                <h2 className="wlt-cta-title">
                  Begin Your Mindfulness Journey
                </h2>
                <p className="wlt-cta-text">
                  Mindfulness is a skill that can be developed over time. Start small, be patient with yourself,
                  and watch as greater peace and awareness become part of your daily experience.
                </p>
                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Start Meditating</Link>
                  <Link href="/user-demo" className="btn wlt-btn-secondary">View Dashboard</Link>
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

export default MindfulnessMeditation;
