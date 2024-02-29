// Login.jsx
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      // Reemplaza 'YOUR_API_ENDPOINT' con la URL de tu endpoint de autenticación
      const response = fetch('http://localhost:5173/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = response.json(); 
       throw new Error(errorData.message || 'Error al iniciar sesión');
     
      }
         Swal.fire({
          icon: 'success',
          title: 'Éxito!',
          text: 'Sesion iniciada te llevamos a tu perfil',
        }).then(() => {
      navigate('/myProducts'); // Redirecciona al usuario a la página de sus productos
      
  });

} catch (error) {
  setError(error.message);
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text:error.message,
  });
}
};
return (
  <div>
    <h1>Login</h1>
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p>{error}</p>}
          <button type="submit">Iniciar sesión</button>
          <button type="button" onClick={() => navigate('/register')}>Registrarse</button>
        </form>
        <button onClick={() => navigate('/')}>Volver</button>
      </div>
    </div>
  </div>
);
}
export default Login;