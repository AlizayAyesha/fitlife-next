import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MaleBeginnerPushUps = () => {
  const benefits = [
    {
      title: "Upper Body Strength",
      description: "Build pushing power in your chest, shoulders, and triceps - crucial for male upper body development.",
      icon: "💪"
    },
    {
      title: "Functional Fitness",
      description: "Improve pushing mechanics needed for sports, work tasks, and daily activities like pushing doors.",
      icon: "🚪"
    },
    {
      title: "Core Stability",
      description: "Strengthen your abs and back muscles while maintaining plank position for optimal core control.",
      icon: "🏋️‍♂️"
    },
    {
      title: "Bone Density",
      description: "Weight-bearing exercise helps maintain and improve bone density, especially important for men.",
      icon: "🦴"
    }
  ];

  const pushUpVariations = [
    {
      name: "Modified Push-Up",
      level: "Beginner",
      description: "Start on your knees or against a wall - perfect for beginners",
      setup: "Kneel on ground, hands slightly wider than shoulders, body forms straight line from knees to head",
      execution: "Lower chest toward ground, elbows at 45° angle, push back up to starting position",
      sets: "2-3 sets",
      reps: "6-10 reps",
      tips: "Keep hips up, don't let them sag or pike up - maintain straight line",
      icon: "🧎‍♂️"
    },
    {
      name: "Wall Push-Up",
      level: "Ultra Beginner",
      description: "Easiest variation - great if you can't yet do floor push-ups",
      setup: "Stand facing wall, place hands shoulder-width apart at chest height",
      execution: "Lean into wall, bend elbows to lower head toward wall, then push back",
      sets: "3 sets",
      reps: "10-15 reps",
      tips: "Perfect form first - quality over speed",
      icon: "🧱"
    },
    {
      name: "Knee Push-Up",
      level: "Early Beginner",
      description: "Transition variation between wall and full push-ups",
      setup: "Start on knees, hands shoulder-width, body in straight diagonal line",
      execution: "Lower with control until chest nearly touches ground, then push up",
      sets: "3 sets",
      reps: "8-12 reps",
      tips: "Keep elbows at 45°, core tight, full range of motion",
      icon: "🦵"
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
                ✋ Modified Push-Ups
              </h1>
              <p className="sc-subtitle">
                Build upper body strength safely. Start modified and progress gradually to full push-ups
                as you build the strength needed for this essential bodyweight exercise.
              </p>
            </div>
          </div>
        </section>

        <section className="sc-benefits">
          <div className="container">
            <div className="sc-benefits-card">
              <h2 className="sc-section-title">Why Push-Ups Matter for Men</h2>
              <p className="sc-benefits-description">
                Push-ups are one of the most functional upper body exercises you can do. They build real-world pushing
                strength that translates to athletic performance and daily activities.
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
              <h2 className="sc-section-title">Modified Push-Up Variations</h2>
              <p className="sc-section-text">
                Choose the variation that matches your current strength level. Focus on perfect form.
              </p>
            </div>
            <div className="sc-exercises-grid">
              {pushUpVariations.map((variation, index) => (
                <div key={index} className="sc-exercise-card">
                  <div className="sc-exercise-icon">{variation.icon}</div>
                  <h3 className="sc-exercise-title">{variation.name} ({variation.level})</h3>
                  <p className="sc-exercise-text">{variation.description}</p>
                  <p style={{fontSize: '14px', fontWeight: 'bold', color: '#4a5568', marginTop: '8px'}}>
                    Setup: {variation.setup}
                  </p>
                  <p style={{fontSize: '14px', color: '#4a5568', marginTop: '4px'}}>
                    Execution: {variation.execution}
                  </p>
                  <p style={{fontSize: '14px', fontWeight: 'bold', color: '#059669', marginTop: '4px'}}>
                    {variation.sets} × {variation.reps}
                  </p>
                  <p style={{fontSize: '14px', color: '#718096', fontStyle: 'italic', marginTop: '4px'}}>
                    💡 {variation.tips}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sc-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">Form & Technique</h2>
              <p className="sc-section-text">Perfect your push-up mechanics for maximum results</p>
            </div>
            <div className="sc-programs-grid">
              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🤚</div>
                  <h3 className="sc-program-title">Hand Position</h3>
                </div>
                <p className="sc-program-desc">Hands slightly wider than shoulder-width.</p>
                <div className="sc-program-features">
                  <p>✅ Fingers spread for stability</p>
                  <p>✅ Index fingers pointing forward</p>
                  <p>✅ Hands directly under shoulders</p>
                  <p>✅ Grip ground firmly but not too tight</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">💪</div>
                  <h3 className="sc-program-title">Body Alignment</h3>
                </div>
                <p className="sc-program-desc">Straight line from head to heels.</p>
                <div className="sc-program-features">
                  <p>✅ Head neutral, looking down</p>
                  <p>✅ Shoulders down and back</p>
                  <p>✅ Core tight, hips up</p>
                  <p>✅ No sagging or piking</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🦘</div>
                  <h3 className="sc-program-title">Movement Control</h3>
                </div>
                <p className="sc-program-desc">Controlled throughout full range of motion.</p>
                <div className="sc-program-features">
                  <p>✅ Lower slowly (3 seconds)</p>
                  <p>✅ Elbows at 45° angle</p>
                  <p>✅ Push explosively</p>
                  <p>✅ Full lockout at top</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sc-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">Progression Plan</h2>
              <p className="sc-section-text">Advance safely as you get stronger</p>
            </div>
            <div className="sc-programs-grid">
              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">4️⃣</div>
                  <h3 className="sc-program-title">Weeks 1-4: Foundation</h3>
                </div>
                <p className="sc-program-desc">Master form on modified variations.</p>
                <div className="sc-program-features">
                  <p>🧱 Wall push-ups: 3×10-12</p>
                  <p>🦵 Knee push-ups: 3×8 (perfect form)</p>
                  <p>⏱️ Rest 90 seconds between sets</p>
                  <p>📈 Focus on range of motion</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">6️⃣</div>
                  <h3 className="sc-program-title">Weeks 5-8: Building Strength</h3>
                </div>
                <p className="sc-program-desc">Increase volume and difficulty.</p>
                <div className="sc-program-features">
                  <p>🧱 Wall push-ups: 3×12-15</p>
                  <p>🦵 Knee push-ups: 3×10-12</p>
                  <p>➕ Try incline surface variation</p>
                  <p>⏲️ Start 1-2 regular push-up attempts</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🔥</div>
                  <h3 className="sc-program-title">Weeks 9+: Full Push-Ups</h3>
                </div>
                <p className="sc-program-desc">Transition to unassisted push-ups.</p>
                <div className="sc-program-features">
                  <p>🏃 Full push-ups: 3×5-8</p>
                  <p>🧱 Mix in knee variations when needed</p>
                  <p>📏 Drop sets or negatives for progression</p>
                  <p>🎯 Consistency is key</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sc-programs">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="sc-section-title">Common Mistakes to Avoid</h2>
              <p className="sc-section-text">Fix these errors to prevent injury and maximize results</p>
            </div>
            <div className="sc-programs-grid">
              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🦘</div>
                  <h3 className="sc-program-title">Chicken Wings</h3>
                </div>
                <p className="sc-program-desc">Elbows flaring out to sides like chicken wings.</p>
                <div className="sc-program-features">
                  <p>❌ Injuries shoulders and rotator cuffs</p>
                  <p>🔧 Tuck elbows at 45° angle</p>
                  <p>💡 Imagine screwing elbows down and back</p>
                  <p>🏆 Start wider than you think needed</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🏔️</div>
                  <h3 className="sc-program-title">Piking Hips</h3>
                </div>
                <p className="sc-program-desc">Butt shooting up toward ceiling.</p>
                <div className="sc-program-features">
                  <p>❌ Makes movement easier but ineffective</p>
                  <p>🔧 Engage core and glutes</p>
                  <p>💡 Maintain straight line</p>
                  <p>🏆 Practice plank position first</p>
                </div>
              </div>

              <div className="sc-program-card">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">🐌</div>
                  <h3 className="sc-program-title">Incomplete Range</h3>
                </div>
                <p className="sc-program-desc">Not going all the way down or up.</p>
                <div className="sc-program-features">
                  <p>❌ Reduces chest development</p>
                  <p>🔧 Touch chest to ground</p>
                  <p>💡 Full lockout at top position</p>
                  <p>🏆 Even one perfect rep beats ten partials</p>
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
                  Ready to Push Forward?
                </h2>
                <p className="sc-cta-text">
                  Push-ups build not just strength but discipline and mental toughness.
                  Every rep brings you closer to the upper body power you've always wanted.
                </p>
                <div className="sc-cta-buttons">
                  <Link href="/male-beginner-tasks" className="sc-btn-secondary">Back to Beginner Tasks</Link>
                  <Link href="/male-beginner-tasks/walking-5000-steps" className="sc-btn-primary">Next: Walking Steps</Link>
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

export default MaleBeginnerPushUps;
