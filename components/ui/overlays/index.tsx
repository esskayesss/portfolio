import React from "react";

export const LoadingOverlay: React.FC<{ className: string }> = ({className}) => {
  return (
    <div className={`fixed ${className} inset-0 backdrop-blur-sm z-50 flex justify-center items-center`}>
      <span className={`animate-spin`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="#bdbfcb" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              opacity=".25"/><circle cx="12" cy="2.5" r="1.5" fill="#bdbfcb">
        </circle>
      </svg>
      </span>
    </div>
  )
}