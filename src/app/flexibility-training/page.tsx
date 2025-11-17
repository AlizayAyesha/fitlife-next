import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FlexibilityTraining = () => {
  const stretches = [
    { name: "Dynamic Leg Swings", icon: "🦵", desc: "Dynamic hamstring and hip flexibility movements" },
    { name: "Arm Circles", icon: "💪", desc: "Full range shoulder mobility and flexibility" },
    { name: "Torso Twists", icon: "🔄", desc: "Spinal rotation for improved back flexibility" },
    { name: "Neck Rolls", icon: "🔄", desc: "Gentle cervical spine mobility" },
    { name: "Ankle Circles", icon: "🦶", desc: "Lower leg and foot articulation" },
    { name: "Wrist Flexors", icon: "🤸", desc: "Upper extremity flexibility and strength" }
  ];

  const benefits = [
    {
      title: "Improved Range of Motion",
      description: "Increased joint mobility and muscle elasticity for better movement quality.",
      icon: "🏃‍♀️"
    },
    {
      title: "Injury Prevention",
      description: "Flexible muscles are less prone to strains and can handle unexpected movements.",
      icon: "🛡️"
    },
    {
      title: "Better Posture",
      description: "Lengthened muscles help maintain proper postural alignment.",
      icon: "📐"
    },
    {
      title: "Stress Reduction",
      description: "Flexibility training promotes relaxation and reduces muscle tension.",
      icon: "😌"
    }
  ];

  const routines = [
    {
      title: "Full Body Flexibility",
      icon: "🤸‍♀️",
      desc: "Comprehensive stretching routine for all major muscle groups",
      duration: "20-25 minutes",
      focus: ["Upper body", "Lower body", "Spinal mobility", "Joint articulation"]
    },
    {
      title: "Athletic Performance",
      icon: "⚽",
      desc: "Dynamic flexibility for sports and high-intensity activities",
      duration: "15-20 minutes",
      focus: ["Dynamic movements", "Sport-specific ranges", "Power enhancement", "Recovery acceleration"]
    },
    {
      title: "Daily Mobility Flow",
      icon: "🌅",
      desc: "Gentle, restorative flexibility practice for everyday wellness",
      duration: "10-15 minutes",
      focus: ["Gentle movements", "Breath-synchronized", "Relaxation focus", "Mind-body connection"]
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
                Flexibility Training
              </h1>
              <p className="wlt-subtitle">
                Enhance your body's mobility and range of motion through systematic flexibility training.
                Build strength through a full range of motion for optimal health and performance.
              </p>
            </div>
          </div>
        </section>

        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Flexibility Training</h2>
              <p className="wlt-benefits-description">
                Discover how consistent flexibility work transforms your movement patterns and quality of life.
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
              <h2 className="wlt-section-title">Flexibility Movements</h2>
              <p className="wlt-section-text">
                Master these fundamental flexibility exercises to improve your mobility and strength.
              </p>
            </div>
            <div className="wlt-exercises-grid">
              {stretches.map((stretch, index) => (
                <div key={index} className="wlt-exercise-card">
                  <div className="wlt-exercise-icon">{stretch.icon}</div>
                  <h3 className="wlt-exercise-title">{stretch.name}</h3>
                  <p className="wlt-exercise-text">{stretch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wlt-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Flexibility Programs</h2>
              <p className="wlt-section-text">Choose the flexibility routine that best serves your goals and lifestyle.</p>
            </div>
            <div className="wlt-programs-grid">
              {routines.map((routine, index) => (
                <div key={index} className="wlt-program-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{routine.icon}</div>
                    <h3 className="wlt-program-title">{routine.title}</h3>
                  </div>
                  <p className="wlt-program-desc">{routine.desc}</p>
                  <div className="wlt-program-features">
                    <p>• Duration: {routine.duration}</p>
                    {routine.focus.map((item, idx) => (
                      <p key={idx}>• {item}</p>
                    ))}
                  </div>
                  <Button className="wlt-program-btn" style={{border: `2px solid #F59E0B`}}>
                    Start Training
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
                  Move Freely, Live Better
                </h2>
                <p className="wlt-cta-text">
                  Flexibility is the foundation of healthy movement. Regular training improves your
                  quality of life, prevents injuries, and makes every physical activity more enjoyable.
                </p>
                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Begin Training</Link>
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

export default FlexibilityTraining;
