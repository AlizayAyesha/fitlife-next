import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const YogaStretches = () => {
  const stretches = [
    { name: "Forward Fold", icon: "🔄", desc: "Lengthens the hamstrings and releases tension in the back" },
    { name: "Cat-Cow Pose", icon: "🐱", desc: "Warms up the spine and relieves back tension" },
    { name: "Child's Pose", icon: "🧘‍♀️", desc: "Gently stretches the back, hips, and thighs" },
    { name: "Seated Forward Bend", icon: "🪑", desc: "Stretches the hamstrings and lower back" },
    { name: "Thread the Needle", icon: "🧵", desc: "Releases shoulder and upper back tension" },
    { name: "Neck Rolls", icon: "➰", desc: "Relieves neck and shoulder stiffness" }
  ];

  const benefits = [
    {
      title: "Improved Flexibility",
      description: "Regular stretching increases muscle elasticity and joint range of motion.",
      icon: "🏃‍♀️"
    },
    {
      title: "Better Posture",
      description: "Lengthens tight muscles and strengthens postural muscles for better alignment.",
      icon: "📏"
    },
    {
      title: "Stress Reduction",
      description: "Promotes relaxation and reduces muscle tension associated with stress.",
      icon: "🧘‍♀️"
    },
    {
      title: "Injury Prevention",
      description: "Improves blood flow to muscles and reduces risk of strains and sprains.",
      icon: "🛡️"
    }
  ];

  const routines = [
    {
      title: "Morning Wake-Up Flow",
      icon: "🌅",
      duration: "10-15 min",
      focus: "Energize and lengthen muscles after sleep",
      stretches: ["Cat-Cow Pose", "Child's Pose", "Forward Fold", "Neck Rolls"]
    },
    {
      title: "Desk Worker Relief",
      icon: "💻",
      duration: "15-20 min",
      focus: "Release tension from sitting and screen time",
      stretches: ["Thread the Needle", "Shoulder Rolls", "Seated Forward Bend", "Neck Stretches"]
    },
    {
      title: "Post-Workout Recovery",
      icon: "💪",
      duration: "20-25 min",
      focus: "Aid muscle recovery and reduce soreness",
      stretches: ["Seated Forward Bend", "Hip Openers", "Quad Stretches", "Calf Stretches"]
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
                Yoga Stretches
              </h1>
              <p className="wlt-subtitle">
                Discover gentle yet effective stretches that improve flexibility, reduce tension,
                and promote overall wellness through mindful movement.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Stretching</h2>
              <p className="wlt-benefits-description">
                Regular stretching brings harmony to body and mind through increased flexibility and relaxation.
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

        {/* Stretches Section */}
        <section className="wlt-exercises">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Essential Stretches</h2>
              <p className="wlt-section-text">
                Learn these fundamental yoga stretches to improve your flexibility and release tension.
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

        {/* Routines Section */}
        <section className="wlt-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="wlt-section-title">Stretching Routines</h2>
              <p className="wlt-section-text">
                Find the perfect stretching routine for your schedule and goals.
              </p>
            </div>

            <div className="wlt-programs-grid">
              {routines.map((routine, index) => (
                <div key={index} className="wlt-program-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{routine.icon}</div>
                    <h3 className="wlt-program-title">{routine.title}</h3>
                  </div>
                  <p className="wlt-program-desc">{routine.focus}</p>
                  <div className="wlt-program-features">
                    <p>• Duration: {routine.duration}</p>
                    <p>• Includes: {routine.stretches.join(", ")}</p>
                  </div>
                  <Button className="wlt-program-btn" style={{border: `2px solid #10B981`}}>
                    Start Routine
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="wlt-cta">
          <div className="container">
            <div className="wlt-cta-card">
              <div className="wlt-cta-content">
                <h2 className="wlt-cta-title">
                  Stretch Your Way to Wellness
                </h2>
                <p className="wlt-cta-text">
                  Regular stretching improves your quality of life. Whether you're looking to reduce stress,
                  increase flexibility, or simply feel better, stretching can be your daily wellness ritual.
                </p>

                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Begin Your Practice</Link>
                  <Link href="/coach" className="btn wlt-btn-secondary">Find a Teacher</Link>
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

export default YogaStretches;
