import React, { useEffect, useState } from "react";

interface NotificationToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({
  message,
  show,
  onClose,
}) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300); // Wait for animation to finish
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`notification-toast ${!visible ? "hide" : ""}`}>
      <div className="icon">🔔</div>
      <div className="message">{message}</div>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default NotificationToast;
