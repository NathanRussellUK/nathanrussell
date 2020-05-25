import * as React from "react";

import "./features.scss";

export interface FeatureProps {
  id: string;
  to: string;
  src: string;
  alt: string;
  animationDelay?: string;
}

const Feature = (props: FeatureProps) => {
  const [isObserved, setIsObserved] = React.useState(false);
  const featureRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (featureRef.current) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !isObserved) {
          setIsObserved(true);
        }
      });

      observer.observe(featureRef.current);
    }
  }, []);

  return (
    <a className="feature" href={props.to} target="_blank" ref={featureRef}>
      {isObserved && (
        <img
          src={props.src}
          alt={props.alt}
          style={{ animationDelay: props.animationDelay }}
        />
      )}
    </a>
  );
};

const mapFeature = (feature, index) => (
  <Feature
    {...feature}
    key={feature.id}
    animationDelay={feature.animationDelay || `${index * 100}ms`}
  />
);

interface FeaturesProps {
  features: FeatureProps[];
}

export const Features = (props: FeaturesProps) => (
  <div className="features">{props.features.map(mapFeature)}</div>
);
