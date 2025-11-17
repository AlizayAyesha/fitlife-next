import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Calisthenics = () => {
  const exercises = [
    { name: "Bodyweight Squats", icon: "🏋️‍♀️", desc: "Fundamental lower body exercise building strength and mobility" },
    { name: "Push-Up Variations", icon: "💪", desc: "Classic upper body strength builder with multiple progressions" },
    { name: "Pull-Up Progressions", icon: "🪜", desc: "Upper body pulling strength using bodyweight resistance" },
    { name: "Plank Family", icon: "🔳", desc: "Core stability exercises essential for all movement" },
    { name: "Burpee Basics", icon: "🔥", desc: "Full body conditioning combining strength and cardio" },
    { name: "Pistol Squats", icon: "🦵", desc: "Advanced single-leg squat requiring balance and strength" }
  ];

  const benefits = [
    {
      title: "Functional Strength",
      description: "Build practical strength that transfers to real-life activities and sports.",
      icon: "💪"
    },
    {
      title: "Bodyweight Mastery",
      description: "Develop complete control over your body through progressive movements.",
      icon: "🎯"
    },
    {
      title: "No Equipment Needed",
      description: "Train anywhere, anytime with just your body as resistance.",
      icon: "🏠"
    },
    {
      title: "Injury Prevention",
      description: "Balanced training reduces asymmetry and improves joint stability.",
      icon: "🛡️"
    }
  ];

  const programs = [
    {
      title: "Beginner Foundation",
      icon: "🌱",
      desc: "Master basic movements and build a solid foundation",
      level: "Beginner",
      focus: ["Basic fundamentals", "Form mastery", "Progressive overload"],
      duration: "20-30 minutes"
    },
    {
      title: "Strength Builder",
      icon: "💪",
      desc: "Focus on building raw strength through compound movements",
      level: "Intermediate",
      focus: ["Heavy compounds", "Strength progressions", "Recovery techniques"],
      duration: "30-45 minutes"
    },
    {
      title: "Skill Mastery",
      icon: "🏆",
      desc: "Advanced bodyweight skills and movement combinations",
      level: "Advanced",
      focus: ["Complex skills", "Dynamic sequences", "Performance goals"],
      duration: "45-60 minutes"
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
                Calisthenics
              </h1>
              <p className="wlt-subtitle">
                Master bodyweight training and unlock your full potential. Calisthenics builds functional
                strength, incredible mobility, and mental resilience through progressive bodyweight exercises.
              </p>
            </div>
          </div>
        </section>

        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Calisthenics</h2>
              <p className="wlt-benefits-description">
                Experience the transformative power of training with just your bodyweight.
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
              <h2 className="wlt-section-title">Core Calisthenics Exercises</h2>
              <p className="wlt-section-text">
                Master these fundamental movements that form the foundation of all calisthenics training.
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

        <section className="wlt-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Calisthenics Programs</h2>
              <p className="wlt-section-text">Journey through structured progression toward bodyweight mastery.</p>
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
                    <p>• Level: {program.level}</p>
                    <p>• Duration: {program.duration}</p>
                    {program.focus.map((item, idx) => (
                      <p key={idx}>• {item}</p>
                    ))}
                  </div>
                  <Button className="wlt-program-btn" style={{border: `2px solid #059669`}}>
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
                  Own Your Bodyweight
                </h2>
                <p className="wlt-cta-text">
                  Calisthenics isn't just exercise—it's a philosophy of movement. Every rep builds not just muscle,
                  but mastery over your own body. Start your journey to functional strength today.
                </p>
                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Begin Calisthenics</Link>
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

export default Calisthenics;
