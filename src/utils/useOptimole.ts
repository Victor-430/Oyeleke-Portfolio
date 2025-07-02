
import { useEffect } from 'react';

let optimoleLoaded = false;

interface UseOptimoleOptions {
  apiKey: string;
  quality?: string;
}

export const useOptimole = ({ apiKey, quality = '85' }: UseOptimoleOptions): void => {
  useEffect(() => {
    if (optimoleLoaded) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(w, d){
        var b = d.getElementsByTagName('head')[0];
        var s = d.createElement("script");
        var v = ("IntersectionObserver" in w) ? "_no_poly" : "";
        s.async = true;
        s.src = "https://d5jmkjjpb7yfg.cloudfront.net/v2/latest/optimole_lib" + v + ".min.js";
        w.optimoleData = {
          key: "${apiKey}",
          quality: "${quality}",
        };
        b.appendChild(s);
      }(window, document));
    `;
    
    document.head.appendChild(script);
    optimoleLoaded = true;
  }, [apiKey, quality]);
};