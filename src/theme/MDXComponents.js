import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Preview from '@site/src/components/Preview';
import LinkPreview from '@site/src/components/LinkPreview';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Preview,
  LinkPreview,
};