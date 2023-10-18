"use client";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const UploadCV = () => {
  const fileTypes = ["PDF", "DOCX", "PNG", "JPEG"];

  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <>
      <FileUploader
        multiple={false}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        maxSize="5"
        children={
          <label
            className="transition hover:bg-[#f2f2f2] sc-bdvvtL iciELI cursor-pointer flex items-center justify-center text-center rounded-xl px-4 py-8 border-dashed border-2 border-gray-400"
            htmlFor="file">
            <input
              type="file"
              className="hidden py-14 "
              accept=".pdf,.docx,.png,.jpeg,"
              name="file"
            />
            <div className="sc-dkPtRN ebdQkY flex items-center justify-center text-[17px] mx-auto">
              <span className="mx-auto">
                <span className="text-[#1F2937]">Drag and drop your CV or</span>{" "}
                <span className="text-[#3B82F6]">Browse file</span>
                <br />
                <span className="font-medium text-[#B9B9B9] text-[15px]">
                  Format: PDF, DOCX, JPEG, PNG. Maximum size: 5 MB
                </span>
                <br />
                <div className="mt-2">
                  {file ? `File name: ${file.name}` : ""}
                </div>
              </span>
            </div>
          </label>
        }
      />
    </>
  );
};

export default UploadCV;
