import './PortalLoginPage.css';

const PortalLoginPage = () => {
  return (
    <div className="portal-page-container">
      <header className="portal-header">
        <h1>Portal</h1>
      </header>
      <main className="portal-main-content">
        <form className="login-form-card">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="offer-letter">Offer Letter Image (required for students on first login)</label>
            <input type="file" id="offer-letter" name="offer-letter" />
            <p className="file-info">JPG/PNG/WebP. Max ~2MB recommended.</p>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </main>
    </div>
  );
};

export default PortalLoginPage;