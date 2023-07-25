"use client";

import { useEffect } from "react";
import { useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import { redirect } from "next/navigation";

const Signin = () => {
  const { data: session } = useSession();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    if (session) redirect("/generator");
  }, [session]);

  return (
    <section className="flex flex-col w-full h-full items-center justify-center">
      <h1 className="mt-36 text-5xl text-white font-bold">Sign in to app</h1>
      <p className="mx-auto mt-6 max-w-md text-lg text-center text-gray-500 leading-7">
        Join thousands of happy customers and remodel your room today!
      </p>
      <form
        className="flex flex-col w-64 mt-10 gap-y-3 items-center"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col w-full gap-2">
          <label className="text-white" htmlFor="email">
            Email Address*
          </label>
          <input
            className="h-9 w-full rounded-md border border-gray-500"
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="text-white" htmlFor="password">
            Password*
          </label>
          <input
            className="h-9 w-full rounded-md border border-gray-500"
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button
          className="flex w-64 mt-6 items-center justify-center space-x-2 rounded-lg border border-indigo-600 text-white px-5 py-2 text-sm shadow-md hover:bg-indigo-500 bg-indigo-600 font-medium transition"
          type="submit"
        >
          Sign in
        </button>
        <p className="text-white mt-6">Or</p>
        <button
          className="flex w-64 mt-6 items-center justify-center space-x-2 gap-2 rounded-lg border border-indigo-600 text-white px-5 py-2 text-sm shadow-md hover:bg-indigo-600 hover:text-white font-medium transition"
          type="button"
          onClick={() =>
            signIn("google", { redirect: false, callbackUrl: "/dashboard" })
          }
        >
          Sign in with Google
          <GoogleIcon />
        </button>
      </form>
    </section>
  );
};

export default Signin;
