import React from "react";





export const SubmitedMessage = () => {
  return (

      <div className="flex flex-col justify-center items-center text-center">
        <img className="w-36 animate__bounceIn" src="../checkmark.png" alt="success" />
        <h2 className="text-3xl my-4 font-bold animate__animated animate__bounceIn ">
          Your email was sent successfuly
        </h2>
        <p className="animate__animated animate__bounceIn">
          Thank you for your interest in working with me, I will review
          your email and get back to you as soon as possible.
        </p>
      </div>

  );
};
