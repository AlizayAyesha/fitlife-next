'use client';

import { useState } from 'react';
import Link from 'next/link';

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

  // In a real app, this would come from URL params or global state
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

  return (
    <>
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 -z-10" />

      <section className="min-h-screen py-8 px-4 flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Complete Your Purchase
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start your fitness journey today with our premium subscription
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            {/* Plan Selection - Left Column */}
            <div className="xl:col-span-1 space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">Choose Your Plan</h2>

                {!selectedPlan ? (
                  <div className="space-y-4">
                    {Object.entries(plans).map(([key, plan]) => (
                      <div
                        key={key}
                        onClick={() => setSelectedPlan(key)}
                        className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                          plan.popular
                            ? 'border-yellow-400 bg-gradient-to-r from-yellow-400/20 to-orange-500/20'
                            : 'border-white/30 bg-white/5 hover:border-white/50 hover:bg-white/10'
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                            MOST POPULAR
                          </div>
                        )}
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-white text-lg">{plan.name}</h3>
                          <span className="text-yellow-400 font-bold text-lg">{plan.price}</span>
                        </div>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="text-green-400 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-white text-xl">{plans[selectedPlan].name}</h3>
                        <span className="text-yellow-400 font-bold text-2xl">{plans[selectedPlan].price}</span>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-2 mb-4">
                        {plans[selectedPlan].features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-green-400 mr-2 text-lg">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-2">
                        <div className="flex items-center text-yellow-400">
                          <span className="mr-2">🎁</span>
                          <span className="text-sm">14-day free trial included</span>
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <span className="mr-2">🔒</span>
                          <span className="text-sm">Secure payment guaranteed</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedPlan('')}
                        className="mt-4 text-sm text-yellow-400 hover:text-yellow-300 underline transition-colors"
                      >
                        Change Plan
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Form - Right Columns */}
            <div className="xl:col-span-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">

                {selectedPlan ? (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">Payment Information</h2>

                    {/* Payment Method Selection */}
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-200 mb-4">
                        Payment Method
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {['card', 'paypal'].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setPaymentMethod(method)}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-center space-x-3 ${
                              paymentMethod === method
                                ? 'border-blue-400 bg-blue-500/20 text-blue-300'
                                : 'border-white/30 bg-white/5 text-gray-300 hover:border-white/50 hover:bg-white/10'
                            }`}
                          >
                            <span className="text-3xl">{method === 'card' ? '💳' : '📱'}</span>
                            <span className="font-medium capitalize">{method === 'card' ? 'Credit Card' : 'PayPal'}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <form className="space-y-6">
                      {paymentMethod === 'card' ? (
                        /* Card Information */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                              Card Number
                            </label>
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              placeholder="1234 5678 9012 3456"
                              className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                              Cardholder Name
                            </label>
                            <input
                              type="text"
                              name="cardholderName"
                              value={formData.cardholderName}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      ) : (
                        /* PayPal Info */
                        <div className="text-center py-12">
                          <div className="mb-6">
                            <span className="text-6xl">📱</span>
                          </div>
                          <p className="text-gray-300 mb-6">
                            You'll be redirected to PayPal to complete your payment securely.
                          </p>
                        </div>
                      )}

                      {/* Billing Information */}
                      <div className="space-y-4 border-t border-white/20 pt-6">
                        <h3 className="font-semibold text-white text-lg">Billing Information</h3>

                        <div>
                          <label className="block text-sm font-medium text-gray-200 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-200 mb-2">
                            Billing Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="123 Main Street"
                            className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                              City
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              placeholder="New York"
                              className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                              ZIP Code
                            </label>
                            <input
                              type="text"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              placeholder="10001"
                              className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                          <div className="hidden md:block">
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                              Country
                            </label>
                            <input
                              type="text"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Complete Payment Button */}
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>🚀</span>
                          <span>Complete Your Purchase - {plans[selectedPlan]?.price}</span>
                        </span>
                      </button>

                      {/* Trust indicators */}
                      <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400">🔒</span>
                          <span>Secure SSL</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-400">💳</span>
                          <span>PCI Compliant</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-purple-400">💰</span>
                          <span>30-Day Guarantee</span>
                        </div>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-20">
                    <div className="text-6xl mb-6">🎯</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Choose Your Plan First</h3>
                    <p className="text-gray-300">
                      Select a fitness plan above to continue with your purchase
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/#pricing"
                  className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <span>←</span>
                  <span>Back to Plans</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
