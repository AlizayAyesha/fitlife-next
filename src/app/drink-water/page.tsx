import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DrinkWater = () => {
  const tips = [
    { name: "Start Your Day", icon: "🌅", desc: "Drink a glass of water as soon as you wake up to rehydrate overnight" },
    { name: "Regular Reminders", icon: "⏰", desc: "Set phone alarms or use apps to remind you throughout the day" },
    { name: "Carry a Bottle", icon: "🏺", desc: "Always have water accessible - at your desk, in your car, when exercising" },
    { name: "Before Meals", icon: "🍽️", desc: "Drink water 30 minutes before eating to aid digestion" },
    { name: "Track Progress", icon: "📊", desc: "Use apps or journals to monitor and celebrate reaching your goal" },
    { name: "Flavor Boosters", icon: "🍋", desc: "Add lemon, cucumber, or herbs for natural flavor without calories" }
  ];

  const benefits = [
    {
      title: "Improved Energy",
      description: "Proper hydration boosts energy levels and reduces fatigue.",
      icon: "⚡"
    },
    {
      title: "Better Digestion",
      description: "Water aids digestion and helps prevent constipation.",
      icon: "🍽️"
    },
    {
      title: "Weight Management",
      description: "Staying hydrated helps control appetite and metabolism.",
      icon: "⚖️"
    },
    {
      title: "Healthier Skin",
      description: "Hydration improves skin elasticity and reduces dryness.",
      icon: "✨"
    }
  ];

  const routines = [
    {
      title: "Beginner Hydration",
      icon: "🌱",
      desc: "Starting small with 4-6 glasses per day",
      features: ["Set daily reminders", "Track in a journal", "Start with water-rich foods", "Gradual increase to 8 glasses"]
    },
    {
      title: "Active Lifestyle Plan",
      icon: "🏃‍♀️",
      desc: "Higher intake for workouts and physical activity",
      features: ["Pre-workout hydration", "During exercise sips", "Post-workout replenishment", "Weather-based adjustments"]
    },
    {
      title: "Advanced Tracking",
      icon: "📱",
      desc: "Using technology and habits for optimal hydration",
      features: ["Hydration apps", "Smart water bottles", "Integration with fitness trackers", "Personalized goals"]
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
                Drink 8 Glasses of Water
              </h1>
              <p className="wlt-subtitle">
                Master the art of staying hydrated. Learn why 8 glasses matters,
                discover practical tips, and make hydration a natural habit.
              </p>
            </div>
          </div>
        </section>

        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Staying Hydrated</h2>
              <p className="wlt-benefits-description">
                Water is essential for every function in your body. Discover why proper hydration matters.
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
              <h2 className="wlt-section-title">Hydration Tips & Strategies</h2>
              <p className="wlt-section-text">
                Practical ways to incorporate 8 glasses of water into your daily routine.
              </p>
            </div>
            <div className="wlt-exercises-grid">
              {tips.map((tip, index) => (
                <div key={index} className="wlt-exercise-card">
                  <div className="wlt-exercise-icon">{tip.icon}</div>
                  <h3 className="wlt-exercise-title">{tip.name}</h3>
                  <p className="wlt-exercise-text">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wlt-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Hydration Plans</h2>
              <p className="wlt-section-text">Find the plan that works best for your lifestyle and goals.</p>
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
                    {routine.features.map((feature, idx) => (
                      <p key={idx}>• {feature}</p>
                    ))}
                  </div>
                  <Button className="wlt-program-btn" style={{border: `2px solid #3182ce`}}>
                    Start Plan
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
                  Make Hydration Second Nature
                </h2>
                <p className="wlt-cta-text">
                  Start your journey to better health today. With consistent daily water intake,
                  you'll notice improved energy, better digestion, and enhanced overall wellness.
                </p>
                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Start Tracking</Link>
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

export default DrinkWater;
