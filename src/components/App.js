import React from 'react'
import { useState } from "react";
import '../styles/styles.css'

function App() {
  const [email, setEmail] = useState("");

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    // Validate email address before submitting
    if (email) {
      localStorage.setItem("email", email);

      // Clear the input field
      setEmail("");

      const successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }
  }
  return (
    <>
      <div className="w-full p-5">
        <div className="container flex flex-col gap-y-8 md:gap-y-10 mx-auto px-5 py-5 sm:py-12 md:py-10 lg:py-15 xl:py-20 text-gray-200 bg-gray-800 rounded-2xl">
          <div className="w-full text-center">
            <div className="mb-4 text-white text-3xl md:text-4xl font-extrabold">
              Don’t miss out!
            </div>

            <div className="text-base sm:text-md">
              Subscribe to your newsletter to stay in the loop. Our newsletter
              is sent once in a week on every friday so subscribe to get latest
              news and updates.
            </div>
          </div>

          <form className="w-full" onSubmit={onSubmit}>
            <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
              <input
                data-test="email-input"
                type="text"
                placeholder="Subscribe to our newsletter"
                value={email}
                onChange={onChangeEmail}
                className="sm:w-2/4 sm:max-w-[400px] h-12 p-3 text-gray-900 sm:text-md border border-solid border-gray-300 rounded-lg shadow"
              />

              <button
                data-test="submit-button"
                type="submit"
                className="sm:w-1/4 sm:max-w-[180px] h-12 text-white sm:text-md bg-blue-600 rounded-lg shadow transition-all duration-300 ease-in-out hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
            <div
              id="success-message"
              data-test="success-message"
              style={{ display: "none" }}
              className="mt-3 text-green-500 text-center"
            >
              <p>Thank you for subscribing to our newsletter</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App
