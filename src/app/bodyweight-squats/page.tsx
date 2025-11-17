import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BodyweightSquats = () => {
  const benefits = [
    {
      title: "Lower Body Strength",
      description: "Builds powerful quadriceps, hamstrings, and glutes through compound movement patterns.",
      icon: "💪"
    },
    {
      title: "Functional Fitness",
      description: "Improves everyday movements like sitting, standing, and climbing stairs naturally.",
      icon: "🏃"
    },
    {
      title: "Core Stability",
      description: "Engages abdominal muscles and improves spinal stability throughout the movement.",
      icon: "🏆"
    },
    {
      title: "Joint Health",
      description: "Maintains hip and knee mobility while building strength around these crucial joints.",
      icon: "🦵"
    }
  ];

  const squatInstructions = [
    {
      step: 1,
      title: "Starting Position",
      description: "Stand tall with feet shoulder-width apart, toes slightly turned out. Arms can hang naturally at sides or be extended forward for balance.",
      tips: "Keep your chest up and core engaged from the very beginning.",
      icon: "🧍‍♂️"
    },
    {
      name: "Descent Phase",
      description: "Hinge at hips and bend knees simultaneously. Lower your hips back and down as if sitting into a chair.",
      tips: "Keep knees tracking over toes and maintain upright torso",
      icon: "⬇️"
    },
    {
      name: "Bottom Position",
      description: "Continue descending until hips are at or below knee level, maintaining neutral spine.",
      tips: "Don't rush to the bottom - quality depth is more important than quantity",
      icon: "🎯"
    },
    {
      name: "Ascent Phase",
      description: "Drive through heels and squeeze glutes to return to standing position.",
      tips: "Lead with hips and keep everything aligned",
      icon: "⬆️"
    }
  ];

  const variations = [
    {
      name: "Standard Bodyweight Squat",
      difficulty: "Beginner",
      description: "Perfect starting point with natural hand positioning",
      sets: "3 sets of 12-15 reps",
      icon: "🧘‍♂️"
    },
    {
      name: "Goblet Squat",
      difficulty: "Intermediate",
      description: "Hold hands at chest level like holding a goblet for counterbalance",
      sets: "3 sets of 10-12 reps",
      icon: "🏺"
    },
    {
      name: "Countermovement Jump Squat",
      difficulty: "Advanced",
      description: "Add explosive power by jumping up from the bottom position",
      sets: "3 sets of 8-10 reps",
      icon: "🤸‍♂️"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Knees collapsing inward",
      solution: "Keep knees tracking over toes by externally rotating hips",
      icon: "❌"
    },
    {
      mistake: "Rounding the back",
      solution: "Maintain neutral spine and proud chest throughout movement",
      icon: "🔄"
    },
    {
      mistake: "Rising up on toes",
      solution: "Keep weight in heels throughout the entire movement",
      icon: "👣"
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
                Bodyweight Squats
              </h1>
              <p className="sc-subtitle">
                Master the fundamental movement that builds strength, stability, and functional fitness.
                Learn proper form and progress naturally for maximum results and injury prevention.
              </p>
            </div>
          </div>
        </section>

        <section className="sc-benefits">
          <div className="container">
            <div className="sc-benefits-card">
              <h2 className="sc-section-title">Why Bodyweight Squats Matter</h2>
              <p className="sc-benefits-description">
                The squat is called the king of exercises for good reason. It's a compound movement that builds
                real-world strength and lays the foundation for athletic performance.
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
              <h2 className="sc-section-title">Perfect Squat Technique</h2>
              <p className="sc-section-text">
                Follow these step-by-step instructions for proper form. Quality always comes before quantity.
              </p>
            </div>
            <div className="sc-exercises-grid">
              {squatInstructions.map((step, index) => (
                <div key={index} className="sc-exercise-card">
                  <div className="sc-exercise-icon">{step.icon}</div>
                  <h3 className="sc-exercise-title">Step {step.step}: {step.title}</h3>
                  <p className="sc-exercise-text">{step.description}</p>
                  <p style={{fontSize: '14px', color: '#28a745', fontStyle: 'italic', marginTop: '4px'}}>
                    💡 {step.tips}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sc-programs" style={{marginTop: '4rem'}}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">Squat Progression Plan</h2>
              <p className="sc-section-text">Start with beginner variations and progress as you build confidence and strength</p>
            </div>
            <div className="sc-programs-grid">
              {variations.map((variation, index) => (
                <div key={index} className="sc-program-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{variation.icon}</div>
                    <h3 className="sc-program-title">{variation.name}</h3>
                    <span style={{
                      backgroundColor: variation.difficulty === 'Beginner' ? '#28a745' :
                                      variation.difficulty === 'Intermediate' ? '#ffc107' : '#dc3545',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {variation.difficulty}
                    </span>
                  </div>
                  <p className="sc-program-desc">{variation.description}</p>
                  <div className="sc-program-features">
                    <p>• Sets: {variation.sets}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{marginTop: '4rem'}}>
              <div className="text-center mb-16">
                <h2 className="sc-section-title">Common Mistakes & Fixes</h2>
                <p className="sc-section-text">Avoid these errors for safe and effective squat performance</p>
              </div>
              <div className="sc-programs-grid">
                {commonMistakes.map((mistake, index) => (
                  <div key={index} className="sc-program-card">
                    <div className="text-center mb-6">
                      <div className="text-3xl mb-2">{mistake.icon}</div>
                      <h3 className="sc-program-title" style={{color: '#dc3545'}}>{mistake.mistake}</h3>
                    </div>
                    <div className="sc-program-features">
                      <p style={{color: '#28a745', fontWeight: 'bold'}}>✅ Solution: {mistake.solution}</p>
                    </div>
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
                  Ready to Build Leg Strength?
                </h2>
                <p className="sc-cta-text">
                  Bodyweight squats are your gateway to lower body strength and functional fitness.
                  Master the form, build consistency, and watch your overall athletic performance soar.
                </p>
                <div className="sc-cta-buttons">
                  <Link href="/warm-up" className="sc-btn-secondary">Previous: Warm-Up</Link>
                  <Link href="/push-ups" className="sc-btn-primary">Next: Modified Push-Ups</Link>
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

export default BodyweightSquats;
