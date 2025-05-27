import type { ReactNode } from "react";

const PhoneMockup = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative mx-auto w-72 h-[600px]">
      {/* Marco del teléfono */}
      <div className="absolute inset-0 bg-gray-900 rounded-[40px] p-1 shadow-2xl">
        <div className="relative h-full w-full bg-gray-100 rounded-[35px] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-20"></div>
          {/* Pantalla */}
          <div className="absolute inset-0 overflow-y-auto">
            {children}
          </div>
          {/* Botón home */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-2 border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;