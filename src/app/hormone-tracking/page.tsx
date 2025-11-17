import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HormoneTracking = () => {
  const methods = [
    { name: "Cycle Tracking Apps", icon: "📱", desc: "Digital tools to monitor cycle phases and predict fertile windows" },
    { name: "Basal Body Temperature", icon: "🌡️", desc: "Daily temperature monitoring to identify ovulation patterns" },
    { name: "Cervical Mucus Monitoring", icon: "💧", desc: "Observing changes in cervical fluid as hormonal indicators" },
    { name: "LH Testing Kits", icon: "🧪", desc: "Home ovulation prediction tests for precise timing" },
    { name: "Symptom Journaling", icon: "📓", desc: "Tracking mood, energy, and physical symptoms throughout cycle" },
    { name: "Sleep & Energy Tracking", icon: "😴", desc: "Monitoring fatigue patterns and sleep quality across phases" }
  ];

  const benefits = [
    {
      title: "Empowered Fertility",
      description: "Understand your body better and optimize timing for family planning.",
      icon: "👶"
    },
    {
      title: "Health Awareness",
      description: "Detect irregularities early and understand how cycle affects overall health.",
      icon: "🔍"
    },
    {
      title: "Performance Optimization",
      description: "Align training intensity with hormonal phases for better results.",
      icon: "⚡"
    },
    {
      title: "Mental Well-being",
      description: "Anticipate mood fluctuations and manage PMS/PMDD effectively.",
      icon: "🧠"
    }
  ];

  const guides = [
    {
      title: "Beginner Hormone Guide",
      icon: "🌱",
      desc: "Learn the basics of menstrual cycles and hormone tracking",
      level: "New to tracking",
      whatYouLearn: ["Cycle phases explained", "Basic tracking methods", "Common misconceptions"]
    },
    {
      title: "Advanced Fertility Awareness",
      icon: "🔬",
      desc: "Comprehensive fertility awareness methods for conception",
      level: "Planning pregnancy",
      whatYouLearn: ["Fertile window identification", "Multiple method confirmation", "Conception optimization"]
    },
    {
      title: "Cycle Syncing Fitness",
      icon: "💪",
      desc: "Align workouts and nutrition with hormonal phases",
      level: "Active lifestyle",
      whatYouLearn: ["Phase-appropriate training", "Nutrition cycle syncing", "Recovery optimization"]
    },
    {
      title: "Health & Wellness Tracking",
      icon: "🏥",
      desc: "Use cycles as a window into overall health and well-being",
      level: "Health focused",
      whatYouLearn: ["Symptom pattern recognition", "Health indicator monitoring", "Medical consultation preparation"]
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
                Hormone Tracking
              </h1>
              <p className="wlt-subtitle">
                Understand your body's natural rhythms and optimize health, fitness, and wellness.
                Track hormonal changes to unlock greater awareness and make informed decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Hormone Tracking</h2>
              <p className="wlt-benefits-description">
                Gain profound insights into how your hormones influence every aspect of your health and life.
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
              <h2 className="wlt-section-title">Tracking Methods</h2>
              <p className="wlt-section-text">
                Explore different approaches to monitoring hormonal changes and understanding cycle patterns.
              </p>
            </div>
            <div className="wlt-exercises-grid">
              {methods.map((method, index) => (
                <div key={index} className="wlt-exercise-card">
                  <div className="wlt-exercise-icon">{method.icon}</div>
                  <h3 className="wlt-exercise-title">{method.name}</h3>
                  <p className="wlt-exercise-text">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wlt-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Hormone Tracking Guides</h2>
              <p className="wlt-section-text">Find the learning path that matches your goals and experience level.</p>
            </div>
            <div className="wlt-programs-grid">
              {guides.map((guide, index) => (
                <div key={index} className="wlt-program-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{guide.icon}</div>
                    <h3 className="wlt-program-title">{guide.title}</h3>
                  </div>
                  <p className="wlt-program-desc">{guide.desc}</p>
                  <div className="wlt-program-features">
                    <p>• Level: {guide.level}</p>
                    {guide.whatYouLearn.map((item, idx) => (
                      <p key={idx}>• {item}</p>
                    ))}
                  </div>
                  <Button className="wlt-program-btn" style={{border: `2px solid #EC4899`}}>
                    Start Learning
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
                  Know Your Body, Love Your Body
                </h2>
                <p className="wlt-cta-text">
                  Hormone tracking empowers you to understand the complex dance of hormones that influence your
                  energy, mood, fertility, and health. Start your journey of self-awareness today.
                </p>
                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Begin Tracking</Link>
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

export default HormoneTracking;
