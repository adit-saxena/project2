'use client';

import { usePathname } from 'next/navigation';
import styles from './page.module.css';

export default function Tabs() {
  const pathname = usePathname();

  const tabs = [
    { name: 'Projects', path: '/' },
    { name: 'About Me', path: '/about' },
  ];

  return (
    <div className={styles.menu}>
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={tab.path}
          className={`${styles.tabs} ${
            pathname === tab.path ? styles.activeTab : ''
          }`}
        >
          {tab.name}
        </a>
      ))}
    </div>
  );
}
