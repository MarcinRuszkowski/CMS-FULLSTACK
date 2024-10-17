import { useState } from "react";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../API/singupAPI";
import AlertError from "../components/AlertError";
import AlertSuccess from "../components/AlertSuccess";

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
      const result = await registerUser(formData);

      if (result.user && result.user._id) {
        setSuccessMessage("Rejestracja zakończona pomyślnie");

        setTimeout(() => {
          setSuccessMessage("Utworzono użytkonika pomyślnie");
          navigate("/login");
        }, 3000);
      } else {
        setErrorMessage(result.message);

        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Błąd podczas rejestracji"
      );

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
              Zarejestruj się
            </label>
            <Link
              to="/login"
              className="text-sm text-secondary-color cursor-pointer"
            >
              zaloguj się
            </Link>
          </div>

          {errorMessage && (
            <div className="fixed bottom-5 right-10">
              <AlertError message={errorMessage} />
            </div>
          )}

          {successMessage && (
            <div className="fixed bottom-5 right-10">
              <AlertSuccess message={successMessage} />
            </div>
          )}

          <label className="input flex items-center gap-2 text-secondary-color bg-bg-color border-2 border-main-color py-1 px-3 leading-10 rounded-md hover:rounded-full w-full">
            <MdEmail className="text-secondary-color" />
            <input
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
              type="password"
              className="grow bg-bg-color"
              placeholder="Hasło"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </label>

          <button
            className="bg-main-color py-1 px-3 text-white leading-10 rounded-md hover:rounded-full w-full"
            onClick={handleSubmit}
          >
            Zarejestruj się
          </button>
        </form>
      </section>
    </>
  );
}

export default SignupPage;
