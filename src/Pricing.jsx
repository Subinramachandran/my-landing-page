// Pricing.js
const Pricing = () => {
  return (
    <section className="bg-teal-50 py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-teal-500 mb-8">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">Basic Plan</h3>
            <p className="text-xl text-teal-500 mb-4">$29/month</p>
            <ul className="text-left text-gray-500 mb-6">
              <li>✔ 5 devices</li>
              <li>✔ 24/7 support</li>
              <li>✔ Basic cloud storage</li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition"
            >
              Get Started
            </a>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">Pro Plan</h3>
            <p className="text-xl text-teal-500 mb-4">$59/month</p>
            <ul className="text-left text-gray-500 mb-6">
              <li>✔ 15 devices</li>
              <li>✔ Priority support</li>
              <li>✔ Premium cloud storage</li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition"
            >
              Get Started
            </a>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">Enterprise Plan</h3>
            <p className="text-xl text-teal-500 mb-4">$99/month</p>
            <ul className="text-left text-gray-500 mb-6">
              <li>✔ Unlimited devices</li>
              <li>✔ 24/7 premium support</li>
              <li>✔ Advanced cloud storage</li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
