import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LightCardioDance = () => {
  const exercises = [
    { name: "Simple Footwork", icon: "🦶", desc: "Basic grapevine steps and side-to-side movements for gentle cardio" },
    { name: "Arm Movements", icon: "💃", desc: "Gentle arm circles and waves combined with dance steps" },
    { name: "Music Rhythms", icon: "🎵", desc: "Movement synchronized with tempo changes for engagement" },
    { name: "Chair Dance", icon: "💺", desc: "Seated dance movements perfect for all fitness levels" },
    { name: "Slow Twists & Turns", icon: "🔄", desc: "Gentle torso twists and controlled turns" },
    { name: "Weight Shifts", icon: "↔️", desc: "Smooth weight transfer between feet for balance and coordination" }
  ];

  const benefits = [
    {
      title: "Low Impact Cardio",
      description: "Effective heart health exercise with minimal stress on joints and muscles.",
      icon: "❤️"
    },
    {
      title: "Stress Relief",
      description: "The joy of movement combined with music creates natural stress reduction.",
      icon: "😊"
    },
    {
      title: "Balance & Coordination",
      description: "Dance improves proprioception and coordination skills over time.",
      icon: "⚖️"
    },
    {
      title: "Mood Enhancement",
      description: "Dance releases endorphins and creates positive, uplifting emotions.",
      icon: "🎉"
    }
  ];

  const routines = [
    {
      title: "10-Minute Morning Flow",
      icon: "🌅",
      desc: "Energizing start to your day with gentle dance movements",
      duration: "10 minutes"
    },
    {
      title: "Chair-Based Dance",
      icon: "💺",
      desc: "Perfect for limited mobility or seated workout sessions",
      duration: "15 minutes"
    },
    {
      title: "Music & Movement",
      icon: "🎶",
      desc: "Follow along with your favorite songs for complete enjoyment",
      duration: "20 minutes"
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
                Light Cardio Dance
              </h1>
              <p className="wlt-subtitle">
                Discover the joy of movement with gentle, effective dance cardio.
                Perfect for all ages and fitness levels, combining heart health with happiness.
              </p>
            </div>
          </div>
        </section>

        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Dance Cardio</h2>
              <p className="wlt-benefits-description">
                Experience cardiovascular health in the most enjoyable way possible through movement and music.
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
              <h2 className="wlt-section-title">Dance Cardio Movements</h2>
              <p className="wlt-section-text">
                Learn these gentle movements that can be done individually or combined for complete sessions.
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
              <h2 className="wlt-section-title">Dance Cardio Routines</h2>
              <p className="wlt-section-text">Choose the routine that fits your schedule and current fitness level.</p>
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
                  <Button className="wlt-program-btn" style={{border: `2px solid #ec4899`}}>
                    Start Dancing
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
                  Dance Your Way to Better Health
                </h2>
                <p className="wlt-cta-text">
                  Cardio doesn't have to be a chore. With light dance, you get all the heart health benefits
                  wrapped in a joyful, expressive experience that you'll look forward to every day.
                </p>
                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Start Dancing</Link>
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

export default LightCardioDance;
