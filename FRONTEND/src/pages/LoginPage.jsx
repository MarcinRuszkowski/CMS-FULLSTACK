import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { loginUser } from "../API/loginAPI";
import AlertError from "../components/AlertError";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(formData);

      if (result.user) {
        navigate("/dashboard");
        const user = JSON.stringify(result.user);
        localStorage.setItem("user", user);
        localStorage.setItem("token", result.token);
      } else {
        setErrorMessage("Niepoprawny email lub hasło");

        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage("Niepoprawny email lub hasło");


      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <>
      <section className="flex justify-center">
        <form className="flex flex-col gap-8 items-center p-10 bg-box-color rounded-md h-auto w-2/4">
          <div className="flex flex-col text-start w-full gap-3">
            <label
              htmlFor=""
              className="font-bold text-4xl text-main-color w-full text-start"
            >
              Zaloguj się
            </label>
            <Link
              to="/signup"
              className="text-sm text-secondary-color cursor-pointer"
            >
              rejestruj się
            </Link>
          </div>

          {errorMessage && (
            <div className="fixed bottom-5 right-10">
              <AlertError message={errorMessage} />
            </div>
          )}

          <label className="input flex items-center gap-2 text-secondary-color bg-bg-color border-2 border-main-color py-1 px-3 leading-10 rounded-md hover:rounded-full w-full">
            <MdEmail className="text-secondary-color" />
            <input
              required
              type="text"
              className="grow"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
            />
          </label>
          <label className="input flex items-center gap-2 text-secondary-color bg-bg-color border-2 border-main-color py-1 px-3 leading-10 rounded-md hover:rounded-full w-full">
            <FaKey className="text-secondary-color" />
            <input
              required
              type="password"
              className="grow"
              placeholder="Hasło"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="current-password"
            />
          </label>

          <button
            className="bg-main-color py-1 px-3 text-white leading-10 rounded-md hover:rounded-full w-full"
            onClick={handleSubmit}
          >
            Zaloguj się
          </button>
        </form>
      </section>
    </>
  );
}

export default LoginPage;
