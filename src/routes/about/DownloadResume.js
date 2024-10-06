import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Sophia-Martinez.pdf";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Ira-Chandramouli">
        <img
          src={DownloadIcon}
          alt="Resume download button"
        />
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
