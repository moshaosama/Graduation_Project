import React from "react";

export interface InputProps {
  Label: string;
  Type: string;
  placeHolder?: string;
  ChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Value?: string;
  Active?: boolean;
}
