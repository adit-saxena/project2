'use client';

import styles from '../page.module.css'; // Assuming this path is correct relative to work.js
import Tags from './tags';
import Link from 'next/link';

// Added onClick prop
export default function Work({ Tag1, Tag2, Tag3, Title, Url, PageUrl, backgroundColor, onClick }) {
  return (
    // Added onClick to the Link component
    <Link href={PageUrl} onClick={onClick} legacyBehavior={false}>
      {/*
        The <a> tag is no longer needed as a direct child of Link in Next.js 13+ App Router
        if you are not using legacyBehavior.
        If you need to pass legacyBehavior={true} for specific styling or refs,
        then an <a> tag would be required. For simplicity, assuming legacyBehavior={false} (default).
        If you encounter issues, you might need to wrap the div with an <a> or set legacyBehavior.
        However, onClick on Link itself should work.
      */}
      <div className={styles.outerbox} style={{ backgroundColor: backgroundColor }}>
        <div className={styles.leftcol}>
          <div className={styles.tagrow}>
            <Tags Text={Tag1} />
            <Tags Text={Tag2} />
            <Tags Text={Tag3} />
          </div>
          <h3>{Title}</h3>
        </div>
        <div className={styles.rightcol}>
          <img src={Url} alt="Project Image" />
        </div>
      </div>
    </Link>
  );
}
