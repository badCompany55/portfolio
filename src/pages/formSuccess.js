import React from "react"
import Layout from "../components/layout.js"
import "../styles/successMsg.scss"

const FormSuccessMsg = () => {
  return (
    <Layout>
      <div class="messageCont ">
        <h2 className="success subHeading">Success !!</h2>
        <p className="successMsg text">
          Thank you for your interest. I take all inquiries very seriously and
          will get back with you very shortly.
        </p>
      </div>
    </Layout>
  )
}

export default FormSuccessMsg
