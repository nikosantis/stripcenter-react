import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

export const Styles = createGlobalStyle`
  body {
    font-family: ${fonts.mainFont};
    overflow-x: hidden;
    position: relative;
  }

  a {
  text-decoration: none;
    &:hover {
      text-decoration: none;
    }

    :focus {
      outline: none;
    }
  }
  .button:focus:not(:active), .button.is-focused:not(:active) {
    box-shadow: none;
  }

  :focus {
    outline: none;
  }
`
