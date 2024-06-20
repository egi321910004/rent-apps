import React, { useState } from "react";
import { Hero, Container } from "react-bulma-components";
import backgroundImage from "../../../assets/video.mp4";
import logonav from "../../../assets/jostenan.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { atom, useRecoilState } from "recoil";
import { toast } from "react-toastify";
import { login, register } from "../../../services/Auth/auth.services";
import { authState } from "../../../store/store";
export default function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isReCaptchaChecked, setIsReCaptchaChecked] = useState(false);
  const [auth, _] = useRecoilState(authState);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formRegisData, setFormRegisData] = useState({
    email: "",
    username: "",
    name: "",
    password: "",
    password_2: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputChangeRegis = (e) => {
    const { name, value } = e.target;
    setFormRegisData({
      ...formRegisData,
      [name]: value,
    });
  };

  const styles = {
    root: {
      "--brandColor": "hsl(166, 67%, 51%)",
      "--background": "rgb(247, 247, 247)",
      "--textDark": "hsla(0, 0%, 0%, 0.66)",
      "--textLight": "hsla(0, 0%, 0%, 0.33)",
      background: "var(--background)",
      height: "100vh",
      color: "var(--textDark)",
    },
    container: {
      marginTop: "10rem",
      background: "white",
      borderRadius: "10px",
    },
    columns: {
      padding: "0 2rem",
    },
    left: {
      margin: "auto",
      width: "100%",
      height: "250%",
    },
    right: {
      padding: "4.5rem",
      textAlign: "center",
    },
    title: {
      fontWeight: 800,
      letterSpacing: "-2px",
    },
    subtitle: {
      color: "var(--brandColor)",
      fontWeight: 500,
      marginTop: "1rem",
      letterSpacing: "-1px",
    },
    description: {
      marginTop: "1rem",
      marginBottom: "1rem",
      color: "var(--textLight)",
      fontSize: "1.15rem",
    },
    input: {
      fontSize: "1rem",
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      marginBottom: "1rem",
      boxSizing: "border-box",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "var(--brandColor)",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "1rem",
      cursor: "pointer",
    },
    socialIcons: {
      marginRight: "1rem",
      color: "var(--textLight)",
    },
    footerText: {
      color: "var(--textLight)",
    },
  };

  const changeRegister = (a) => {
    setIsLogin(a);
  };

  console.log(auth);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData.email, formData.password);

      if (response.client_id === "Client ID Not Found") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Anda tidak terdaftar!",
          footer: '<a href="/Login">Daftar sekarang!</a>',
        });
        return;
      }

      const roles = localStorage.getItem("role");
      if (roles === "admin") {
        navigate("/admin/Dashboard");
      } else if (roles === "viewer") {
        navigate("/viewer/Dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formRegisData);
      Swal.fire({
        icon: "success",
        title: "Pendaftaran Berhasil",
      });
      navigate("/Login");
      setIsLogin(true);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message || "An error occurred during registration.",
      });
    }
  };

  return (
    <Hero>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "0",
          top: "0",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source src={backgroundImage} type="video/mp4" />
      </video>
      <Hero.Body>
        <div style={styles.columns} className="columns is-multiline">
          <div
            style={{
              ...styles.columns,
              ...styles.container,
            }}
            className="column is-6 is-offset-3 register"
          >
            <div className="columns">
              <div style={styles.left} className="column">
                <img src={logonav} alt="logo" />
              </div>
              <div style={styles.right} className="column has-text-centered">
                {isLogin ? (
                  <h1
                    style={{ ...styles.title, fontSize: "1.5rem" }}
                    className="title is-4"
                  >
                    Halaman Login
                  </h1>
                ) : (
                  <h1
                    style={{ ...styles.title, fontSize: "1.5rem" }}
                    className="title is-4"
                  >
                    Halaman Pendaftaran
                  </h1>
                )}

                <p style={styles.description} className="description">
                  Akses akun Anda dengan mudah dan aman.
                </p>
                {isLogin ? (
                  <form onSubmit={handleLogin}>
                    <div className="field">
                      <div className="control">
                        <input
                          style={styles.input}
                          className="input is-medium"
                          type="text"
                          name="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          style={styles.input}
                          className="input is-medium"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <button className="button is-block is-primary is-fullwidth is-medium">
                      Login
                    </button>
                    <br />
                    <small>
                      <em>Tidak Memiliki Akun?</em>{" "}
                      <a
                        onClick={() => changeRegister(false)}
                        className="has-text-primary"
                      >
                        Daftar Disini
                      </a>
                    </small>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <input
                          style={styles.input}
                          className="input is-medium"
                          type="text"
                          name="name"
                          placeholder="Nama Lengkap"
                          value={formRegisData.name}
                          onChange={handleInputChangeRegis}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          style={styles.input}
                          className="input is-medium"
                          type="text"
                          name="email"
                          placeholder="Alamat Email"
                          value={formRegisData.email}
                          onChange={handleInputChangeRegis}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          style={styles.input}
                          className="input is-medium"
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={formRegisData.username}
                          onChange={handleInputChangeRegis}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          style={styles.input}
                          className="input is-medium"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formRegisData.password}
                          onChange={handleInputChangeRegis}
                        />
                        <input
                          style={styles.input}
                          className="input is-medium"
                          type="password"
                          name="password_2"
                          hidden
                          placeholder="Confirm Password"
                          value={formRegisData.password_2}
                          onChange={handleInputChangeRegis}
                        />
                      </div>
                    </div>
                    <button className="button is-block is-primary is-fullwidth is-medium">
                      Daftar Sekarang
                    </button>
                    <br />
                    <small>
                      <em>Sudah Memiliki Akun?</em>{" "}
                      <a
                        onClick={() => {
                          changeRegister(true);
                        }}
                        className="has-text-primary"
                      >
                        Masuk Disini
                      </a>
                    </small>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Hero.Body>
    </Hero>
  );
}
