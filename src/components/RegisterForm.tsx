import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/usuarios', {
                nombre,
                correo,
                password
            });

            setMensaje('Usuario registrado correctamente');
            setNombre('');
            setCorreo('');
            setPassword('');
        } catch (error) {
            console.error('Error al registrar:', error);
            setMensaje('Error al registrar el usuario');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h2>Registrar Usuario</h2>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
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
            <button type="submit">Registrar</button>
            {mensaje && <p>{mensaje}</p>}
        </form>
    );
};

export default RegisterForm;
