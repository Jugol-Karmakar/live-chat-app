import React from "react";

const Register = () => {
  return (
    <section className="bg-[#a7bcff]">
      <div className="md:h-screen flex flex-col justify-center items-center mx-auto px-6 py-8 lg:py-0">
        <h1>SociaGuru</h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1>Create new account</h1>
            <form>
              <div>
                <label>
                  <span>Your Name</span>
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="Text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label>
                  <span>Your Name</span>
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <label>
                  <span>Your Name</span>
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <button
                  className="w-full bg-blue-600 text-lg text-white font-bold py-3 rounded-lg cursor-pointer"
                  type="submit"
                >
                  Create an account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
