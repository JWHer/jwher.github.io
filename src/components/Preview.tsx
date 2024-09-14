import React from 'react';
import { useRef, useState, useEffect } from 'react';

import styles from "./styles.module.scss"

export default function Preview({text, src, id}) {
  // const textRef = useRef<HTMLDivElement>(null);
  const textStyle: React.CSSProperties = {
    cursor: 'pointer',
    display: 'inline-block',
    filter: 'drop-shadow(4px 4px 6px rgba(0, 0, 0, .3))',
  }
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  
  const handleMouseOver = () => {
    if (descriptionRef.current) {
      descriptionRef.current.style.display = 'block';
    }
  };
  const handleMouseOut = () => {
    if (descriptionRef.current) {
      descriptionRef.current.style.display = 'none';
    }
  };
  const handleClick = () => {
    let link;
    if (id) {
      link = `${src}#${id}-head`;
    } else {
      link = `${src}`;
    }
    window.open(link);
  }
  const handleDescription = () => {
    if (!(descriptionRef.current && iframeRef.current)) {
      return;
    }
    try{
      const document = iframeRef.current.contentDocument;
      let page;
  
      if (id) {
        const elementById = document.getElementById(id);
        page = elementById ? elementById.innerHTML : '';
      } else {
        const markdownElements = document.querySelectorAll('.theme-doc-markdown.markdown');
        const firstMarkdownElement = markdownElements.length > 0 ? markdownElements[0] : null;
        page = firstMarkdownElement ? firstMarkdownElement.innerHTML : '';
      }
  
      descriptionRef.current.innerHTML = page;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="text"
      style={textStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {text}
      <iframe
        className="description"
        style={{display:'none'}}
        onLoad={handleDescription}
        ref={iframeRef}
        src={src}
      />
      <div
        onClick={handleClick}
        className={styles.preview}
        ref={descriptionRef}
      >
        Loading...
      </div>
    </div>
  );
}