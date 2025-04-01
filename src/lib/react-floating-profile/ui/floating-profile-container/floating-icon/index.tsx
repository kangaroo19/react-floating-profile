import { ProfileIcon } from "@components";
import { useProfile } from "@context";
import { useState, useEffect, MouseEvent, useRef } from "react";

interface FloatingIconPropTypes {
  avatar_url: string;
}

export default function FloatingIcon({ avatar_url }: FloatingIconPropTypes) {
  const { isOpen, setIsOpen } = useProfile();
  const [position, setPosition] = useState({ x: 20, y: 20 }); // Default position
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const wasDragging = useRef(false);
  const dragStartPosition = useRef({ x: 0, y: 0 });

  // Start dragging
  const onMouseDown = (e: MouseEvent) => {
    // Record initial position for drag detection
    dragStartPosition.current = {
      x: e.clientX,
      y: e.clientY,
    };

    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    e.preventDefault(); // Prevent text selection during drag
  };

  // Handle click event to toggle modal
  const onClickIcon = (_e: MouseEvent) => {
    // If the user was dragging or moved more than a small threshold, don't trigger click
    if (!wasDragging.current) {
      setIsOpen(!isOpen);
    }
    // Reset the wasDragging flag after click is processed
    wasDragging.current = false;
  };

  // Handle dragging movement
  useEffect(() => {
    const onMouseMove = (e: MouseEvent<Document, MouseEvent>) => {
      if (isDragging) {
        // Calculate the distance moved
        const dx = Math.abs(e.clientX - dragStartPosition.current.x);
        const dy = Math.abs(e.clientY - dragStartPosition.current.y);

        // If moved more than a small threshold, consider it a drag
        if (dx > 5 || dy > 5) {
          wasDragging.current = true;
        }

        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const onMouseUp = () => {
      setIsDragging(false);

      // Keep the wasDragging flag true after mouse up
      // It will be reset in the click handler or after timeout

      // If we don't get a click event soon after, reset the flag
      setTimeout(() => {
        wasDragging.current = false;
      }, 300); // 300ms is usually safe for detecting clicks after mouseup
    };

    // Add event listeners to document to track mouse movement and release
    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove as any);
      document.addEventListener("mouseup", onMouseUp);
    }

    // Cleanup event listeners when component unmounts or stops dragging
    return () => {
      document.removeEventListener("mousemove", onMouseMove as any);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div
      className="icon-button-container"
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
      onMouseDown={onMouseDown}
      onClick={onClickIcon}
    >
      <ProfileIcon avatar_url={avatar_url} onClickIcon={() => {}} />
    </div>
  );
}
