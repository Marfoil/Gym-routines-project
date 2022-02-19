import React, { useState } from 'react';
import './login.scss';
import logo from '../../../public/img/web-logo.png';
import { connect } from 'react-redux';
import { setUserAction } from '../../shared/store/actions/user.actions';

const Login = props => {
    const [LoginState, setLogin] = useState(false);
    const [SignUpForm, setSignUpForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [LogInForm, setLogInForm] = useState({
        email: '',
        password: '',
    });

    const signUp = () => {
        setSignUpForm({
            name: '',
            email: '',
            password: '',
        });
    };

    const signIn = () => {
        props.history.push('/dashboard');
        props.setUserType(LogInForm.email);
    };

    return (
        <div className="login">
            {/* NOTE: This is for the whole (left/right pink menu */}
            <div
                className={`login__colored-container ${
                    LoginState ? 'login__colored-container--left' : 'login__colored-container--right'
                }`}
            />
            {/* NOTE: This is for the left menu of the sing up section */}
            <div
                className={`login__welcome-back ${
                    LoginState ? 'login__welcome-back--active' : 'login__welcome-back--inactive'
                }`}
            >
                <div className="login__welcome-back__logo-container">
                    <img className="login__welcome-back__logo-container--image" src={logo} />
                    GYM Routines
                </div>
                <div className="login__welcome-back__main-container">
                    <div className="login__welcome-back__main-container__text-container">
                        <span className="login__welcome-back__main-container__text-container--title">
                            Welcome Back!
                        </span>
                        <span className="login__welcome-back__main-container__text-container--secondary">
                            To keep sharing your work with us, please log in.
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            setLogin(!LoginState);
                        }}
                        className="login__welcome-back__main-container__button-container"
                    >
                        Sign In
                    </div>
                </div>
            </div>

            {/* NOTE: This is for the sing up section form */}
            {LoginState && (
                <div
                    className={`login__create-container ${
                        LoginState ? 'login__create-container--active' : 'login__create-container--inactive'
                    }`}
                >
                    Create Account
                    <span className="login__create-container--info-text">Use email for your registration</span>
                    <div className="login__create-container__form-container">
                        <form
                            className="login__create-container__form-container__form"
                            onSubmit={e => {
                                e.preventDefault();
                                signUp();
                            }}
                        >
                            <input
                                className="login__create-container__form-container__form--name"
                                type="text"
                                placeholder="Name"
                                value={SignUpForm.name}
                                onChange={value =>
                                    setSignUpForm({
                                        ...SignUpForm,
                                        name: value.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                className="login__create-container__form-container__form--email"
                                type="email"
                                placeholder="Email"
                                value={SignUpForm.email}
                                onChange={value =>
                                    setSignUpForm({
                                        ...SignUpForm,
                                        email: value.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                className="login__create-container__form-container__form--password"
                                type="password"
                                placeholder="Password"
                                value={SignUpForm.password}
                                onChange={value =>
                                    setSignUpForm({
                                        ...SignUpForm,
                                        password: value.target.value,
                                    })
                                }
                                required
                            />
                            <button className="login__create-container__form-container__form--submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            )}
            {/* NOTE: This is for the log in form */}
            {!LoginState && (
                <div
                    className={`login__login-container ${
                        !LoginState ? 'login__login-container--active' : 'login__login-container--inactive'
                    }`}
                >
                    <div className="login__login-container__logo-container">
                        <img className="login__login-container__logo-container--image" src={logo} />
                        GYM Routines
                    </div>
                    <div className="login__login-container__main-container">
                        <span className="login__login-container__main-container--info-text">
                            Use email for your login
                        </span>
                        <div className="login__login-container__main-container__form-container">
                            <form
                                className="login__login-container__main-container__form-container__form"
                                onSubmit={e => {
                                    e.preventDefault();
                                    signIn();
                                }}
                            >
                                <input
                                    className="login__login-container__main-container__form-container__form--email"
                                    type="email"
                                    placeholder="Email"
                                    value={LogInForm.email}
                                    onChange={value =>
                                        setLogInForm({
                                            ...LogInForm,
                                            email: value.target.value,
                                        })
                                    }
                                    required
                                />
                                <input
                                    className="login__login-container__main-container__form-container__form--password"
                                    type="password"
                                    placeholder="Password"
                                    value={LogInForm.password}
                                    onChange={value =>
                                        setLogInForm({
                                            ...LogInForm,
                                            password: value.target.value,
                                        })
                                    }
                                    required
                                />
                                <button className="login__login-container__main-container__form-container__form--submit">
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {/* NOTE: This is for the right menu of the log in section (pink) */}

            <div
                className={`login__hello-container ${
                    !LoginState ? 'login__hello-container--active' : 'login__hello-container--inactive'
                }`}
            >
                <div className="login__welcome-back__main-container__text-container">
                    <span className="login__welcome-back__main-container__text-container--title">Hello, stranger!</span>
                    <span className="login__welcome-back__main-container__text-container--secondary">
                        Enter your personal details and start your own portfolio!
                    </span>
                </div>
                <div
                    onClick={() => {
                        setLogin(!LoginState);
                    }}
                    className="login__welcome-back__main-container__button-container"
                >
                    Sign Up
                </div>
            </div>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        setUserType: username =>
            dispatch(
                setUserAction({
                    username,
                }),
            ),
    };
}

export default connect(null, mapDispatchToProps)(Login);
