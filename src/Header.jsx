import { Rocket, Lightbulb } from "phosphor-react";
import productLanding from './assets/product_landing.svg';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-100 via-blue-50 to-teal-100 text-slate-800 py-16 px-4 sm:px-6 md:px-10 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-teal-500 font-extrabold mb-4 leading-tight">
            Revolutionize Your Home with Smart Technology
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
            Experience unparalleled convenience and security. Take control of your home like never before.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 max-w-xs sm:max-w-none mx-auto md:mx-0">

            <a
              href="#"
              className="w-full sm:w-48 inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-teal-600 transition"
            >
              <Rocket size={30} weight="fill" color="#fff" />
              Get Started
            </a>

            <a
              href="#"
              className="w-full sm:w-48 inline-flex items-center justify-center gap-2 bg-white text-teal-700 border border-teal-300 px-6 py-3 rounded-full font-semibold hover:bg-teal-100 hover:border-teal-400 shadow-sm transition"
            >
              <Lightbulb size={30} weight="regular" color="#0EA5E9" />
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1 max-w-md w-full mx-auto md:mx-0 flex justify-center mt-8 md:mt-0">
          <img
            src={productLanding}
            alt="Product landing"
            className="w-full h-auto max-h-60 sm:max-h-72 md:max-h-96 lg:max-h-full object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
