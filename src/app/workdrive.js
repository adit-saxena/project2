'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Tags from './tags';
import Link from 'next/link';

export default function Workdrive({ Tag1, Tag2, Tag3, Title, Url, PageUrl, backgroundColor }) { // Add backgroundColor prop
  return (
    <Link href={PageUrl} target='blank'>
      <div className={styles.outerbox} style={{ backgroundColor: backgroundColor }}> {/* Apply style here */}
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