import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MealPrepPlanning = () => {
  const tips = [
    { name: "Weekly Planning", icon: "📅", desc: "Plan your meals for the entire week based on your dietary goals and schedule" },
    { name: "Portion Control", icon: "⚖️", desc: "Measure portions accurately for healthy eating and weight management" },
    { name: "Batch Cooking", icon: "🍳", desc: "Cook large quantities of healthy meals that can be stored and reheated" },
    { name: "Container Prep", icon: "🥡", desc: "Pre-portion meals into convenient containers for grab-and-go access" },
    { name: "Ingredient Shopping", icon: "🛒", desc: "Create shopping lists focused on nutrient-dense, whole foods" },
    { name: "Storage Solutions", icon: "🔄", desc: "Learn proper food storage techniques to maintain freshness and nutrition" }
  ];

  const benefits = [
    {
      title: "Time Savings",
      description: "Spend a few hours cooking on weekends instead of daily meal preparation.",
      icon: "⏰"
    },
    {
      title: "Healthier Eating",
      description: "Control ingredients and portions for more nutritious meals.",
      icon: "🥗"
    },
    {
      title: "Cost Effective",
      description: "Reduce food waste and impulse buys with planned, bulk purchasing.",
      icon: "💰"
    },
    {
      title: "Weight Management",
      description: "Better portion control and nutrition planning support healthy goals.",
      icon: "📊"
    }
  ];

  const plans = [
    {
      title: "3-Day Quick Plan",
      icon: "🚀",
      desc: "Perfect for beginners starting meal prep",
      duration: "3-4 hours prep time",
      meals: ["Breakfast smoothies", "Lunch salads", "Dinner stir-fries", "Healthy snacks"],
      color: "#10B981"
    },
    {
      title: "Full Week Balanced",
      icon: "🗓️",
      desc: "Complete meal planning for 7 days",
      duration: "4-6 hours prep time",
      meals: ["Protein bowls", "Veggie sides", "Whole grain bases", "Fresh fruits"],
      color: "#3B82F6"
    },
    {
      title: "Flexible Gourmet",
      icon: "👩‍🍳",
      desc: "Advanced planning for varied, restaurant-quality meals",
      duration: "6-8 hours prep time",
      meals: ["Slow-cooked proteins", "Homemade sauces", "Fresh herb additions", "Artisan portions"],
      color: "#8B5CF6"
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
                Meal Prep Planning
              </h1>
              <p className="wlt-subtitle">
                Master the art of healthy meal preparation. Plan, prepare, and enjoy
                nutritious meals that fuel your body and support your wellness goals.
              </p>
            </div>
          </div>
        </section>

        <section className="wlt-benefits">
          <div className="container">
            <div className="wlt-benefits-card">
              <h2 className="wlt-section-title">Benefits of Meal Prepping</h2>
              <p className="wlt-benefits-description">
                Discover how strategic meal planning transforms your relationship with food and nutrition.
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
              <h2 className="wlt-section-title">Meal Prep Essentials</h2>
              <p className="wlt-section-text">
                Learn these core skills and techniques for successful meal preparation.
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
              <h2 className="wlt-section-title">Meal Prep Plans</h2>
              <p className="wlt-section-text">Choose the plan that matches your lifestyle and cooking expertise.</p>
            </div>
            <div className="wlt-programs-grid">
              {plans.map((plan, index) => (
                <div key={index} className="wlt-program-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{plan.icon}</div>
                    <h3 className="wlt-program-title">{plan.title}</h3>
                  </div>
                  <p className="wlt-program-desc">{plan.desc}</p>
                  <div className="wlt-program-features">
                    <p>• Duration: {plan.duration}</p>
                    {plan.meals.map((meal, idx) => (
                      <p key={idx}>• {meal}</p>
                    ))}
                  </div>
                  <Button className="wlt-program-btn" style={{border: `2px solid ${plan.color}`}}>
                    Start Planning
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
                  Eat Well, Live Well
                </h2>
                <p className="wlt-cta-text">
                  Investing time in meal preparation is investing in your health.
                  Create a sustainable pattern of nutritious eating that nourishes your body and supports your goals.
                </p>
                <div className="wlt-cta-buttons">
                  <Link href="/register" className="btn wlt-btn-primary">Start Meal Prep</Link>
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

export default MealPrepPlanning;
