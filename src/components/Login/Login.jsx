import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import UserHandler from '../../handler/UserHandler';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Por favor, rellena todos los campos.');
      return;
    }

    try {

      let allUsers = await UserHandler.getUsers();
      const user = allUsers.find(user => user.email === email && user.userPassword === password);
      if (!user) {
        throw new Error('Correo electrónico o contraseña incorrectos.');
      }

      navigate('/MyProducts');

    } catch (error) {
      setError(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: error.message,
      });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Comienza tu sesión</button> {/* Botón para abrir el modal */}

      {isModalOpen && (

        <div className="modal">
          <div className="modal-content">
            <img src="/images/logoHuella.png" alt="Logo" className="logo" />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>
                  Correo electrónico:
                  <input
                    type="email"
                    className="input-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Contraseña:
                  <input
                    type="password"
                    className="input-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
              </div>
              {error && <p>{error}</p>}
              <div className="button-container">
                <button type="submit" className="button-login">Iniciar sesión</button>
                <button type="button" onClick={() => navigate('/register')} className="button-register">Registrarse</button>
              </div>
            </form>
            <div className="image-container">
            <div className="image-container-baby">
              <img src="/images/baby_cat.jpg" alt="Baby Cat" className="image-baby-cat" />
            </div>
            <div className="button-back-container"> 
              <button onClick={() => navigate('/')} className="button-back">Volver</button>
            </div>
            <div className="image-container-baby">
              <img src="/images/baby_dog.jpg" alt="Baby Dog" className="image-baby-dog" />
             </div>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Login;