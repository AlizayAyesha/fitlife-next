import Link from 'next/link';

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$9.99',
      period: 'per month',
      features: [
        'Access to all workout videos',
        'Basic meal planning',
        'Community support',
        'Mobile app access',
        'Progress tracking'
      ],
      buttonText: 'Start Now',
      popular: false
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: 'per month',
      features: [
        'Everything in Basic plan',
        'Personal trainer consultation',
        'Advanced meal planning',
        'Custom workout plans',
        'Priority support',
        'Nutrition coaching'
      ],
      buttonText: 'Go Premium',
      popular: true
    },
    {
      name: 'Elite',
      price: '$29.99',
      period: 'per month',
      features: [
        'Everything in Premium plan',
        '1-on-1 coaching sessions',
        'Body composition analysis',
        'Supplements discounts',
        'Exclusive challenges',
        'VIP community access'
      ],
      buttonText: 'Become Elite',
      popular: false
    }
  ]

  return (
    <section
      className="section pricing bg-dark has-bg-image"
      id="pricing"
      aria-label="pricing"
      style={{ backgroundImage: "url('/images/classes-bg.png')" }}
    >
      <div className="container">
        <p className="section-subtitle text-center">Choose Your Plan</p>
        <h2 className="h2 section-title text-center" style={{color: 'white'}}>Membership Plans</h2>
        <p className="section-text text-center">Transform your fitness journey with our flexible pricing options designed for every goal and budget.</p>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && (
                <div className="popular-badge" style={{top: '5px'}}>Most Popular</div>
              )}
              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li className="pricing-feature" key={featureIndex}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/payment" style={{
                display: 'inline-block',
                width: '100%',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
                transition: 'all 300ms ease',
                transform: 'scale(1)',
                boxShadow: plan.popular ? '0 0 20px rgba(239, 68, 68, 0.4)' : 'none',
                border: plan.popular ? 'none' : '2px solid #dc2626',
                backgroundColor: plan.popular ? '#dc2626' : '#ffffff',
                backgroundImage: plan.popular ? 'linear-gradient(90deg, #dc2626, #b91c1c)' : 'none',
                color: plan.popular ? '#ffffff' : '#dc2626',
                textDecoration: 'none'
              }}>
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p className="pricing-note" style={{color: 'white'}}>All plans include a 14-day free trial. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}
