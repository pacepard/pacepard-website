import React from 'react';
import * as FeatherIcons from 'react-feather';
import './FeatureSection.css';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  image: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
  image
}) => {
  const renderIcon = (iconName: string) => {
    const Icon = (FeatherIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon size={24} className="feature-icon" /> : null;
  };

  return (
    <section className="feature-section">
      <div className="feature-content">
        <div className="feature-content-wrapper">
          <div className="feature-text-container">
            <h2 className="feature-title">{title}</h2>
            {subtitle && <p className="feature-subtitle">{subtitle}</p>}
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-wrapper">
                  {renderIcon(feature.icon)}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-image-container">
          <img src={image} alt="Feature visualization" className="feature-image" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;