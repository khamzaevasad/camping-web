import './RegisterForm.css';

const RegisterForm = ({ setShowModal }) => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Registrate</h2>
        <span onClick={() => setShowModal(false)} className="close">
          &times;
        </span>
      </div>
      <form className="form">
        <label>Email</label>
        <input type="email" placeholder="Your email" />

        <label>Password</label>
        <input type="password" placeholder="Your password" />

        <label>Repeat your password</label>
        <input type="password" placeholder="Your password" />

        <div className="checkbox-container">
          <input type="checkbox" id="keepLoggedIn" />
          <label htmlFor="keepLoggedIn">Keep me logged in</label>
        </div>

        <button type="submit">REGISTRATE</button>
      </form>
    </div>
  );
};

export default RegisterForm;
