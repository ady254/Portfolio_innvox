

import { CheckCircle2 } from 'lucide-react';

const Subscription = () => {
  const plans = [
    {
      name: "Startup",
      price: "₹9,999",
      period: "/month",
      description: "Perfect for new businesses",
      features: [
        "Modern website (5 pages)",
        "Monthly maintenance",
        "WhatsApp automation setup",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "₹19,999",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Dynamic website (unlimited pages)",
        "Meta ads management",
        "WhatsApp marketing campaigns",
        "Advanced analytics & reporting",
        "Priority email & chat support",
        "SEO optimization",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "₹49,999",
      period: "/month",
      description: "For established brands",
      features: [
        "Custom development & design",
        "Advanced ads management",
        "AI chatbot integration",
        "Full WhatsApp API setup",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
      ],
    },
  ];

  return (
    <>


      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Choose the perfect plan for your business. Scale anytime as your needs grow.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`card ${plan.highlighted ? 'ring-2 ring-blue-600 transform scale-105' : ''}`}
              >
                {plan.highlighted && (
                  <div className="mb-6">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-black text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <button
                  className={`w-full mb-8 py-3 px-6 rounded-lg font-semibold transition-all ${plan.highlighted
                    ? 'btn-primary'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                >
                  Get Started
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gray-50 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              {[
                "SSL Certificate",
                "Daily Backups",
                "Performance Optimization",
                "Security Monitoring",
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss which plan is best for your business. No hidden fees, cancel anytime.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all">
            Schedule a Call
          </button>
        </div>
      </section>


    </>
  );
};

export default Subscription;
