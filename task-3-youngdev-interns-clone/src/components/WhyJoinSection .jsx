import './WhyJoin.css';
import bannerImage from '../assets/whyjoin.png';

const WhyJoinSection = () => {
  return (
    <section className="join-section">
      <div className="join-left">
        <img
          src={bannerImage}
          alt="Why join YoungDev Interns"
          className="join-image"
        />
      </div>

      <div className="join-right">
        <h2>Why Join YoungDev Interns' Remote Internship?</h2>
        <p>
          <strong>YoungDev Interns welcomes driven tech enthusiasts—undergraduates,</strong> recent
          graduates, and lifelong learners alike—to participate in an immersive,
          eight-week virtual program crafted to turn academic knowledge into
          real-world expertise...
        </p>
      </div>
    </section>
  );
};

export default WhyJoinSection;