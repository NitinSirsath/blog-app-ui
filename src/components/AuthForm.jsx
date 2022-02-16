import React from "react";

const socailData = [
    {
        logo: "",
        label: "Sign up with Facebook",
    },
    {
        logo: "",
        label: "Sign up with Google",
    },
];

const AuthForm = ({ type }) => {
    return (
        <div className="wrapper_form">
            <div className="modal_heading">
                <div className="h3 m-0">
                    {type === "SignUp" ? "Create Account" : "Sign In"}
                </div>
                <div className="h6 m-0 laptop-only">SigIn/SignUp</div>
                <div className="h6 m-0 mobile-only"> X</div>
            </div>
            <div className="laptop-flex">
                <div className="left_form">
                    <div className="signup_form_wrapper">
                        {type === "SignUp" && (
                            <div className="d-flex form_one">
                                <input
                                    className="m-0 br-tl"
                                    placeholder="First Name"
                                    type="text"
                                />
                                <input
                                    className="m-0 br-tr"
                                    placeholder="Last Name"
                                    type="text"
                                />
                            </div>
                        )}
                        <div className="d-flex form_two flex-column ">
                            <input
                                className={`m-0 ${type === "SignIn" ? "br-t" : ""}`}
                                placeholder="Email"
                                type="text"
                            />
                            <input
                                className={`m-0 ${type === "SignIn" ? "br-b" : ""}`}
                                placeholder="Password"
                                type="text"
                            />
                            {type === "SignUp" && (
                                <input
                                    className="m-0 br-b"
                                    placeholder="Confirm Password"
                                    type="text"
                                />
                            )}
                            <div className="cta-flex">
                                <button className="btn btn-primary auth_cta rounded-pill btn-block">
                                    {type === "SignUp" ? "Create Account" : "Sign In"}
                                </button>
                                <p className="mobile-message">or,Sign In</p>
                            </div>
                            <div className="auth_social_wrapper">
                                {socailData.map((social) => (
                                    <button
                                        key={social.label}
                                        className="btn btn-outline-secondary rounded auth_social_cta btn-block"
                                    >
                                        {social.label}
                                    </button>
                                ))}
                            </div>
                            {type !== "SignUp" && (
                                <p className="auth_social_wrapper mb-0 text-center">
                                    Forgot Password?
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="right_form c-grid ">
                    <img src="./img/form.svg" height="300px" alt="" />
                    {type === "SignUp" && (
                        <p className="small_tip auth_social_wrapper mb-0 text-center">
                            <small>
                                By signing up, you agree to our Terms & conditions, Privacy
                                policy
                            </small>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthForm;

