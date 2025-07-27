import React from "react";
import { FaDownload, FaQuestionCircle, FaFileAlt } from "react-icons/fa";

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-xl w-full text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Password Successfully Created!
        </h1>
        <p className="text-gray-700 mb-6">
  Password successfully created. Now you can download the{" "}
  <span className="font-medium">.exe</span> installation file. Use your
  email and password to log into the app after installing it.
</p>

<div className="text-left text-sm text-gray-600 font-semibold mb-2">
  Download the installer (.exe)
  <FaQuestionCircle className="inline ml-1" />
</div>


        <div className="border-2 border-purple-300 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaFileAlt className="text-2xl text-gray-700" />
            <span className="text-lg font-semibold text-gray-700">
              Exe File
            </span>
            <FaQuestionCircle className="ml-1 text-gray-400" />
          </div>
          <a
            href="/download/1mb.exe"
            download
            className="text-purple-600 hover:text-purple-800"
            title="Download for Windows"
          >
            <FaDownload className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
