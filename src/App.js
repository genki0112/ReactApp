import { useState, useCallback } from "react";
import { CssModules } from "./components/CssModules";
import { InlineStyles } from "./components/InlineStyles";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyleJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyles />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}
