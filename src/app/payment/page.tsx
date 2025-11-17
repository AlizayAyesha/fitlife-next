'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  // In a real app, this would come from URL params or global state
  const plans: Record<string, { name: string; price: string }> = {
    'basic': { name: 'Basic', price: '$9.99/month' },
    'premium': { name: 'Premium', price: '$19.99/month' },
    'elite': { name: 'Elite', price: '$29.99/month' }
  };

  return (
    <section className="section-padding bg-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="h1 text-white mb-4">Complete Your Purchase</h1>
          <p className="text-xl text-gray-300">Choose your payment method and get started with your fitness journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Plan Selection */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Selected Plan</h2>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {!selectedPlan ? 'Choose a Plan' : plans[selectedPlan].name}
                </h3>
                <span className="text-2xl font-bold text-coquelicot">
                  {!selectedPlan ? '$0.00' : plans[selectedPlan].price}
                </span>
              </div>

              {!selectedPlan && (
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedPlan('basic')}
                    className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Basic Plan</span>
                      <span className="text-sm font-bold">$9.99/month</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedPlan('premium')}
                    className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Premium Plan</span>
                      <span className="text-sm font-bold">$19.99/month</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedPlan('elite')}
                    className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Elite Plan</span>
                      <span className="text-sm font-bold">$29.99/month</span>
                    </div>
                  </button>
                </div>
              )}

              {selectedPlan && (
                <div className="space-y-4">
                  <p className="text-gray-600">
                    You selected the <span className="font-semibold">{plans[selectedPlan].name}</span> plan.
                  </p>
                  <button
                    onClick={() => setSelectedPlan('')}
                    className="text-sm text-coquelicot hover:underline"
                  >
                    Change Plan
                  </button>
                </div>
              )}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <p className="font-medium text-gray-800">14-Day Free Trial</p>
                  <p className="text-sm text-gray-600">Cancel anytime during trial</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <p className="font-medium text-gray-800">Secure Payment</p>
                  <p className="text-sm text-gray-600">SSL encrypted checkout</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <p className="font-medium text-gray-800">Instant Access</p>
                  <p className="text-sm text-gray-600">Start working out immediately</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>

            <form className="space-y-6">
              {/* Payment Method Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center p-3 border border-gray-200 rounded-lg hover:border-coquelicot transition-colors"
                  >
                    <span className="text-lg">💳</span>
                    <span className="ml-2 font-medium">Card</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center p-3 border border-gray-200 rounded-lg hover:border-coquelicot transition-colors"
                  >
                    <span className="text-lg">📱</span>
                    <span className="ml-2 font-medium">PayPal</span>
                  </button>
                </div>
              </div>

              {/* Card Information */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coquelicot focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coquelicot focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coquelicot focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coquelicot focus:border-transparent"
                  />
                </div>
              </div>

              {/* Billing Information */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-800">Billing Address</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coquelicot focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Main St"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coquelicot focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="New York"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coquelicot focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      placeholder="10001"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coquelicot focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Complete Payment Button */}
              <button
                type="submit"
                disabled={!selectedPlan}
                className="w-full bg-coquelicot text-white font-bold py-4 px-6 rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {selectedPlan ? `Complete Payment - ${plans[selectedPlan].price}` : 'Select a Plan to Continue'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Your payment is secure and encrypted. You can cancel your subscription anytime.
              </p>
            </form>

            <div className="mt-6 text-center">
              <Link href="/#pricing" className="text-coquelicot hover:underline text-sm">
                ← Back to Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
