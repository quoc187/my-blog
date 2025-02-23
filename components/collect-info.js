import { useEffect, useState } from 'react';

export const useClientInfo = () => {
  useEffect(() => {
    const collectInfo = () => {
      const info = {
        // Browser info
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        vendor: navigator.vendor,
        cookiesEnabled: navigator.cookieEnabled,
        
        // Screen info
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        
        // Window info
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        
        // Connection info
        connectionType: navigator.connection?.effectiveType,
        downlink: navigator.connection?.downlink,
        
        // Time info
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timestamp: new Date().toISOString(),
        
        // Performance info
        memory: performance?.memory?.usedJSHeapSize,
        timing: performance?.timing?.toJSON(),
        
        // Feature detection
        touchEnabled: 'ontouchstart' in window,
        webGL: !!window.WebGLRenderingContext,
      };

      
      fetch('https://67bb2527fbe0387ca13936df.mockapi.io/collect', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify({
          date: Date.now(),
          data: JSON.stringify(info),
        }),
      });
    };

    collectInfo();

  }, []);
};
