import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StrengthCircuit = () => {
  const exercises = [
    { name: "Push-Up Circuit", icon: "💪", desc: "Modified to full push-ups with proper form and progression" },
    { name: "Squat to Press", icon: "🏋️", desc: "Bodyweight squats combined with overhead press movement" },
    { name: "Plank Jacks", icon: "🏃‍♀️", desc: "Plank hold with jumping jacks for core and cardio challenge" },
    { name: "Lunge Matrix", icon: "🦵", desc: "Forward, reverse, and walking lunges in sequence" },
    { name: "Burpee Progression", icon: "🔥", desc: "Full burpee movement with modified options" },
    { name: "Mountain Climbers", icon: "⛰️", desc: "High-intensity core and cardio exercise" }
  ];

  const benefits = [
    {
      title: "Full Body Strength",
      description: "Comprehensive muscle engagement through compound movements targeting all major muscle groups.",
      icon: "💪"
    },
    {
      title: "Cardiovascular Fitness",
      description: "Circuit training combines strength and cardio for optimal heart health and endurance.",
      icon: "❤️"
    },
    {
      title: "Time Efficiency",
      description: "Complete body workout in condensed sessions that maximize results in minimal time.",
      icon: "⏰"
    },
    {
      title: "Progressive Overload",
      description: "Structured approach allows for consistent progression and strength building over time.",
      icon: "📈"
    }
  ];

  const circuits = [
    {
      title: "Beginner Strength Builder",
      icon: "🌱",
      duration: "20-25 minutes",
      desc: "Perfect for those building confidence and basic strength",
      rounds: 3,
      rest: "60 seconds",
      exercises: ["Modified push-ups", "Bodyweight squats", "Wall sits", "Arm circles", "March in place"]
    },
    {
      title: "Intermediate Power Circuit",
      icon: "⚡",
      duration: "25-30 minutes",
      desc: "For those with solid foundation seeking more challenge",
      rounds: 4,
      rest: "45 seconds",
      exercises: ["Standard push-ups", "Jump squats", "Plank hold", "Walking lunges", "Burpee basics"]
    },
    {
      title: "Advanced Elite Circuit",
      icon: "🏆",
      duration: "30-35 minutes",
      desc: "High-intensity training for experienced fitness enthusiasts",
      rounds: 5,
      rest: "30 seconds",
      exercises: ["Diamond push-ups", "Pistol squats", "Mountain climbers", "Burpee box jumps", "Plyometric lunges"]
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
                Strength Circuit
              </h1>
              <p className="sc-subtitle">
                Build functional strength and cardiovascular fitness through dynamic circuit training.
                Perfect for efficient, full-body workouts that deliver results.
              </p>
            </div>
          </div>
        </section>

        <section className="sc-benefits">
          <div className="container">
            <div className="sc-benefits-card">
              <h2 className="sc-section-title">Benefits of Strength Circuits</h2>
              <p className="sc-benefits-description">
                Circuit training combines the best of strength and cardio for comprehensive fitness results.
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
              <h2 className="sc-section-title">Circuit Exercises</h2>
              <p className="sc-section-text">
                Compound movements that build strength while keeping your heart rate up throughout the circuit.
              </p>
            </div>
            <div className="sc-exercises-grid">
              {exercises.map((exercise, index) => (
                <div key={index} className="sc-exercise-card">
                  <div className="sc-exercise-icon">{exercise.icon}</div>
                  <h3 className="sc-exercise-title">{exercise.name}</h3>
                  <p className="sc-exercise-text">{exercise.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sc-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">Strength Circuit Programs</h2>
              <p className="sc-section-text">Choose the circuit level that matches your current fitness and experience.</p>
            </div>
            <div className="sc-programs-grid">
              {circuits.map((circuit, index) => (
                <div key={index} className="sc-program-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{circuit.icon}</div>
                    <h3 className="sc-program-title">{circuit.title}</h3>
                  </div>
                  <p className="sc-program-desc">{circuit.desc}</p>
                  <div className="sc-program-features">
                    <p>• Duration: {circuit.duration}</p>
                    <p>• Rounds: {circuit.rounds}</p>
                    <p>• Rest: {circuit.rest} between exercises</p>
                    {circuit.exercises.slice(0, 3).map((exercise, idx) => (
                      <p key={idx}>• {exercise}</p>
                    ))}
                    {circuit.exercises.length > 3 && <p>• + {circuit.exercises.length - 3} more exercises</p>}
                  </div>
                  <Button className="sc-program-btn">
                    Start Circuit
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sc-cta">
          <div className="container">
            <div className="sc-cta-card">
              <div className="sc-cta-content">
                <h2 className="sc-cta-title">
                  Circuit Your Way to Strength
                </h2>
                <p className="sc-cta-text">
                  Stop wasting time with inefficient workouts. Circuit training delivers maximum results
                  in minimum time, building the strength and endurance you need for life.
                </p>
                <div className="sc-cta-buttons">
                  <Link href="/register" className="sc-btn-primary">Begin Training</Link>
                  <Link href="/user-demo" className="sc-btn-secondary">View Dashboard</Link>
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

export default StrengthCircuit;
