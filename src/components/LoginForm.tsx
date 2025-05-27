import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<string>('http://localhost:8080/api/auth/login', {
        correo,
        password,
      });

      setMensaje(response.data);
      setCorreo('');
      setPassword('');
    } catch (error: any) {
      if (error.response && typeof error.response.data === 'string') {
        setMensaje(error.response.data);
      } else {
        setMensaje('Error en la conexión');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Ingresar</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default LoginForm;
