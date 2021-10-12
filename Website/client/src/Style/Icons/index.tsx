import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

interface InputProps {
  icon: string;
  size: number;
}

const GlobalIconStyle = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url('fonts/icomoon.eot?8gwi93');
    src:  url('fonts/icomoon.eot?8gwi93#iefix') format('embedded-opentype'),
      url('fonts/icomoon.ttf?8gwi93') format('truetype'),
      url('fonts/icomoon.woff?8gwi93') format('woff'),
      url('fonts/icomoon.svg?8gwi93#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`;

const Icon = styled('i')`
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  font-size: ${(props: InputProps) => props.size}rem;
  &:before {
    content: '${(props: InputProps) => handleIcons(props.icon)}';
  }
`;

const handleIcons = (icon: string) => {
  switch (icon) {
    case 'phone':
      return '\\e900';
    case 'email':
      return '\\e901';
    case 'location':
      return '\\e902';
  }
};

export { GlobalIconStyle, Icon };

/*
.icon-phone:before {
  content: "\e900";
}
.icon-email:before {
  content: "\e901";
}
.icon-location:before {
  content: "\e902";
}
*/
