import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WeightLifting = () => {
  const exercises = [
    { name: "Bench Press", icon: "🏋️‍♂️", desc: "Builds chest and triceps strength" },
    { name: "Deadlift", icon: "💪", desc: "Full body compound movement" },
    { name: "Squat", icon: "🦵", desc: "Lower body power and stability" },
    { name: "Overhead Press", icon: "🤾‍♂️", desc: "Shoulder and upper body strength" },
    { name: "Barbell Row", icon: "🏃‍♂️", desc: "Back development and posture" },
    { name: "Pull-up", icon: "🧗", desc: "Upper body pulling strength" }
  ];

  const benefits = [
    {
      title: "Increased Muscle Mass",
      description: "Resistance training with weights stimulates muscle protein synthesis, leading to hypertrophy and increased muscle size.",
      icon: "📈"
    },
    {
      title: "Bone Density",
      description: "Weight bearing exercises help maintain and increase bone mineral density, reducing the risk of osteoporosis.",
      icon: "🦴"
    },
    {
      title: "Metabolic Health",
      description: "Regular weightlifting improves insulin sensitivity and metabolic rate, supporting better overall health.",
      icon: "⚡"
    },
    {
      title: "Mental Well-being",
      description: "Exercise releases endorphins and improves mental resilience, mood, and cognitive function.",
      icon: "🧠"
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
                Weight Lifting Training
              </h1>
              <p className="wlt-subtitle">
                Master the fundamentals of strength training with our comprehensive weight lifting programs.
                Build muscle, increase strength, and transform your physique.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Weight Lifting</h2>
              <p className="wlt-benefits-description">
                Discover why weight lifting is essential for overall fitness and long-term health benefits.
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

        {/* Exercises Section */}
        <section className="wlt-exercises">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Core Exercises</h2>
              <p className="wlt-section-text">
                Master these fundamental weight lifting exercises to build a strong foundation for your training.
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

        {/* Training Programs */}
        <section className="wlt-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Training Programs</h2>
              <p className="wlt-section-text">
                Choose the program that fits your goals and experience level.
              </p>
            </div>

            <div className="wlt-programs-grid">
              <div className="wlt-program-card">
                <h3 className="wlt-program-title">Beginner Program</h3>
                <p className="wlt-program-desc">Perfect for those new to weight lifting. Focus on form and building a foundation.</p>
                <div className="wlt-program-features">
                  <p>• 3 days per week</p>
                  <p>• Full body workouts</p>
                  <p>• Basic compound lifts</p>
                </div>
                <Button className="wlt-program-btn">Get Started</Button>
              </div>

              <div className="wlt-program-card">
                <h3 className="wlt-program-title">Intermediate Program</h3>
                <p className="wlt-program-desc">For experienced lifters ready to increase intensity and volume.</p>
                <div className="wlt-program-features">
                  <p>• 4-5 days per week</p>
                  <p>• Split routines</p>
                  <p>• Progressive overload</p>
                </div>
                <Button className="wlt-program-btn">Get Started</Button>
              </div>

              <div className="wlt-program-card">
                <h3 className="wlt-program-title">Advanced Program</h3>
                <p className="wlt-program-desc">High-intensity training for experienced athletes and competitors.</p>
                <div className="wlt-program-features">
                  <p>• 6 days per week</p>
                  <p>• Periodization cycles</p>
                  <p>• Competition prep</p>
                </div>
                <Button className="wlt-program-btn">Get Started</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="wlt-cta">
          <div className="container">
            <div className="wlt-cta-card">
              <div className="wlt-cta-content">
                <h2 className="wlt-cta-title">
                  Ready to Start Lifting?
                </h2>
                <p className="wlt-cta-text">
                  Join our weight lifting community and start your journey to becoming stronger today.
                </p>

                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Join Now</Link>
                  <Link href="/coach" className="btn wlt-btn-secondary">Get Coaching</Link>
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

export default WeightLifting;
