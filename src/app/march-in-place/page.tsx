import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MarchInPlace = () => {
  const exercises = [
    { name: "Basic March", icon: "🚶‍♀️", desc: "Lift knees alternately while marching in place to get heart rate up" },
    { name: "High Knees", icon: "🦵", desc: "Lift knees higher for increased cardiovascular challenge" },
    { name: "Army March", icon: "🎖️", desc: "Exaggerate arm swing while marching for full body engagement" },
    { name: "Quick March", icon: "⚡", desc: "Increase speed for higher intensity cardio workout" }
  ];

  const benefits = [
    {
      title: "Low Impact Cardio",
      description: "Effective cardiovascular exercise with minimal joint stress and impact.",
      icon: "❤️"
    },
    {
      title: "Convenience",
      description: "Can be done anywhere without equipment or much space required.",
      icon: "🏠"
    },
    {
      title: "Calorie Burn",
      description: "Helps burn calories and maintain a healthy metabolism when done regularly.",
      icon: "🔥"
    },
    {
      title: "Joint Friendly",
      description: "Gentle on knees, hips, and ankles compared to running or jumping.",
      icon: "🛡️"
    }
  ];

  const routines = [
    {
      title: "5-Minute Warm-Up",
      icon: "⏰",
      duration: "5 min",
      desc: "Perfect quick cardio session to get your heart rate up anytime"
    },
    {
      title: "10-Minute Cardio Blast",
      icon: "💥",
      duration: "10 min",
      desc: "Intense cardio session with varying speeds and arm movements"
    },
    {
      title: "Daily March Challenge",
      icon: "📅",
      duration: "15-20 min",
      desc: "Complete daily cardio routine that builds endurance over time"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="wlt-hero">
          <div className="container">
            <div className="wlt-hero-content">
              <h1 className="wlt-h1">March in Place</h1>
              <p className="wlt-subtitle">
                Simple yet effective cardio exercise that builds endurance and burns calories.
                Perfect for all fitness levels and can be done anywhere.
              </p>
            </div>
          </div>
        </section>

        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Marching</h2>
              <p className="wlt-benefits-description">
                Experience the power of low-impact cardio that delivers results without stress on your joints.
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
              <h2 className="wlt-section-title">Marching Variations</h2>
              <p className="wlt-section-text">Add variety to keep your cardio workouts engaging and effective.</p>
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
              <h2 className="wlt-section-title">Marching Routines</h2>
              <p className="wlt-section-text">Choose the routine that fits your schedule and goals.</p>
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
                  </div>
                  <Button className="wlt-program-btn" style={{border: `2px solid #3B82F6`}}>
                    Start Routine
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
                <h2 className="wlt-cta-title">Start Marching Today</h2>
                <p className="wlt-cta-text">
                  Marching in place is accessible cardio that fits into any lifestyle.
                  Build endurance, burn calories, and improve your cardiovascular health.
                </p>
                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Get Started</Link>
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

export default MarchInPlace;
