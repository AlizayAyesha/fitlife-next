import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardioStrength = () => {
  const exercises = [
    { name: "Burpees", icon: "🏃‍♂️", desc: "Full body exercise combining jumping and push-ups" },
    { name: "Mountain Climbers", icon: "⛰️", desc: "Dynamic core and cardio movement" },
    { name: "Jump Squats", icon: "💥", desc: "Explosive lower body compound exercise" },
    { name: "Push-up Jacks", icon: "🤸‍♂️", desc: "Push-ups combined with jumping jacks" },
    { name: "High Knees", icon: "🏃‍♀️", desc: "High-intensity cardio running in place" },
    { name: "Plank Jacks", icon: "🏋️‍♀️", desc: "Core stability with cardio intensity" }
  ];

  const benefits = [
    {
      title: "Improved Cardiovascular Health",
      description: "Strengthens heart and improves circulation, reducing risk of heart disease and improving endurance.",
      icon: "❤️"
    },
    {
      title: "Increased Fat Loss",
      description: "High-intensity cardio combined with strength training accelerates metabolism and fat burning.",
      icon: "🔥"
    },
    {
      title: "Enhanced Metabolism",
      description: "Building muscle mass through strength training elevates resting metabolic rate for better calorie burn.",
      icon: "⚡"
    },
    {
      title: "Better Endurance",
      description: "Combines cardio stamina with muscular endurance for improved overall physical performance.",
      icon: "💪"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="cst-hero">
          <div className="container">
            <div className="cst-hero-content">
              <h1 className="cst-h1">
                Cardio & Strength Training
              </h1>
              <p className="cst-subtitle">
                Experience the perfect blend of high-intensity cardio and strength training.
                Build muscle, burn fat, and boost your cardiovascular health simultaneously.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="cst-benefits">
          <div className="container">
            <div className="cst-benefits-card">
              <h2 className="cst-section-title">Benefits of Cardio & Strength Training</h2>
              <p className="cst-benefits-description">
                Combine cardiovascular fitness with strength training for optimal results in fat loss, muscle building, and overall health improvement.
              </p>

              <div className="cst-benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cst-benefit-item">
                    <div className="cst-benefit-icon">{benefit.icon}</div>
                    <h3 className="cst-benefit-title">{benefit.title}</h3>
                    <p className="cst-benefit-text">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exercises Section */}
        <section className="cst-exercises">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="cst-section-title">High-Intensity Exercises</h2>
              <p className="cst-section-text">
                Master these dynamic exercises that combine cardio intensity with strength training movements.
              </p>
            </div>

            <div className="cst-exercises-grid">
              {exercises.map((exercise, index) => (
                <div key={index} className="cst-exercise-card">
                  <div className="cst-exercise-icon">{exercise.icon}</div>
                  <h3 className="cst-exercise-title">{exercise.name}</h3>
                  <p className="cst-exercise-text">{exercise.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="cst-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="cst-section-title">Training Programs</h2>
              <p className="cst-section-text">
                Structured programs designed to maximize cardio and strength gains simultaneously.
              </p>
            </div>

            <div className="cst-programs-grid">
              <div className="cst-program-card">
                <h3 className="cst-program-title">HIIT Circuit</h3>
                <p className="cst-program-desc">High-intensity interval training combining cardio bursts with strength exercises.</p>
                <div className="cst-program-features">
                  <p>• 30-45 minute sessions</p>
                  <p>• Circuit style training</p>
                  <p>• Maximum fat burn</p>
                </div>
                <Button className="cst-program-btn">Get Started</Button>
              </div>

              <div className="cst-program-card">
                <h3 className="cst-program-title">Strength Cardio Fusion</h3>
                <p className="cst-program-desc">Balanced approach with equal focus on building strength and cardiovascular endurance.</p>
                <div className="cst-program-features">
                  <p>• 45-60 minute sessions</p>
                  <p>• Compound movements</p>
                  <p>• Progressive overload</p>
                </div>
                <Button className="cst-program-btn">Get Started</Button>
              </div>

              <div className="cst-program-card">
                <h3 className="cst-program-title">Athletic Performance</h3>
                <p className="cst-program-desc">Advanced program for athletes focused on functional strength and explosive power.</p>
                <div className="cst-program-features">
                  <p>• 60+ minute sessions</p>
                  <p>• Plyometric exercises</p>
                  <p>• Sport-specific training</p>
                </div>
                <Button className="cst-program-btn">Get Started</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cst-cta">
          <div className="container">
            <div className="cst-cta-card">
              <div className="cst-cta-content">
                <h2 className="cst-cta-title">
                  Ready to Transform Your Fitness?
                </h2>
                <p className="cst-cta-text">
                  Join our Cardio & Strength program and experience the perfect combination of heart health and muscular development.
                </p>

                <div className="cst-cta-buttons">
                  <Link href="/register" className="btn cst-btn-primary">Join Now</Link>
                  <Link href="/coach" className="btn cst-btn-secondary">Get Coaching</Link>
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

export default CardioStrength;
