import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/404.gif"; 

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="errorPage__container">
      <img src={Image} alt="Page Not Found" />
      <h1>404</h1>
      <p>This page does not exist. You will be redirected shortly.</p>
    </section>
  );
};

export default ErrorPage;
