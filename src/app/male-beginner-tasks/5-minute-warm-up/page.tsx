import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MaleBeginnerWarmUp = () => {
  const benefits = [
    {
      title: "Injury Prevention",
      description: "Prepares muscles and joints for exercise, reducing injury risk by increasing blood flow and tissue elasticity.",
      icon: "🛡️"
    },
    {
      title: "Performance Enhancement",
      description: "Boosts muscle efficiency, coordination, and power output for better workout performance.",
      icon: "⚡"
    },
    {
      title: "Cardiovascular Preparation",
      description: "Gradually increases heart rate and circulation, preparing the body for sustained physical activity.",
      icon: "❤️"
    },
    {
      title: "Mental Focus",
      description: "Helps transition from rest to activity, improving mental readiness and workout concentration.",
      icon: "🧠"
    }
  ];

  const warmupExercises = [
    {
      name: "March in Place",
      duration: "30 seconds",
      description: "Lift knees high while swinging arms naturally to increase heart rate",
      tips: "March with purpose - knees should reach hip level",
      icon: "🏃‍♂️"
    },
    {
      name: "Arm Circles",
      duration: "20 seconds forward, 20 seconds backward",
      description: "Extend arms out to sides and make small to large circles",
      tips: "Start small and gradually increase circle size",
      icon: "💪"
    },
    {
      name: "Shoulder Rolls",
      duration: "15 seconds forward, 15 seconds backward",
      description: "Roll shoulders forward and backward in smooth motions",
      tips: "Keep movements controlled and relaxed",
      icon: "🤷‍♂️"
    },
    {
      name: "Trunk Twists",
      duration: "30 seconds",
      description: "Twist upper body from side to side with feet planted",
      tips: "Keep lower body stable, move from core",
      icon: "🔄"
    },
    {
      name: "Gentle Squat to Stand",
      duration: "20 seconds",
      description: "Perform slow, controlled squats to wake up leg muscles",
      tips: "Keep knees tracking over toes, don't bounce",
      icon: "🧘‍♂️"
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
                🏃 5-Minute Warm-Up
              </h1>
              <p className="sc-subtitle">
                Perfect for male beginners. This essential 5-minute routine prepares your body and mind
                for safe and effective training with movements specifically designed for your fitness level.
              </p>
            </div>
          </div>
        </section>

        <section className="sc-benefits">
          <div className="container">
            <div className="sc-benefits-card">
              <h2 className="sc-section-title">Why Warm Up Matters for Male Beginners</h2>
              <p className="sc-benefits-description">
                A proper warm-up is your first step to successful fitness. It protects you from injury while
                ensuring you perform at your best during this beginner-friendly routine.
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
              <h2 className="sc-section-title">Your 5-Minute Beginner Routine</h2>
              <p className="sc-section-text">
                Perform these exercises in sequence for a complete warm-up that targets your entire body.
                Take your time - quality movement matters more than speed.
              </p>
            </div>
            <div className="sc-exercises-grid">
              {warmupExercises.map((exercise, index) => (
                <div key={index} className="sc-exercise-card">
                  <div className="sc-exercise-icon">{exercise.icon}</div>
                  <h3 className="sc-exercise-title">{exercise.name}</h3>
                  <p className="sc-exercise-text">{exercise.description}</p>
                  <p style={{fontSize: '14px', fontWeight: 'bold', color: '#4a5568', marginTop: '8px'}}>
                    Duration: {exercise.duration}
                  </p>
                  <p style={{fontSize: '14px', color: '#718096', fontStyle: 'italic', marginTop: '4px'}}>
                    💡 {exercise.tips}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sc-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">Beginner-Friendly Guidelines</h2>
              <p className="sc-section-text">Perfect your form and maximize your warm-up effectiveness</p>
            </div>
            <div className="sc-programs-grid">
              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🎯</div>
                  <h3 className="sc-program-title">Perfect Sequencing</h3>
                </div>
                <p className="sc-program-desc">Start from larger muscle groups and progress to more specific movements.</p>
                <div className="sc-program-features">
                  <p>✅ Start with full body movement (march in place)</p>
                  <p>✅ Progress to upper body mobility (arm circles)</p>
                  <p>✅ Include core activation (trunk twists)</p>
                  <p>✅ End with movement-specific prep (squats)</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">⏱️</div>
                  <h3 className="sc-program-title">Timing for Beginners</h3>
                </div>
                <p className="sc-program-desc">Don't rush through. Quality gradual warm-up prevents injury.</p>
                <div className="sc-program-features">
                  <p>⌚ Complete full routine in 5 minutes</p>
                  <p>🎯 Never shorten to less than 3 minutes</p>
                  <p>🏃 Move through each exercise deliberately</p>
                  <p>✋ Listen to your body - stop if something feels off</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">💨</div>
                  <h3 className="sc-program-title">Breathing Focus</h3>
                </div>
                <p className="sc-program-desc">Proper breathing enhances blood flow and prepares your nervous system.</p>
                <div className="sc-program-features">
                  <p>🫁 Inhale through nose, exhale through mouth</p>
                  <p>🌬️ Breathe deeply but naturally</p>
                  <p>🔄 Match breath rhythm to movement</p>
                  <p>🤗 Stay relaxed - tension defeats the purpose</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sc-cta">
          <div className="container">
            <div className="sc-cta-card">
              <div className="sc-cta-content">
                <h2 className="sc-cta-title">
                  Ready to Begin Your Routine?
                </h2>
                <p className="sc-cta-text">
                  This warm-up becomes your foundation for every workout. Commit to it consistently
                  and you'll feel the difference in how your body responds to exercise.
                </p>
                <div className="sc-cta-buttons">
                  <Link href="/male-beginner-tasks" className="sc-btn-secondary">Back to Beginner Tasks</Link>
                  <Link href="/male-beginner-tasks/bodyweight-squats" className="sc-btn-primary">Next: Bodyweight Squats</Link>
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

export default MaleBeginnerWarmUp;
