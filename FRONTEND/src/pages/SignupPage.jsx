import { useState } from "react";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
      const response = await fetch("http://localhost:5000/api/user/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);

      if (result.user._id) {
        navigate("/login");
      } else {
        console.error("Rejestracja nie powiodła się");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <section className="flex justify-center">
        <form className="flex flex-col  gap-8 items-center p-10 bg-box-color rounded-md h-auto w-2/4">
          <label
            htmlFor=""
            className="font-bold text-4xl text-main-color w-full text-start"
          >
            Zarejestruj się
          </label>
          <label className="input  flex items-center gap-2 text-secondary-color bg-bg-color border-2 border-main-color py-1 px-3 leading-10 rounded-md hover:rounded-full w-full">
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
          <label className="input  flex items-center gap-2 text-secondary-color bg-bg-color border-2 border-main-color py-1 px-3 leading-10 rounded-md hover:rounded-full w-full">
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
