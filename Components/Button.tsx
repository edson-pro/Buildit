import React from "react";

export default function Button({ onClick }: any) {
  return (
    <a onClick={onClick} className="button">
      Exprole
    </a>
  );
}
