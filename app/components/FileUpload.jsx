"use client";
import { useState } from "react";
import { Upload, AlertCircle, CheckCircle, FileText } from "lucide-react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import pdf_1 from "../../public/pdf_1.png";
import Image from "next/image";

export default function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const supportedTypes = ["application/pdf", "image/jpeg", "image/jpg"];

    const updatedFiles = uploadedFiles.map((file) => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(1) + " MB",
      type: file.type,
      status: supportedTypes.includes(file.type) ? "success" : "error",
    }));

    setFiles([...files, ...updatedFiles]);
  };

  return (
    <div className="p-6 max-w-lg mx-auto  ">
      <div className="flex items-center gap-2 mb-3 text-blue-600 cursor-pointer">
        <FaDownload className="text-[#FFB11F]" />
        <span className="underline text-[14px] font-medium text-[#0F172A]">
          Download business card design templates
        </span>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <label className="cursor-pointer">
          <Upload className="mx-auto mb-2 text-gray-500" />
          or Drag files here <span className="text-[#6366F1]">Upload</span>
          <input
            type="file"
            className="hidden"
            multiple
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg"
          />
        </label>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        • Supported file types: DOC, JPG, PNG, AI, PSD, PPT.
      </p>
      <p className="text-xs text-gray-500 mb-4">
        • Required resolution: 300 dots per inch.
      </p>

      <ul className="mt-4 space-y-2">
        {files.map((file, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg ${
              file.status === "error"
                ? "bg-red-100"
                : "border-2 border-[#6C849D2E]"
            }`}
          >
            <div className="flex items-center gap-3">
              {file.type === "application/pdf" ? (
                <Image src={pdf_1} alt="PDF Icon" />
              ) : (
                <FileText className="text-gray-500 w-6 h-6" />
              )}

              <div>
                <div className="flex items-center gap-1">
                  <span className="text-[#191919] text-[14px] font-medium">
                    {file.name}
                  </span>
                  {file.status === "success" && (
                    <CheckCircle className="text-green-500 w-4 h-4" />
                  )}
                </div>
                <div className="text-xs text-gray-500">{file.size}</div>
              </div>
            </div>

            {file.status === "error" && (
              <div className="flex items-center gap-2">
                <AlertCircle className="text-red-500 w-5 h-5" />
                <span className="text-red-500 text-xs">Invalid file type</span>
              </div>
            )}

            <button
              onClick={() => setFiles(files.filter((_, i) => i !== index))}
            >
              <RiDeleteBin6Line className="text-[#40566D] w-5 h-5 hover:text-red-500" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
