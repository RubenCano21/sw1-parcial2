import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-900 to-indigo-900 flex flex-col items-center justify-center text-white px-6">
      <div className="bg-purple-800 bg-opacity-70 rounded-xl shadow-lg p-10 max-w-xl text-center">
        <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
          ¡Bienvenido a tu página principal!
        </h1>
        <p className="text-lg mb-8 leading-relaxed drop-shadow-md">
          Esta es la página <span className="font-semibold underline decoration-indigo-300">Home</span> después de iniciar sesión.  
          Explora las funcionalidades y disfruta de la experiencia.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 transition rounded-md px-6 py-3 font-semibold shadow-lg drop-shadow-lg">
          Explorar ahora
        </button>
      </div>
    </div>
  );
};

export default Home;
