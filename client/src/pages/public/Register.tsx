import RegisterForm from "../../components/registerForm/RegisterForm";

const Register = () => {
  return (
    <div className="container-fluid vh-100 mb-5 mt-5 p-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-12 col-lg-10 col-xl-7">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
