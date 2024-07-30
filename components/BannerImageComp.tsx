import React from 'react';

type BannerProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
};

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background }) => {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{cta}</button>
      {/* <img src={image} alt={title} style={{ width: '100%', marginTop: '10px', borderRadius: '8px' }} /> */}
    </div>
  );
};

export default BannerImageComp;
