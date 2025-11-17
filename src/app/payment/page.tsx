'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States'
  });

  const plans: Record<string, { name: string; price: string; features: string[]; popular: boolean }> = {
    'basic': {
      name: 'Basic Plan',
      price: '$9.99/month',
      features: ['Workout videos', 'Meal planning', 'Community support'],
      popular: false
    },
    'premium': {
      name: 'Premium Plan',
      price: '$19.99/month',
      features: ['Everything in Basic', 'Personal coaching', 'Custom plans'],
      popular: true
    },
    'elite': {
      name: 'Elite Plan',
      price: '$29.99/month',
      features: ['Everything in Premium', '1-on-1 sessions', 'VIP support'],
      popular: false
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const paymentFormStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    minHeight: '100vh',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  };

  return (
    <>
      <Navbar />
      <main style={paymentFormStyle}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem 1rem'
        }}>

          {/* Security Badge */}
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <span>🔒</span>
              <span>256-bit SSL Encrypted</span>
            </div>
          </div>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Complete Your Payment
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Your payment information is fully secured and encrypted. Choose your plan below and proceed to checkout.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>

            {/* Plan Selection */}
            <div style={{
              background: 'white',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              border: '1px solid #e5e7eb'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '1.5rem'
              }}>
                Choose Your Plan
              </h2>

              {!selectedPlan ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {Object.entries(plans).map(([key, plan]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedPlan(key)}
                      style={{
                        padding: '1rem',
                        border: `2px solid ${plan.popular ? '#fbbf24' : '#e5e7eb'}`,
                        borderRadius: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        background: plan.popular ? '#fefce8' : 'white',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {plan.popular && (
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: '#f59e0b',
                          color: 'white',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          textTransform: 'uppercase'
                        }}>
                          Most Popular
                        </div>
                      )}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                        <div>
                          <h3 style={{ fontWeight: '600', color: '#374151' }}>{plan.name}</h3>
                          <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>
                            {plan.features.join(' • ')}
                          </p>
                        </div>
                        <span style={{
                          fontSize: '1.125rem',
                          fontWeight: '700',
                          color: plan.popular ? '#d97706' : '#059669'
                        }}>
                          {plan.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <div style={{
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '0.75rem',
                    marginBottom: '1rem',
                    color: 'white'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1rem'
                    }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{plans[selectedPlan].name}</h3>
                      <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>{plans[selectedPlan].price}</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {plans[selectedPlan].features.map((feature, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '0.875rem',
                          marginBottom: '0.5rem'
                        }}>
                          <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setSelectedPlan('')}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'transparent',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.5rem',
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#9ca3af';
                      e.currentTarget.style.color = '#374151';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#d1d5db';
                      e.currentTarget.style.color = '#6b7280';
                    }}
                  >
                    Change Plan
                  </button>
                </div>
              )}
            </div>

            {/* Payment Form */}
            {selectedPlan ? (
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid #e5e7eb'
              }}>
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '1.5rem'
                }}>
                  Payment Information
                </h2>

                {/* Payment Method */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.75rem'
                  }}>
                    Payment Method
                  </label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '1rem'
                  }}>
                    {[
                      { id: 'card', name: 'Credit Card', icon: '💳' },
                      { id: 'paypal', name: 'PayPal', icon: '🅿️' }
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        style={{
                          padding: '1rem',
                          border: `2px solid ${paymentMethod === method.id ? '#3b82f6' : '#e5e7eb'}`,
                          borderRadius: '0.5rem',
                          background: paymentMethod === method.id ? '#eff6ff' : 'white',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ fontSize: '1.5rem' }}>{method.icon}</span>
                        <span style={{
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: paymentMethod === method.id ? '#1d4ed8' : '#374151'
                        }}>
                          {method.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <form>
                  {paymentMethod === 'card' ? (
                    <>
                      {/* Card Information */}
                      <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '1rem'
                        }}>
                          Card Information
                        </h3>

                        <div style={{ marginBottom: '1rem' }}>
                          <input
                            type="text"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '0.75rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '0.5rem',
                              fontSize: '1rem',
                              transition: 'border-color 0.2s ease'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                          />
                        </div>

                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <input
                            type="text"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            style={{
                              padding: '0.75rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '0.5rem',
                              fontSize: '1rem',
                              transition: 'border-color 0.2s ease'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                          />
                          <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            style={{
                              padding: '0.75rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '0.5rem',
                              fontSize: '1rem',
                              transition: 'border-color 0.2s ease'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                          />
                        </div>

                        <div>
                          <input
                            type="text"
                            name="cardholderName"
                            placeholder="Cardholder Name"
                            value={formData.cardholderName}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '0.75rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '0.5rem',
                              fontSize: '1rem',
                              transition: 'border-color 0.2s ease'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                          />
                        </div>
                      </div>

                      {/* Billing Information */}
                      <div>
                        <h3 style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '1rem'
                        }}>
                          Billing Information
                        </h3>

                        <div style={{ marginBottom: '1rem' }}>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '0.75rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '0.5rem',
                              fontSize: '1rem',
                              transition: 'border-color 0.2s ease'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                          />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                          <input
                            type="text"
                            name="address"
                            placeholder="Billing Address"
                            value={formData.address}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              padding: '0.75rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '0.5rem',
                              fontSize: '1rem',
                              transition: 'border-color 0.2s ease'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                          />
                        </div>

                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 150px',
                          gap: '1rem'
                        }}>
                          <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            style={{
                              padding: '0.75rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '0.5rem',
                              fontSize: '1rem',
                              transition: 'border-color 0.2s ease'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                          />
                          <input
                            type="text"
                            name="zipCode"
                            placeholder="ZIP"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            style={{
                              padding: '0.75rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '0.5rem',
                              fontSize: '1rem',
                              transition: 'border-color 0.2s ease'
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          marginTop: '2rem',
                          padding: '1rem',
                          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
                        }}
                      >
                        Complete Payment - {plans[selectedPlan]?.price}
                      </button>
                    </>
                  ) : (
                    <div style={{
                      textAlign: 'center',
                      padding: '3rem 1rem'
                    }}>
                      <div style={{
                        fontSize: '3rem',
                        marginBottom: '1rem'
                      }}>
                        🅿️
                      </div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#374151',
                        marginBottom: '0.5rem'
                      }}>
                        PayPal Checkout
                      </h3>
                      <p style={{
                        color: '#6b7280',
                        marginBottom: '2rem'
                      }}>
                        You'll be redirected to PayPal to complete your secure payment.
                      </p>
                      <button
                        type="submit"
                        style={{
                          padding: '1rem 2rem',
                          background: '#0070ba',
                          color: 'white',
                          border: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '1rem',
                          fontWeight: '600',
                          cursor: 'pointer'
                        }}
                      >
                        Continue with PayPal
                      </button>
                    </div>
                  )}
                </form>
              </div>
            ) : (
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  💳
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Select a Plan First
                </h3>
                <p style={{
                  color: '#6b7280'
                }}>
                  Choose your preferred subscription plan to continue with payment.
                </p>
              </div>
            )}
          </div>

          {/* Back Link */}
          <div style={{
            textAlign: 'center',
            marginTop: '2rem'
          }}>
            <Link
              href="/#pricing"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#374151'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
            >
              <span>←</span>
              Back to Plans
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
