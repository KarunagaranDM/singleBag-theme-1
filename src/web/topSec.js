import React, { useState, useEffect } from 'react';
import {FcFeedback} from 'react-icons/fc';
import {FcSms} from 'react-icons/fc';
import {FcLike} from 'react-icons/fc'

const YourComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [iconSectionVisible, setIconSectionVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);

      // Hide the icon section when scrolling down
      if (currentPosition > scrollPosition) {
        setIconSectionVisible(false);
      } else {
        setIconSectionVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="your-component">
      <nav className={`navbar ${iconSectionVisible ? '' : 'hide'}`}>
        {/* Your navigation content */}
      </nav>
      <div className="icon-section">
        {/* Render your icons here */}
        <FcFeedback/>
        <FcSms/>
        <FcLike/>
      </div>
      {/* Rest of your component */}
    </div>
  );
};

export default YourComponent;
