const FlipCard = ({ image, heading, subheading, details }: any) => {
  return (
    <>
      <style>{`
        .flip-card {
          overflow: visible;
          width: 350px;
          height: 210px;
        }

        .flip-content {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 400ms ease;
          box-shadow: 0px 0px 16px 2px rgba(255, 153, 102, 0.3);
          border-radius: 10px;
        }

        .flip-front, .flip-back {
          background-color: #ffffff;
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 10px;
          overflow: hidden;
        }

        .flip-back {
          transform: rotateY(180deg);
          justify-content: center;
          display: flex;
          align-items: center;
        }

        .flip-back::before {
          position: absolute;
          content: ' ';
          display: block;
          width: 160px;
          height: 180%;
          background: linear-gradient(90deg, transparent, #ff9966, #ff7744, #ff9966, transparent);
          animation: rotation_481 4000ms infinite linear;
        }

        .flip-back-content {
          position: absolute;
          width: 98%;
          height: 98%;
          background: linear-gradient(135deg, #fff9f5 0%, #ffe8d9 100%);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
        }

        .flip-card:hover .flip-content {
          transform: rotateY(180deg);
        }

        @keyframes rotation_481 {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }

        .flip-front {
          color: white;
          position: relative;
        }

        .flip-front::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%);
          pointer-events: none;
        }

        .flip-front .flip-front-content {
          position: absolute;
          width: 100%; height: 100%;
          padding: 14px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          z-index: 1;
        }

        .flip-front-content .flip-badge {
          background: linear-gradient(135deg, rgba(255,153,102,0.9) 0%, rgba(234,88,12,0.9) 100%);
          padding: 6px 8px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
          width: fit-content;
          box-shadow: 0 3px 10px rgba(0,0,0,0.25);
          transition: transform 0.3s ease;
        }

        .flip-card:hover .flip-badge {
          transform: translateY(-4px);
        }

        .flip-title {
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 2px;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .flip-subtitle {
          font-size: 11px;
          color: #ffffffdd;
          letter-spacing: 0.4px;
        }

        .flip-img {
          position: absolute;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
          transition: transform 0.4s ease;
        }

        .flip-card:hover .flip-img {
          transform: scale(1.05);
        }

        .flip-details-text {
          font-size: 13px;
          line-height: 1.6;
          color: #333333;
          font-weight: 400;
          z-index: 1;
        }
      `}</style>

      <div className="flip-card">
        <div className="flip-content">
          <div className="flip-back">
            <div className="flip-back-content">
              <p className="flip-details-text">{details}</p>
            </div>
          </div>
          <div className="flip-front">
            <img className="flip-img" src={image} alt={heading} />
            <div className="flip-front-content">
              <div className="flip-badge">
                <div className="flip-title">{heading}</div>
                <div className="flip-subtitle">{subheading}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;