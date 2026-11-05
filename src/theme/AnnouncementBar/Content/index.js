import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';
export default function AnnouncementBarContent(props) {
  const {announcementBar} = useThemeConfig();
  const {content} = announcementBar;
  const translatedContent = translate({
    id: 'announcementBar.content',
    message: content,
    description: 'Announcement bar content',
  });
  return (
    <div
      {...props}
      className={clsx(styles.content, props.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: translatedContent}}
    />
  );
}
