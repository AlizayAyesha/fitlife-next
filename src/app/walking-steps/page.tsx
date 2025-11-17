import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WalkingSteps = () => {
  const benefits = [
    {
      title: "Cardiovascular Health",
      description: "Regular walking lowers blood pressure, improves circulation, and strengthens your heart.",
      icon: "❤️"
    },
    {
      title: "Weight Management",
      description: "Burns calories steadily, creating a sustainable deficit for natural weight loss without exhaustion.",
      icon: "⚖️"
    },
    {
      title: "Mental Health Boost",
      description: "Reduces stress, anxiety, and depression while increasing endorphin production and mental clarity.",
      icon: "🧠"
    },
    {
      title: "Bone Density",
      description: "Maintains and improves bone strength, helping prevent osteoporosis as you age.",
      icon: "🦴"
    },
    {
      title: "Longevity",
      description: "Every extra minute of walking adds years to your life, backed by extensive research.",
      icon: "🌟"
    },
    {
      title: "Joint Health",
      description: "Improves joint mobility and reduces inflammation in knees, hips, and ankles.",
      icon: "🦵"
    }
  ];

  const trackingMethods = [
    {
      name: "Phone Pedometer Apps",
      description: "Use built-in phone tracking (iOS Health, Google Fit) or dedicated apps like Pacer, Walkmeter",
      pros: "Free, accurate, detailed insights",
      cons: "Requires remembering to carry phone",
      icon: "📱"
    },
    {
      name: "Fitness Trackers/Watches",
      description: "Wearable devices like Fitbit, Apple Watch, or Garmin automatically track all day",
      pros: "Convenient, always tracking, heart rate monitoring",
      cons: "Separate purchase required",
      icon: "⌚"
    },
    {
      name: "Smartphone GPS",
      description: "Use mapping apps to measure distance and convert to steps (multiply km by ~1300)",
      pros: "No extra cost, available everywhere",
      cons: "Less accurate for indoor activity",
      icon: "📍"
    },
    {
      name: "Manual Estimation",
      description: "Estimate steps based on time and activity type using known conversion rates",
      pros: "Always available, no tech required",
      cons: "Less accurate but gets easier with practice",
      icon: "🧮"
    }
  ];

  const dailyStrategies = [
    {
      time: "Morning (30 mins)",
      activities: ["Walk to work if possible", "Morning dog walk", "Park walk before breakfast"],
      steps: "~2,000 steps",
      icon: "🌅"
    },
    {
      time: "Midday (30 mins)",
      activities: ["Lunch break walk", "Office walking meeting", "Shopping errands on foot"],
      steps: "~2,000 steps",
      icon: "☀️"
    },
    {
      time: "Evening (20 mins)",
      activities: ["After-dinner walk", "Evening dog walk", "Neighborhood stroll"],
      steps: "~1,000 steps",
      icon: "🌆"
    }
  ];

  const stepConversion = [
    {
      activity: "Normal walking (3 mph)",
      steps_per_min: "80-100",
      note: "Most common daily walking pace",
      icon: "🚶‍♀️"
    },
    {
      name: "Brisk walking (4 mph)",
      steps_per_min: "100-120",
      note: "Faster pace for efficiency",
      icon: "🏃‍♀️"
    },
    {
      name: "Slow walking (2 mph)",
      steps_per_min: "60-80",
      note: "Gentle pace for beginners",
      icon: "🐌"
    },
    {
      name: "Shopping/Purposeful walking",
      steps_per_min: "70-90",
      note: "Slower with stops and starts",
      icon: "🛒"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="sc-hero">
          <div className="container">
            <div className="sc-hero-content">
              <h1 className="sc-h1">
                Walking 5000 Steps Daily
              </h1>
              <p className="sc-subtitle">
                The foundation of lifelong fitness starts with consistent movement. Learn how to hit
                your daily step goal, why it matters, and how to make it an effortless part of your routine.
              </p>
            </div>
          </div>
        </section>

        <section className="sc-benefits">
          <div className="container">
            <div className="sc-benefits-card">
              <h2 className="sc-section-title">Why 5000 Steps Matters</h2>
              <p className="sc-benefits-description">
                Walking is medicine, and the 5000-step baseline represents the minimum daily movement
                needed to maintain good health and prevent the diseases associated with a sedentary lifestyle.
              </p>
              <div className="sc-benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="sc-benefit-item">
                    <div className="sc-benefit-icon">{benefit.icon}</div>
                    <h3 className="sc-benefit-title">{benefit.title}</h3>
                    <p className="sc-benefit-text">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sc-exercises">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">How to Track Your Steps</h2>
              <p className="sc-section-text">
                Multiple easy methods work equally well - choose what fits your lifestyle best.
              </p>
            </div>
            <div className="sc-exercises-grid">
              {trackingMethods.map((method, index) => (
                <div key={index} className="sc-exercise-card">
                  <div className="sc-exercise-icon">{method.icon}</div>
                  <h3 className="sc-exercise-title">{method.name}</h3>
                  <p className="sc-exercise-text">{method.description}</p>
                  <p style={{fontSize: '14px', fontWeight: 'bold', color: '#28a745', marginTop: '8px'}}>
                    ✅ {method.pros}
                  </p>
                  <p style={{fontSize: '14px', color: '#dc3545', marginTop: '4px'}}>
                    ⚠️ {method.cons}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sc-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">Daily Walking Schedule</h2>
              <p className="sc-section-text">Break your 5000 steps into manageable daily chunks</p>
            </div>
            <div className="sc-programs-grid">
              {dailyStrategies.map((strategy, index) => (
                <div key={index} className="sc-program-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{strategy.icon}</div>
                    <h3 className="sc-program-title">{strategy.time}</h3>
                    <p style={{
                      color: '#28a745',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      marginTop: '4px'
                    }}>
                      {strategy.steps}
                    </p>
                  </div>
                  <div className="sc-program-features">
                    {strategy.activities.map((activity, actIndex) => (
                      <p key={actIndex}>🚶 {activity}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{marginTop: '4rem'}}>
              <div className="text-center mb-16">
                <h2 className="sc-section-title">Step Conversion Guide</h2>
                <p className="sc-section-text">Estimate steps based on time and activity intensity</p>
              </div>
              <div className="sc-programs-grid">
                {stepConversion.map((activity, index) => (
                  <div key={index} className="sc-program-card">
                    <div className="text-center mb-6">
                      <div className="text-3xl mb-2">{activity.icon}</div>
                      <h3 className="sc-program-title">{activity.activity || activity.name}</h3>
                      <p style={{
                        color: '#28a745',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        marginTop: '8px'
                      }}>
                        {activity.steps_per_min} steps/min
                      </p>
                    </div>
                    <p className="sc-program-desc">{activity.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sc-cta">
          <div className="container">
            <div className="sc-cta-card">
              <div className="sc-cta-content">
                <h2 className="sc-cta-title">
                  Every Step Counts
                </h2>
                <p className="sc-cta-text">
                  Walking 5000 steps daily might seem like a simple goal, but it's an investment in your health
                  that compounds over time. Start today, and you'll wonder why you ever put it off.
                  Your future self will thank you.
                </p>
                <div className="sc-cta-buttons">
                  <Link href="/push-ups" className="sc-btn-secondary">Previous: Modified Push-Ups</Link>
                  <Link href="/user-demo" className="sc-btn-primary">Back to Dashboard</Link>
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

export default WalkingSteps;
