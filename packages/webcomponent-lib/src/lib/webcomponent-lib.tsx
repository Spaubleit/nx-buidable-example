import {registerAsWebComponent} from "react-webcomponentify/src"
import {DOMAttributes} from "react";

function WebComponent() {
  return (
    <div>
      <h1>Web Component</h1>
    </div>
  );
}

registerAsWebComponent(WebComponent, "web-component")

export const RANDOM_NUMBER = 4 // totally random

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "web-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}