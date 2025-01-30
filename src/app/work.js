'use client';

import Image from 'next/image'; // Import Next.js Image component
import styles from './page.module.css'; // Your existing CSS file
import Tags from './tags'
import Link from 'next/link'; // Import Link component

export default function Work({ Tag1, Tag2, Title, Url, PageUrl }) {
  return (
    <Link href="/project">
      <div className={styles.outerbox}>
        <div className={styles.leftcol}>
          <div className={styles.tagrow}>
            <Tags Text={Tag1} />
            <Tags Text={Tag2} />
          </div>
          <h3>{Title}</h3>
        </div>
        <div className={styles.rightcol}>
          <img
            src={Url}
            alt="Project Image"
          />
        </div>
      </div>
    </Link>
  );
}
