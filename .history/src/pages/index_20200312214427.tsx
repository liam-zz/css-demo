import React from 'react';
import styles from './index.css';

function HeaderText() {
  return <div>这是标题</div>;
}

function StickyContent() {
  return <div>这是可以吸附的部分</div>;
}

export default function() {
  return (
    <div className={styles.normal}>
      <HeaderText />
      <StickyContent />
      <div>
        <div>1111</div>
        <div>1111</div>
        <div>1111</div>
      </div>
    </div>
  );
}
