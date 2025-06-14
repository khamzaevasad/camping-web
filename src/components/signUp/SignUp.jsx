import './SignUp.css';
import naverLogo from '../assets/naver.png';
import googleLogo from '../assets/google.png';
import kakaoLogo from '../assets/kakao.png';

const SignUp = ({ setShowModal, setModalType }) => {
  return (
    <>
      <div className="login-container">
        <h2 className="title">Sign in</h2>

        <div className="input-group">
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" placeholder="Your email" />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Your password" />
        </div>

        <div className="options">
          <label className="checkbox">
            <input type="checkbox" /> Keep me logged in
          </label>
          <a href="#" className="forgot">
            Forget your password ?
          </a>
        </div>

        <button onClick={() => setShowModal(false)} className="signin-btn">
          SIGN IN
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-buttons">
          <img src={naverLogo} alt="Naver" />
          <img src={googleLogo} alt="Google" />
          <img src={kakaoLogo} alt="Kakao" />
        </div>

        <button onClick={() => setModalType('register')} className="create-btn">
          CREATE ACCOUNT
        </button>
      </div>
    </>
  );
};

export default SignUp;
