import { css, Global } from '@emotion/react'
import { theme } from '@global/config/defineConfig'

const Color = theme.color

export const GlobalStyles = (Darkmode = true) => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
      // *::-webkit-scrollbar {
      //   display: none;
      // }

      *:focus {
        outline: 0 !important;
      }

      *::-webkit-scrollbar:horizontal {
        display: none;
      }

      *::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: ${Darkmode ? '#ffffff11' : '#00000011'};
      }

      *::-webkit-scrollbar {
        width: 4px;
        background-color: transparent;
      }

      *::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: ${Color.primary[0]};
      }

      body {
        width: 100%;
        height: 100vh;
        height: 100dvh;
        padding: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: ${Darkmode ? '#FFF' : Color.background[1]};
        background-color: ${Darkmode ? Color.background[1] : '#FFF'};
        // font-family: 'Inter', 'Prompt';
        font-family: var(--font-inter), var(--font-prompt);
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      ::selection {
        color: #fff;
        background: ${Color.primary[0]}; /* WebKit/Blink Browsers */
      }
      ::-moz-selection {
        color: #fff;
        background: ${Color.primary[0]}; /* Gecko Browsers */
      }

      canvas {
        width: 100%;
        height: 100vh;
      }

      [tabindex='-1']:focus:not(:focus-visible) {
        outline: 0 !important;
      }

      hr {
        margin: 1rem 0;
        color: inherit;
        background-color: currentColor;
        border: 0;
        opacity: 0.25;
      }

      hr:not([size]) {
        height: 1px;
      }

      abbr[title],
      abbr[data-original-title] {
        text-decoration: underline dotted;
        cursor: help;
        text-decoration-skip-ink: none;
      }

      address {
        margin-bottom: 1rem;
        font-style: normal;
        line-height: inherit;
      }

      ol,
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      ol ol,
      ul ul,
      ol ul,
      ul ol {
        margin-bottom: 0;
      }

      dt {
        font-weight: 700;
      }

      b,
      strong {
        font-weight: bolder;
      }

      small,
      .small {
        font-size: 0.875em;
      }

      mark,
      .mark {
        padding: 0.2em;
        background-color: #fcf8e3;
      }

      sub,
      sup {
        position: relative;
        font-size: 0.75em;
        line-height: 0;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      a {
        color: ${Darkmode ? '#FFF' : Color.background[1]};
        text-decoration: none;
      }

      a:hover {
        color: ${Darkmode ? '#FFF' : Color.background[1]};
        text-decoration: none;
      }

      a:not([href]):not([class]),
      a:not([href]):not([class]):hover {
        color: inherit;
        text-decoration: none;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono',
          Menlo, monospace;
        font-size: 1em;
      }

      pre {
        display: block;
        margin-top: 0;
        margin-bottom: 1rem;
        overflow: auto;
        font-size: 0.875em;
        -ms-overflow-style: scrollbar;
      }

      pre code {
        font-size: inherit;
        color: inherit;
        word-break: normal;
      }

      code {
        font-size: 0.875em;
        color: #d63384;
        word-wrap: break-word;
      }

      a > code {
        color: inherit;
      }

      kbd {
        padding: 0.2rem 0.4rem;
        font-size: 0.875em;
        color: #fff;
        background-color: #212529;
        border-radius: 0.2rem;
      }

      kbd kbd {
        padding: 0;
        font-size: 1em;
        font-weight: 700;
      }

      figure {
        margin: 0 0 1rem;
      }

      img,
      svg {
        vertical-align: middle;
      }

      table {
        caption-side: bottom;
        border-collapse: collapse;
      }

      caption {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        color: #6c757d;
        text-align: left;
      }

      th {
        text-align: inherit;
        text-align: -webkit-match-parent;
      }

      thead,
      tbody,
      tfoot,
      tr,
      td,
      th {
        border-color: inherit;
        border-style: solid;
        border-width: 0;
      }

      label {
        display: inline-block;
      }

      button {
        border-radius: 0;
        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
        background-color: transparent;
        background-image: none;
      }

      button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
      }

      input,
      button,
      select,
      optgroup,
      textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        color: inherit;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      [role='button'] {
        cursor: pointer;
      }

      select {
        word-wrap: normal;
      }

      [list]::-webkit-calendar-picker-indicator {
        display: none;
      }

      button,
      [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: button;
      }

      button:not(:disabled),
      [type='button']:not(:disabled),
      [type='reset']:not(:disabled),
      [type='submit']:not(:disabled) {
        cursor: pointer;
      }

      ::-moz-focus-inner {
        padding: 0;
        border-style: none;
      }

      :-moz-focusring {
        outline: 1px dotted ButtonText;
      }

      :-moz-ui-invalid {
        box-shadow: none;
      }

      textarea {
        resize: vertical;
      }

      fieldset {
        min-width: 0;
        padding: 0;
        margin: 0;
        border: 0;
      }

      legend {
        float: left;
        width: 100%;
        padding: 0;
        margin-bottom: 0.5rem;
        font-size: calc(1.275rem + 0.3vw);
        line-height: inherit;
        white-space: normal;
      }

      @media (min-width: 1200px) {
        legend {
          font-size: 1.5rem;
        }
      }

      legend + * {
        clear: left;
      }

      ::-webkit-datetime-edit-fields-wrapper,
      ::-webkit-datetime-edit-text,
      ::-webkit-datetime-edit-minute,
      ::-webkit-datetime-edit-hour-field,
      ::-webkit-datetime-edit-day-field,
      ::-webkit-datetime-edit-month-field,
      ::-webkit-datetime-edit-year-field {
        padding: 0;
      }

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        height: auto;
      }

      [type='search'] {
        outline-offset: -2px;
        -webkit-appearance: textfield;
      }

      ::-webkit-search-decoration {
        -webkit-appearance: none;
      }

      ::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
      }

      output {
        display: inline-block;
      }

      iframe {
        border: 0;
      }

      summary {
        display: list-item;
        cursor: pointer;
      }

      progress {
        vertical-align: baseline;
      }

      [hidden] {
        display: none !important;
      }

      /* nProgress */
      /* Make clicks pass-through */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #fff;

        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;

        width: 100%;
        height: 3px;
      }

      /* Fancy blur effect */
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow:
          0 0 10px #fff,
          0 0 5px #fff;
        opacity: 1;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }

      /* Remove these to get rid of the spinner */
      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }

      #nprogress .spinner-icon {
        width: 24px;
        height: 24px;
        box-sizing: border-box;

        border: solid 3px transparent;
        border-top-color: #fff;
        border-left-color: #fff;
        border-radius: 50%;

        -webkit-animation: nprogress-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
      }

      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }

      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }

      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}
  />
)
