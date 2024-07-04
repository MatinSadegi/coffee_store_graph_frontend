import React from 'react'
import "./PageLoadingSpinner.css";

const PageLoadingSpinner = () => {
  return (
    <div className=" flex h-screen w-screen bg-white fixed z-50 items-center justify-center ">
      <span className="loader2"></span>
    </div>
  );
}

export default PageLoadingSpinner