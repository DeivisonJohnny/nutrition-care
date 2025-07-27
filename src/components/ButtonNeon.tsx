import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export default function ButtonNeon({ children }: Props) {
  return (
    <ContainerButton>
      <svg
        aria-hidden="true"
        focusable="false"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        <filter id="unopaq" x="-1000%" y="-1000%" width="3000%" height="3000%">
          <feColorMatrix
            values="1 0 0 0 0 
    0 1 0 0 0 
    0 0 1 0 0 
    0 0 0 1 0"
          />
        </filter>
      </svg>

      <div className="backdrop"></div>
      <button className="button">
        <div className="a l"></div>
        <div className="a r"></div>
        <div className="a t"></div>
        <div className="a b"></div>
        <div className="text"> {children} </div>
      </button>
    </ContainerButton>
  );
}

const ContainerButton = styled.div`
  .button {
    position: relative;
    cursor: pointer;
    border: none;
    width: 150px;
    height: 40px;
    background: #111;
    color: #fff;
  }

  .text {
    position: relative;
    z-index: 1;
  }

  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    background:
      radial-gradient(circle at 50% 50%, #0000 0, #0000 20%, #111111aa 50%),
      radial-gradient(ellipse 100% 100%, #fff, #fff0);
    background-size:
      3px 3px,
      auto auto;
    transition: 0.3s;
  }

  .button:hover::before {
    opacity: 0.3;
  }

  .a {
    pointer-events: none;
    position: absolute;
    --w: 2px;
    --t: -40px;
    --s: calc(var(--t) * -1);
    --e: calc(100% + var(--t));
    --g:
      #fff0, #fff3 var(--s), #fffa var(--s), #fff, #fffa var(--e),
      #fff3 var(--e), #fff0;
  }

  .a::before {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    filter: blur(4px) url(#unopaq);
    z-index: -2;
  }

  .a::after {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    filter: blur(10px) url(#unopaq);
    opacity: 0;
    z-index: -2;
    transition: 0.3s;
  }

  .button:hover .a::after {
    opacity: 1;
  }

  .l {
    left: -2px;
  }

  .r {
    right: -2px;
  }

  .l,
  .r {
    background: linear-gradient(var(--g));
    top: var(--t);
    bottom: var(--t);
    width: var(--w);
  }

  .t {
    top: -2px;
  }

  .b {
    bottom: -2px;
  }

  .t,
  .b {
    background: linear-gradient(90deg, var(--g));
    left: var(--t);
    right: var(--t);
    height: var(--w);
  }

  .backdrop {
    position: absolute;
    inset: -9%;
    background: radial-gradient(
      circle at 50% 50%,
      #0000 0,
      #0000 20%,
      #111111aa 50%
    );
    background-size: 3px 3px;
    z-index: -1;
  }
`;
