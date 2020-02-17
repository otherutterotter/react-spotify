import React from 'react';

export default function LoaderSVG(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={{marginRight: '-2px', display: 'block', backgroundRepeatY: 'initial', backgroundRepeatX: 'initial', animationPlayState: 'paused', position: 'absolute', top: 10, right: 10,  animation: 'fade-in 0.4s, rotate 0.8s infinite' }} {...props}>
      <circle cx={50} cy={50} r={26} strokeWidth={8} stroke="#29cf28" strokeDasharray="40.840704496667314 40.840704496667314" fill="none" strokeLinecap="round" transform="matrix(1,0,0,1,0,0)" style={{transform: 'matrix(1, 0, 0, 1, 0, 0)', animationPlayState: 'paused'}} />
    {/* generated by https://loading.io/ */}</svg>
  );
}