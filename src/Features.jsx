// Features.js
import { DeviceMobile, ShieldCheck, CloudArrowDown } from "phosphor-react";

const Features = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-teal-500 mb-8">
          Powerful Features for Smart Living
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <DeviceMobile size={40} color="#0EA5E9" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              Remote Control
            </h3>
            <p className="text-gray-500">
              Control your home devices from anywhere with our intuitive app.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <ShieldCheck size={40} color="#0EA5E9" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              Top-Notch Security
            </h3>
            <p className="text-gray-500">
              Advanced security features protect your home and give you peace of mind.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <CloudArrowDown size={40} color="#0EA5E9" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              Cloud Integration
            </h3>
            <p className="text-gray-500">
              Sync all your devices to the cloud for seamless control and backup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
