import './login.css';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx'; 
import UserHandler from '../../handler/UserHandler';

function Login() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
  
 const navigate = useNavigate();
 const { setIsAuthenticated, setEmail: setUserEmail } = useContext(UserContext);

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
      setIsAuthenticated(true);
      setUserEmail(email); // Actualiza el email del usuario en el contexto

    } catch (error) {
      setError(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: error.message,
      });
    }
  };



  return (
    <div>
   
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
      )
    </div>
  );
}
export default Login;