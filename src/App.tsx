import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Prompt from './pages/Prompt'
import PhoneMockup from './components/PhoneMockup';
import CanvasDropZone from './components/CanvasDropZone';

function App() {
  const [canvasWidgets, setCanvasWidgets] = useState([]);
  const [draggedWidget, setDraggedWidget] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Estados para los inputs del login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleDragStart = (widget: any) => {
    setDraggedWidget(widget);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedWidget) {
      setCanvasWidgets([...canvasWidgets, draggedWidget]);
      setDraggedWidget(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Función que "inicia sesión"
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí puedes validar o hacer autentificación real
    if (email && password) {
      // Por ahora solo activamos el estado loggedIn
      setIsLoggedIn(true);
    } else {
      alert('Por favor completa ambos campos');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar sesión</h2>
          <label htmlFor="email" className="block mb-2 text-gray-700 font-semibold">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ejemplo@correo.com"
            required
          />

          <label htmlFor="password" className="block mb-2 text-gray-700 font-semibold">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    );
  }

  // Si ya está logueado, muestra la app principal
  return (
    <>
      <Navbar />
      <div className="flex w-full h-screen flex-col">
        <div className="flex flex-row flex-grow">
          <div className="w-1/4">
            <div className="card bg-base-300 rounded-l-box h-full grid place-items-center">
              <Prompt />
            </div>
          </div>

          <div className="w-3/4">
            <div className="card bg-base-300 rounded-r-box h-full grid place-items-center">
              <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 flex justify-center">
                    <PhoneMockup>
                      <CanvasDropZone
                        widgets={canvasWidgets}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                      />
                    </PhoneMockup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
