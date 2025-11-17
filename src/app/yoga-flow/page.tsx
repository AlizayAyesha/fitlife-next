import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const YogaFlow = () => {
  const flows = [
    { name: "Sun Salutation Flow", icon: "🌅", desc: "Traditional sequence linking movement and breath in graceful harmony" },
    { name: "Warrior Sequence", icon: "⚔️", desc: "Strengthening standing postures building courage and stability" },
    { name: "Balance Flow", icon: "⚖️", desc: "Focus on balance poses developing concentration and core strength" },
    { name: "Restorative Flow", icon: "😌", desc: "Gentle movements promoting deep relaxation and stress relief" },
    { name: "Power Flow", icon: "💥", desc: "Dynamic sequence combining strength and flexibility" },
    { name: "Mindful Flow", icon: "🧘", desc: "Slow, conscious movements emphasizing present moment awareness" }
  ];

  const benefits = [
    {
      title: "Mind-Body Connection",
      description: "Flow sequences synchronize breath and movement for enhanced awareness.",
      icon: "🧠"
    },
    {
      title: "Stress Reduction",
      description: "Moving meditation reduces anxiety and promotes emotional balance.",
      icon: "😌"
    },
    {
      title: "Improved Posture",
      description: "Sequential movements strengthen postural muscles and alignment.",
      icon: "📐"
    },
    {
      title: "Enhanced Mobility",
      description: "Continuous flow improves joint mobility and muscle flexibility.",
      icon: "🏃‍♀️"
    }
  ];

  const sequences = [
    {
      title: "Morning Energy Flow",
      icon: "🌅",
      duration: "30-40 minutes",
      desc: "Invigorating sequence to greet the day with strength and flexibility",
      level: "Beginner to Intermediate"
    },
    {
      title: "Strength Building Flow",
      icon: "💪",
      duration: "45-50 minutes",
      desc: "Focus on building core and upper body strength through dynamic poses",
      level: "Intermediate"
    },
    {
      title: "Relaxation Flow",
      icon: "🌸",
      duration: "20-30 minutes",
      desc: "Gentle sequence perfect for evening wind-down and stress release",
      level: "All Levels"
    },
    {
      title: "Power Yoga Flow",
      icon: "🔥",
      duration: "50-60 minutes",
      desc: "High-energy sequence combining strength, flexibility, and cardio",
      level: "Advanced"
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
                Yoga Flow
              </h1>
              <p className="wlt-subtitle">
                Experience the transformative power of movement and breath. Flow through dynamic sequences
                that build strength, flexibility, and inner peace.
              </p>
            </div>
          </div>
        </section>

        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Yoga Flow</h2>
              <p className="wlt-benefits-description">
                Discover how linking breath and movement creates profound physical and mental benefits.
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
              <h2 className="wlt-section-title">Flow Sequences</h2>
              <p className="wlt-section-text">
                Experience different styles of flow yoga designed to meet your unique needs and goals.
              </p>
            </div>
            <div className="wlt-exercises-grid">
              {flows.map((flow, index) => (
                <div key={index} className="wlt-exercise-card">
                  <div className="wlt-exercise-icon">{flow.icon}</div>
                  <h3 className="wlt-exercise-title">{flow.name}</h3>
                  <p className="wlt-exercise-text">{flow.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wlt-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Complete Flow Classes</h2>
              <p className="wlt-section-text">Find the perfect sequence for your practice level and available time.</p>
            </div>
            <div className="wlt-programs-grid">
              {sequences.map((sequence, index) => (
                <div key={index} className="wlt-program-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{sequence.icon}</div>
                    <h3 className="wlt-program-title">{sequence.title}</h3>
                  </div>
                  <p className="wlt-program-desc">{sequence.desc}</p>
                  <div className="wlt-program-features">
                    <p>• Duration: {sequence.duration}</p>
                    <p>• Level: {sequence.level}</p>
                  </div>
                  <Button className="wlt-program-btn" style={{border: `2px solid #7C3AED`}}>
                    Start Flow
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
                  Flow Into Wellness
                </h2>
                <p className="wlt-cta-text">
                  Let your practice flow naturally. Each breath guides your movement, each movement
                  deepens your breath, creating a harmonious dance between body and spirit.
                </p>
                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Begin Your Flow</Link>
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

export default YogaFlow;
