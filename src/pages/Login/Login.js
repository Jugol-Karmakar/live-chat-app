import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="bg-[#a7bcff]">
      <div className="md:h-screen flex flex-col justify-center items-center mx-auto px-6 py-8 lg:py-0">
        <h1 className="text-4xl font-bold mb-5">SociaGuru</h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 max-w-sm xl:p-0">
          <div className="p-6">
            <h2 className="text-center text-3xl font-bold py-2">Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs mx-auto mb-4">
                <label className="label">
                  <span className="label-text font-bold text-gray-800">
                    Email
                  </span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                  type="email"
                  placeholder="Email Address"
                  className="w-full max-w-xs border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all rounded-lg px-6 py-3 mt-2"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs mx-auto mb-4">
                <label className="label">
                  <span className="label-text font-bold text-gray-800">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="w-full max-w-xs border focus:border-blue-600 focus:shadow-lg outline-none duration-300 transition-all rounded-lg px-6 py-3 mt-2"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="pb-3">
                <p className="text-left font-bold text-blue-600 ml-2">
                  <Link to="/signin">Forget Password?</Link>
                </p>
              </div>

              <div className="flex justify-center">
                <input
                  type="submit"
                  value="SignUp"
                  className="w-full max-w-xs bg-blue-600 text-lg text-white font-bold py-3 rounded-lg cursor-pointer"
                />
              </div>
            </form>
          </div>

          <div className="pb-4">
            <p className="text-center font-bold text-gray-800">
              <Link to="/">
                Not yet member?
                <span className="text-blue-600">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
