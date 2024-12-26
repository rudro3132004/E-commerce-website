import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

const WebScroll = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default WebScroll;
