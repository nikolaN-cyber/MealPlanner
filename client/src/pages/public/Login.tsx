import LoginForm from "../../components/loginForm/LoginForm";

const Login = () => {
  return (
    <div data-aos="zoom-in" className="container-fluid vh-100 mb-5 mt-5 p-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6 mb-3 d-none d-md-block">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Login Image" className="w-100 h-100 object-fit-cover" />
        </div>
        <div className="col-12 col-md-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
