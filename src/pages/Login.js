import { useNavigate } from "react-router-dom";


export default function Login() {

  const navigate = useNavigate();

  function onSubmit() {
    //code for checking user credentials
    navigate("/dashboard");
  }
  return (
    <>
      <h2>Login Page</h2>
      <button onClick={onSubmit}>Login</button>
    </>
  );
}
