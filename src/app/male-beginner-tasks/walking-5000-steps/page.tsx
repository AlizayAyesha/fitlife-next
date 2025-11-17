import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MaleBeginnerWalking = () => {
  const benefits = [
    {
      title: "Cardiovascular Health",
      description: "Build heart and lung capacity while reducing risk of heart disease and improving circulation.",
      icon: "❤️"
    },
    {
      title: "Weight Management",
      description: "Burn calories consistently and boost metabolism for sustainable fat loss and weight control.",
      icon: "⚖️"
    },
    {
      title: "Mental Wellbeing",
      description: "Reduce stress, boost mood, and improve sleep quality through regular rhythmic walking.",
      icon: "🧠"
    },
    {
      title: "Bone Density",
      description: "Weight-bearing exercise helps maintain strong bones and prevents osteoporosis.",
      icon: "🦴"
    }
  ];

  const walkingIntensity = [
    {
      level: "Light Walk",
      pace: "Slow and comfortable pace",
      description: "Perfect for beginners or recovery days",
      duration: "45-60 minutes to reach 5000 steps",
      effort: "Easy breathing, can carry a conversation",
      heartRate: "~50-60% max heart rate",
      tips: "Take it slow, focus on enjoying the process",
      icon: "🧘‍♂️"
    },
    {
      level: "Moderate Walk",
      pace: "Brisk, purposeful walking",
      description: "Good balance of effort and results",
      duration: "40-50 minutes to reach 5000 steps",
      effort: "Somewhat harder breathing, can speak short sentences",
      heartRate: "~60-70% max heart rate",
      tips: "Pick up the pace while maintaining good posture",
      icon: "🚶‍♂️"
    },
    {
      level: "Brisk Walk",
      pace: "Quick, challenging pace",
      description: "Maximum fat burn and cardiovascular benefits",
      duration: "35-45 minutes to reach 5000 steps",
      effort: "Heavy breathing, can't speak long sentences",
      heartRate: "~70-75% max heart rate",
      tips: "Push yourself but don't overdo it",
      icon: "🏃‍♂️"
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
                🚶 Walking 5000 Steps
              </h1>
              <p className="sc-subtitle">
                Build endurance and consistency. Start your daily walking habit with this achievable goal
                that provides measurable progress and sustainable cardiovascular fitness.
              </p>
            </div>
          </div>
        </section>

        <section className="sc-benefits">
          <div className="container">
            <div className="sc-benefits-card">
              <h2 className="sc-section-title">Why Walking Matters for Men</h2>
              <p className="sc-benefits-description">
                Walking may not seem like much, but consistently hitting your daily step goal builds
                the cardiovascular fitness foundation that supports all other aspects of male health.
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
              <h2 className="sc-section-title">Choose Your Walking Intensity</h2>
              <p className="sc-section-text">
                Select based on your current fitness level. All intensities will help you hit 5000 steps.
              </p>
            </div>
            <div className="sc-exercises-grid">
              {walkingIntensity.map((intensity, index) => (
                <div key={index} className="sc-exercise-card">
                  <div className="sc-exercise-icon">{intensity.icon}</div>
                  <h3 className="sc-exercise-title">{intensity.level}</h3>
                  <p className="sc-exercise-text">{intensity.pace}</p>
                  <p style={{fontSize: '14px', fontWeight: 'bold', color: '#4a5568', marginTop: '8px'}}>
                    Effort Level: {intensity.effort}
                  </p>
                  <p style={{fontSize: '14px', color: '#059669', marginTop: '4px'}}>
                    Duration: {intensity.duration}
                  </p>
                  <p style={{fontSize: '14px', color: '#dc2626', marginTop: '4px'}}>
                    Heart Rate: {intensity.heartRate}
                  </p>
                  <p style={{fontSize: '14px', color: '#718096', fontStyle: 'italic', marginTop: '4px'}}>
                    💡 {intensity.tips}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sc-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">Perfect Walking Technique</h2>
              <p className="sc-section-text">Maximize results with proper form and posture</p>
            </div>
            <div className="sc-programs-grid">
              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">📏</div>
                  <h3 className="sc-program-title">Posture & Alignment</h3>
                </div>
                <p className="sc-program-desc">Stand tall and move efficiently.</p>
                <div className="sc-program-features">
                  <p>✅ Head up, eyes forward</p>
                  <p>✅ Shoulders down and relaxed</p>
                  <p>✅ Arms swing naturally</p>
                  <p>✅ Core gently engaged</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🚶‍♂️</div>
                  <h3 className="sc-program-title">Step Mechanics</h3>
                </div>
                <p className="sc-program-desc">Natural, efficient movement pattern.</p>
                <div className="sc-program-features">
                  <p>✅ Land heel first, roll through foot</p>
                  <p>✅ Push off with toes</p>
                  <p>✅ Knee slightly bent</p>
                  <p>✅ Swing opposite arm forward</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🌬️</div>
                  <h3 className="sc-program-title">Breathing Pattern</h3>
                </div>
                <p className="sc-program-desc">Establish good breathing habits.</p>
                <div className="sc-program-features">
                  <p>✅ Breathe through nose when possible</p>
                  <p>✅ Exhale through nose or mouth</p>
                  <p>✅ Match breath to strides</p>
                  <p>✅ Stay relaxed and rhythmic</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sc-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">Progression Strategy</h2>
              <p className="sc-section-text">Build up your walking fitness safely and sustainably</p>
            </div>
            <div className="sc-programs-grid">
              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">4️⃣</div>
                  <h3 className="sc-program-title">Weeks 1-4: Establish Habit</h3>
                </div>
                <p className="sc-program-desc">Focus on consistency over speed.</p>
                <div className="sc-program-features">
                  <p>🎯 Hit 5000 steps every day</p>
                  <p>🐢 Choose comfortable pace</p>
                  <p>📊 Track with phone or pedometer</p>
                  <p>🎉 Celebrate daily completions</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">6️⃣</div>
                  <h3 className="sc-program-title">Weeks 5-8: Build Intensity</h3>
                </div>
                <p className="sc-program-desc">Increase pace and duration.</p>
                <div className="sc-program-features">
                  <p>⚡ From 50-60 min down to 40-50 min</p>
                  <p>📈 Add some inclines when possible</p>
                  <p>🎵 Vary pace within walks</p>
                  <p>🏆 Aim for 5500-6000 steps daily</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🔥</div>
                  <h3 className="sc-program-title">Ongoing Success</h3>
                </div>
                <p className="sc-program-desc">Make walking a lifelong habit.</p>
                <div className="sc-program-features">
                  <p>📅 Walking becomes automatic</p>
                  <p>🎯 7000+ steps becomes norm</p>
                  <p>🏔️ Incorporate varied terrain</p>
                  <p>👥 Join walking groups or clubs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sc-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">Walking Environment Tips</h2>
              <p className="sc-section-text">Choose the right environment for successful daily walks</p>
            </div>
            <div className="sc-programs-grid">
              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🏠</div>
                  <h3 className="sc-program-title">Home Environment</h3>
                </div>
                <p className="sc-program-desc">Walks around your neighborhood.</p>
                <div className="sc-program-features">
                  <p>✅ Familiar and convenient</p>
                  <p>✅ Weather dependent</p>
                  <p>✅ Safe and predictable</p>
                  <p>✅ Can be done anytime</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🌳</div>
                  <h3 className="sc-program-title">Nature Trails</h3>
                </div>
                <p className="sc-program-desc">Parks, nature paths, or trails.</p>
                <div className="sc-program-features">
                  <p>✅ Scenic and enjoyable</p>
                  <p>✅ Varying terrain builds strength</p>
                  <p>✅ Fresh air and mental boost</p>
                  <p>✅ Weather dependent</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🏭</div>
                  <h3 className="sc-program-title">Indoor Options</h3>
                </div>
                <p className="sc-program-desc">Shopping malls, gyms, or home treadmills.</p>
                <div className="sc-program-features">
                  <p>✅ Weather independent</p>
                  <p>✅ Controlled environment</p>
                  <p>✅ Can be less interesting</p>
                  <p>✅ Good for all climates</p>
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
                  Ready to Start Walking?
                </h2>
                <p className="sc-cta-text">
                  5000 steps may not seem like much, but it's the foundation of every champion's fitness journey.
                  Start today and watch how this simple habit transforms your health and energy levels.
                </p>
                <div className="sc-cta-buttons">
                  <Link href="/male-beginner-tasks" className="sc-btn-primary">Complete Beginner Tasks</Link>
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

export default MaleBeginnerWalking;
