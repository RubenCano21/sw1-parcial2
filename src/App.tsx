import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Prompt from './pages/Prompt';
import PhoneMockup from './components/PhoneMockup';
import CanvasDropZone from './components/CanvasDropZone';

type Widget = {
  id: string | number;
  icon: React.ReactNode;
  title: string;
  category: string;
};

type LoginResponse = {
  token: string;
  username: string;
  message: string;
};

function App() {
  const [canvasWidgets, setCanvasWidgets] = useState<Widget[]>([]);
  const [draggedWidget, setDraggedWidget] = useState<Widget | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDragStart = (widget: Widget) => {
    setDraggedWidget(widget);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedWidget) {
      setCanvasWidgets((prevWidgets) => [...prevWidgets, draggedWidget]);
      setDraggedWidget(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Por favor completa ambos campos');
      return;
    }

    try {
      const response = await axios.post<LoginResponse>(
        'http://localhost:8080/auth/login',
        {
          username: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    } catch (error) {
      alert('Error en la autenticación: usuario o contraseña incorrectos');
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  // Simulación de respuesta IA para crear widgets
  const getAIResponse = (prompt: string) => {
    let newWidget: Widget;

    if (prompt.toLowerCase().includes('login')) {
      newWidget = {
        id: Date.now(),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12H8m8 0v4m0-4V8a4 4 0 00-8 0v4m0 0v4m0-4H4"
            />
          </svg>
        ),
        title: 'Formulario de Login',
        category: 'Autenticación',
      };
    } else {
      newWidget = {
        id: Date.now(),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
            <path
              d="M8 12l2 2 4-4"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        title: `Widget generado: ${prompt.substring(0, 15)}...`,
        category: 'Generado',
      };
    }

    setCanvasWidgets((prevWidgets) => [...prevWidgets, newWidget]);
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Iniciar sesión
          </h2>
          <label
            htmlFor="email"
            className="block mb-2 text-gray-700 font-semibold"
          >
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

          <label
            htmlFor="password"
            className="block mb-2 text-gray-700 font-semibold"
          >
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

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <div className="flex w-full h-screen flex-col">
        <div className="flex flex-row flex-grow">
          <div className="w-1/4">
            <div className="card bg-base-300 rounded-l-box h-full grid place-items-center">
              <Prompt onSendPrompt={getAIResponse} />
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
