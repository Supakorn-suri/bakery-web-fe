"use client";
import React, { useRef, useState, useEffect } from "react";
import { Text, Box, TextProps } from "@mantine/core";

interface UnderlineTextProps extends TextProps {
  strokeColor?: string;
  strokeWidth?: number;
  height?: number;
  offset?: number;
  gap?: number;
  children: React.ReactNode;
}

interface UnderlineSvgProps {
  width: number;
  height: number;
  strokeColor: string;
  strokeWidth: number;
}

const CurveLine1 = ({
  width,
  height,
  strokeColor,
  strokeWidth,
}: UnderlineSvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} 6`}
    preserveAspectRatio="none"
  >
    <path
      d={`M0 3 Q${width / 2} 6 ${width} 3`}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="transparent"
    />
  </svg>
);

const CurveLine2 = ({
  width,
  height,
  strokeColor,
  strokeWidth,
}: UnderlineSvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} 6`}
    preserveAspectRatio="none"
  >
    <path
      d={`M0 0 Q${width / 4} 3, ${width / 2} 1.5 T${width} 0`}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="transparent"
    />
  </svg>
);

export const UnderlineText: React.FC<UnderlineTextProps> = ({
  strokeColor = "#FF6347",
  strokeWidth = 2,
  height = 6,
  offset = 5,
  gap = 4,
  ...props
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.getBoundingClientRect().width);
    }
    // Recalculate on window resize
    const handleResize = () => {
      if (textRef.current)
        setTextWidth(textRef.current.getBoundingClientRect().width);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [props.children]);

  return (
    <Text
      component="span"
      ref={textRef}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      {props.children}
      <Box
        component="span"
        style={{
          position: "absolute",
          bottom: -offset,
          left: 0,
          width: textWidth,
          pointerEvents: "none",
        }}
      >
        <CurveLine1
          width={textWidth}
          height={height}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
        />
        <Box
          mt={gap}
          component="span"
          style={{
            position: "absolute",
            bottom: -offset,
            left: 0,
            width: textWidth,
            pointerEvents: "none",
          }}
        >
          <CurveLine2
            width={textWidth}
            height={height}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
          />
        </Box>
      </Box>
    </Text>
  );
};
