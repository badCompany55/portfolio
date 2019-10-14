import React from "react"
import Layout from "../components/layout.js"

const FormSuccessMsg = () => {
  return (
    <div class="messageCont">
      <h2 className="success">Success !!</h2>
      <p className="successMsg">
        Thank you for your interest. Please make sure that you included your
        email address. I will get back to you shortly.
      </p>
    </div>
  )
}

export default FormSuccessMsg
