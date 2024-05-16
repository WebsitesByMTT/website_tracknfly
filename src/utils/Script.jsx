import { useEffect } from "react";

const Script = ({ src, async = true, target, scriptId }) => {
  useEffect(() => {
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = src;
      script.async = async;

      const targetDiv = document.getElementById(target);
      if (targetDiv) {
        targetDiv.appendChild(script);
      }
    }

    return () => {};
  }, []);

  return null;
};

export default Script;
