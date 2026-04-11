import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useAuth } from '../store/authStore';
import { toast } from 'react-hot-toast';
import {
  errorClass,
  loadingClass,
  submitBtn,
  formCard,
  formTitle,
  inputClass,
  labelClass,
  formGroup,
  fileInputClass,
  ghostBtn
} from '../styles/common';

function EditProfileForm() {
  const currentUser = useAuth(state => state.currentUser);
  const updateUser = useAuth(state => state.updateUser);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setValue("firstName", currentUser.firstName || "");
      setValue("lastName", currentUser.lastName || "");
      if (currentUser.profileImageUrl) {
        setPreview(currentUser.profileImageUrl);
      }
    }
  }, [currentUser, setValue]);

  const onUpdateProfile = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);

    if (data.profileImageURL && data.profileImageURL.length > 0) {
      formData.append("profileImageURL", data.profileImageURL[0]);
    }

    try {
      const res = await axios.put("/common-api/profile", formData, { withCredentials: true });
      updateUser(res.data.payload);
      toast.success("Profile updated successfully!");
      // Navigate back
      if (currentUser.role === "USER") navigate("/userdashboard");
      else if (currentUser.role === "AUTHOR") navigate("/authordashboard");
      else if (currentUser.role === "ADMIN") navigate("/admindashboard");
      else navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) return <p className={loadingClass}>Loading...</p>;

  return (
    <div className="mt-10 mb-10">
      <form onSubmit={handleSubmit(onUpdateProfile)} className={formCard}>
        
        <button type="button" onClick={() => navigate(-1)} className={ghostBtn + " flex items-center gap-1.5 mb-6 w-fit !px-0 hover:-translate-x-1 transition-transform"}>
          <span>←</span> Back
        </button>

        <h2 className={formTitle}>Edit Profile</h2>

        <div className={formGroup}>
          <label className={labelClass}>First Name</label>
          <input type="text" {...register("firstName", { required: true })} className={inputClass} />
          {errors.firstName && <p className={errorClass}>First name is required</p>}
        </div>

        <div className={formGroup}>
          <label className={labelClass}>Last Name</label>
          <input type="text" {...register("lastName", { required: true })} className={inputClass} />
          {errors.lastName && <p className={errorClass}>Last name is required</p>}
        </div>

        <div className={formGroup}>
          <label className={labelClass}>Profile Photo</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className={fileInputClass}
            {...register("profileImageURL")}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                if (!["image/jpeg", "image/png"].includes(file.type)) {
                  toast.error("Only JPG or PNG allowed");
                  return;
                }
                if (file.size > 2 * 1024 * 1024) {
                  toast.error("File size must be less than 2MB");
                  return;
                }
                setPreview(URL.createObjectURL(file));
              }
            }}
          />
        </div>

        {preview && (
          <div className="mt-3 mb-6 flex justify-center">
            <img
              src={preview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-full border border-[#e8e8ed]"
            />
          </div>
        )}

        <button className={submitBtn} disabled={loading}>
          {loading ? "Updating..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
}

export default EditProfileForm;
