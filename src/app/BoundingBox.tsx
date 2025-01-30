import React from "react";
import styles from "./BoundingBox.module.css"; // Import CSS module

interface BoundingBoxProps {
  text: string;
  boxColor?: string; // Allow color customization
}

const BoundingBox: React.FC<BoundingBoxProps> = ({ text, boxColor = "blue" }) => {
  return (
    <div className={styles.container}>
      <div className={styles.boundingBox} style={{ borderColor: boxColor }}>
        {text}
        {/* Corner Handles */}
        <div className={styles.corner} style={{ borderColor: boxColor, top: "-12px", left: "-12px" }}></div>
        <div className={styles.corner} style={{ borderColor: boxColor, top: "-12px", right: "-12px" }}></div>
        <div className={styles.corner} style={{ borderColor: boxColor, bottom: "-12px", left: "-12px" }}></div>
        <div className={styles.corner} style={{ borderColor: boxColor, bottom: "-12px", right: "-12px" }}></div>
        {/* Hug × Hug Label */}
        <div className={styles.label} style={{ backgroundColor: boxColor }}>Hug × Hug</div>
      </div>
    </div>
  );
};

export default BoundingBox;
