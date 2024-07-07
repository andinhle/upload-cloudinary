import { useState } from "react";

const UploadCload = () => {
  const preset_key = "mg2vtabl";
  const cloud_name = "dcuf1bclx";
  const [imageCloud, setImageCloud] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    setImageCloud(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    setImageCloud(data.secure_url);
  };
  return (
    <div>
      <form>
        <label>Upload ảnh</label>
        <input type="file" name="image" onChange={handleUpload} />
      </form>
      <div style={{
        width:"200px",
        height:"200px"
      }}>{imageCloud && (
        <>
        <img src={imageCloud} style={
        {
            width:"100%"
        }
      } />
        <img src={imageCloud} style={
        {
            width:"100%"
        }
      } />
        <img src={imageCloud} style={
        {
            width:"100%"
        }
      } />
        <img src={imageCloud} style={
        {
            width:"100%"
        }
      } />
        <img src={imageCloud} style={
        {
            width:"100%"
        }
      } />
        <img src={imageCloud} style={
        {
            width:"100%"
        }
      } />
        <img src={imageCloud} style={
        {
            width:"100%"
        }
      } />
      </>
      )}</div>
    </div>
  );
};

export default UploadCload;
