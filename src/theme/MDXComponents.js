import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
// import more items
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default {
  // list the components which should be automatically imported to all .mdx
  // files
  ...MDXComponents, Tabs, TabItem
};