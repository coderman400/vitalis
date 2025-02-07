import { useState } from "react";
import { CloudUpload } from "lucide-react";

const UploadButton = ({ onFileSelect }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      if (onFileSelect) {
        onFileSelect(file);
      }
    }
  };

  return (
    <div className="flex flex-col my-2 rounded-lg">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-col shadow-md items-center w-64 px-4 py-6 bg-ash text-white rounded-lg hover:bg-space duration-200"
      >
        <CloudUpload className="w-6 h-6 mb-2" />
        Upload File
      </label>
      {fileName && <p className="mt-2 text-sm text-gray-600">{fileName}</p>}
    </div>
  );
};

export default UploadButton;