const Register = () => {
  return (
    <>
      <h1 className="text-center">Registrazione</h1>
      <form noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            // onChange={e => updateInputValue(e)}
            // value={formData.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            // onChange={e => updateInputValue(e)}
            // value={formData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            // onChange={e => updateInputValue(e)}
            // value={formData.password}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Conferma Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password_confirmation"
            name="password_confirmation"
            // onChange={e => updateInputValue(e)}
            // value={formData.password_confirmation}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profile_img" className="form-label">
            Profile Image
          </label>
          <input
            className="form-control"
            type="file"
            id="profile_img"
            name="profile_img"
            // onChange={e => updateImageField(e)}
            // value={formData.profile_img}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
