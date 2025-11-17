import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PowerYoga = () => {
  const poses = [
    { name: "Warrior III", icon: "🧘‍♀️", desc: "Standing balance pose that builds strength and focus" },
    { name: "Crow Pose", icon: "🐦", desc: "Arm balance that develops upper body strength and core stability" },
    { name: "Wheel Pose", icon: "🌉", desc: "Backbend that opens the heart and strengthens the posterior chain" },
    { name: "Chair Pose Flow", icon: "🪑", desc: "Dynamic standing pose that builds leg strength and endurance" },
    { name: "Dolphin Push-ups", icon: "🏊‍♀️", desc: "Inversion preparation that strengthens shoulders and arms" },
    { name: "Warrior II to Triangle", icon: "⚔️", desc: "Flow between standing poses for balance and strength" }
  ];

  const benefits = [
    {
      title: "Increased Flexibility",
      description: "Progressive stretching and dynamic movement improve joint mobility and muscle elasticity.",
      icon: "🧘"
    },
    {
      title: "Enhanced Balance",
      description: "Proprioception exercises develop better body awareness and stability in all positions.",
      icon: "⚖️"
    },
    {
      title: "Mental Clarity",
      description: "Mind-body connection practices reduce stress and improve mental focus and concentration.",
      icon: "🧠"
    },
    {
      title: "Core Strength",
      description: "Dynamic core engagement builds functional strength for better posture and stability.",
      icon: "💪"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-hero">
          <div className="container">
            <div className="py-hero-content">
              <h1 className="py-h1">
                Power Yoga Training
              </h1>
              <p className="py-subtitle">
                Experience the intense fusion of traditional yoga with strength-building exercises.
                Build power, flexibility, and mental resilience through dynamic flows and challenging poses.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-benefits">
          <div className="container">
            <div className="py-benefits-card">
              <h2 className="py-section-title">Benefits of Power Yoga</h2>
              <p className="py-benefits-description">
                Power Yoga combines the spiritual benefits of traditional yoga with physical strength training,
                creating a holistic practice that transforms both body and mind.
              </p>

              <div className="py-benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="py-benefit-item">
                    <div className="py-benefit-icon">{benefit.icon}</div>
                    <h3 className="py-benefit-title">{benefit.title}</h3>
                    <p className="py-benefit-text">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Poses Section */}
        <section className="py-poses">
          <div className="container">
            <div className="py-section-center">
              <h2 className="py-section-title">Power Yoga Poses</h2>
              <p className="py-section-text">
                Master these challenging poses that combine strength, balance, and flexibility for a complete practice.
              </p>
            </div>

            <div className="py-poses-grid">
              {poses.map((pose, index) => (
                <div key={index} className="py-pose-card">
                  <div className="py-pose-icon">{pose.icon}</div>
                  <h3 className="py-pose-title">{pose.name}</h3>
                  <p className="py-pose-text">{pose.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-programs">
          <div className="container">
            <div className="py-section-center">
              <h2 className="py-section-title">Training Programs</h2>
              <p className="py-section-text">
                Structured programs that progressively build your power yoga practice and strength.
              </p>
            </div>

            <div className="py-programs-grid">
              <div className="py-program-card">
                <h3 className="py-program-title">Foundation Flow</h3>
                <p className="py-program-desc">Perfect for beginners building basic strength and flexibility in power yoga poses.</p>
                <div className="py-program-features">
                  <p>• 45-60 minute sessions</p>
                  <p>• Foundational poses</p>
                  <p>• Breath awareness focus</p>
                </div>
                <Button className="py-program-btn">Get Started</Button>
              </div>

              <div className="py-program-card">
                <h3 className="py-program-title">Power Series</h3>
                <p className="py-program-desc">Intermediate to advanced practitioners ready to intensify their practice with complex flows.</p>
                <div className="py-program-features">
                  <p>• 60-75 minute sessions</p>
                  <p>• Advanced sequencing</p>
                  <p>• Strength building emphasis</p>
                </div>
                <Button className="py-program-btn">Get Started</Button>
              </div>

              <div className="py-program-card">
                <h3 className="py-program-title">Warrior Within</h3>
                <p className="py-program-desc">Elite program for experienced yogis seeking peak physical and mental performance.</p>
                <div className="py-program-features">
                  <p>• 75+ minute sessions</p>
                  <p>• Peak performance training</p>
                  <p>• Advanced inversions</p>
                </div>
                <Button className="py-program-btn">Get Started</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-cta">
          <div className="container">
            <div className="py-cta-card">
              <div className="py-cta-content">
                <h2 className="py-cta-title">
                  Find Your Inner Power
                </h2>
                <p className="py-cta-text">
                  Discover the transformative power of yoga combined with strength training.
                  Join our Power Yoga community and unlock your full potential.
                </p>

                <div className="py-cta-buttons">
                  <Link href="/register" className="btn py-btn-primary">Join Now</Link>
                  <Link href="/coach" className="btn py-btn-secondary">Get Coaching</Link>
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

export default PowerYoga;
