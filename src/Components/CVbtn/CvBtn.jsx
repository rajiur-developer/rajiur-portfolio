import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaDownload} from "react-icons/fa";



const CvBtn = () => {

    function handleDownloadResume() {
    const link = document.createElement("a");
    link.href = "/Resume/MyResume.pdf"; // Correct path
    link.download = "Md_Rajiur_Rahman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

    return (
        <div>
            <button
            
                className="downlodedBtn btn btn-outline-warning w-bold text-light text-uppercase fw-bold"
                onClick={handleDownloadResume}
            >
                Download Resume<FaDownload className="ms-3" />
            </button>
        </div>
    )
}

export default CvBtn
