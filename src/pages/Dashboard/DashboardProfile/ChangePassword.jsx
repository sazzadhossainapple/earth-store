import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConform, setShowPasswordConform] = useState(false);
  const [showPasswordCurrent, setShowPasswordCurrent] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordConform = () => {
    setShowPasswordConform(!showPasswordConform);
  };
  const togglePasswordCurrent = () => {
    setShowPasswordCurrent(!showPasswordCurrent);
  };

  const onSubmit = async (data) => {
    if (data.new_password !== data.confirm_password) {
      setPasswordMatchError(
        "Sorry! new password and confirm password not matched."
      );
      return;
    }

    const user = {
      current_password: data.current_password,
      new_password: data.new_password,
      confirm_password: data.confirm_password,
    };

    const token = `Bearer ${Cookies.get("accessToken")}`;

    fetch(`${import.meta.env.VITE_API_KEY_URL}/api/user/update-password`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          if (data.data === "Password Updated Successfully!!") {
            // Password update successful
            toast.success(data.data);
            reset();
            Cookies.remove("accessToken");
            navigate("/sign-in");
          } else if (data.data === "Sorry!! Credentials not matched!!") {
            // Password update failed due to wrong credentials
            toast.error(data.data);
          }
        } else {
          // Handle unexpected success condition
          toast.error("An unexpected error occurred.");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="mt-3">
      <h3 className="dashboard-title text-center">Manage Password</h3>
      <div className="bg-white rounded profile-container shadow">
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">
              Current Password <sup className="text-danger">*</sup>
            </label>

            <div className="position-relative">
              <input
                type={showPasswordCurrent ? "text" : "password"}
                style={{ paddingRight: "40px" }}
                {...register("current_password", {
                  required: true,
                })}
                className="input-field"
                name="current_password"
                placeholder="Enter your current password"
              />
              {errors.current_password && (
                <span className="text-danger error-text">
                  Current passwrd is required
                </span>
              )}
              {showPasswordCurrent ? (
                <FaEye className="eye-icon" onClick={togglePasswordCurrent} />
              ) : (
                <FaEyeSlash
                  className="eye-icon"
                  onClick={(e) => setShowPasswordCurrent(e)}
                />
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">
              New Password <sup className="text-danger">*</sup>
            </label>

            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                style={{ paddingRight: "40px" }}
                {...register("new_password", {
                  required: true,
                })}
                className="input-field"
                name="new_password"
                placeholder="Enter your new password"
              />
              {errors.new_password && (
                <span className="text-danger error-text">
                  New passwrd is required
                </span>
              )}
              {showPassword ? (
                <FaEye className="eye-icon" onClick={togglePassword} />
              ) : (
                <FaEyeSlash
                  className="eye-icon"
                  onClick={(e) => setShowPassword(e)}
                />
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Confirm Password <sup className="text-danger">*</sup>
            </label>

            <div className="position-relative">
              <input
                type={showPasswordConform ? "text" : "password"}
                style={{ paddingRight: "40px" }}
                {...register("confirm_password", {
                  required: true,
                })}
                className="input-field"
                name="confirm_password"
                placeholder="Re-Type password"
              />
              {errors.confirm_password && (
                <span className="text-danger error-text">
                  Confirm passwrd is required
                </span>
              )}
              {showPasswordConform ? (
                <FaEye className="eye-icon" onClick={togglePasswordConform} />
              ) : (
                <FaEyeSlash
                  className="eye-icon"
                  onClick={(e) => setShowPasswordConform(e)}
                />
              )}
            </div>
          </div>

          {passwordMatchError && (
            <p className="text-danger error-text">{passwordMatchError}</p>
          )}

          <div className="mt-4 d-flex justify-content-center">
            <input
              type="submit"
              className=" text-center btns w-100"
              value={`${loading ? "Changing..." : "Change Password"}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
