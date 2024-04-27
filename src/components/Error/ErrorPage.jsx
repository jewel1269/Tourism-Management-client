import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="lg:p-64"style={{ backgroundColor: "rgb(229, 234, 240)" }}>
    <section className="flex items-center h-min-full  p-16  dark:bg-gray-50  dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl  dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8  dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <NavLink to={"/"}>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
          >
            Back to homepage
          </a>
          </NavLink>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ErrorPage;
