import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Preview from '@site/src/components/Preview';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Preview>" tag to our Preview component
  // `Preview` will receive all props that were passed to `<Preview>` in MDX
  Preview,
};