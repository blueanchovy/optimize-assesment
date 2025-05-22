import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Choose the plan that's right for you
        </p>
        {/* changed layout from flex to grid to properly display all pricing cards which were getting cut off */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              className="min-w-[250px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col"
              key={"key"}
            >
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaLink}
                className={`block text-center py-3 px-6 rounded-lg font-medium ${
                  plan.popular
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {plan.ctaText}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Need a custom plan?{" "}
            <a href="/contact" className="text-purple-600 hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

const plans = [
  {
    name: "House",
    price: 9,
    features: [
      "50 generations per month",
      "Basic image editing",
      "Standard resolution",
      "Email support",
    ],
    ctaText: "Start Free Trial",
    ctaLink: "/signup?plan=starter",
    popular: false,
  },
  {
    name: "Village",
    price: 29,
    features: [
      "200 generations per month",
      "Advanced image editing",
      "High resolution",
      "Priority support",
      "Custom styles",
    ],
    ctaText: "Start Free Trial",
    ctaLink: "/signup?plan=pro",
    popular: true,
  },
  {
    name: "Town",
    price: 99,
    features: [
      "Unlimited generations",
      "Full image editing suite",
      "4K resolution",
      "24/7 support",
      "Custom styles",
      "API access",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact",
    popular: false,
  },
  {
    name: "City",
    price: 99,
    features: [
      "Unlimited generations",
      "Full image editing suite",
      "4K resolution",
      "24/7 support",
      "Custom styles",
      "API access",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact",
    popular: false,
  },
  {
    name: "Country",
    price: 99,
    features: [
      "Unlimited generations",
      "Full image editing suite",
      "4K resolution",
      "24/7 support",
      "Custom styles",
      "API access",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact",
    popular: false,
  },
  {
    name: "Continent",
    price: 99,
    features: [
      "Unlimited generations",
      "Full image editing suite",
      "4K resolution",
      "24/7 support",
      "Custom styles",
      "API access",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact",
    popular: false,
  },
];
