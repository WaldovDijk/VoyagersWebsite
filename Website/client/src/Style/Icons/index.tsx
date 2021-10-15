import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

interface InputProps {
  icon: string;
  size: number;
  marginLeft?: number;
  marginRight?: number;
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
  margin-left: ${(props: InputProps) => props.marginLeft}rem;
  margin-right: ${(props: InputProps) => props.marginRight}rem;
  font-size: ${(props: InputProps) => props.size}rem;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &:before {
    content: '${(props: InputProps) => handleIcons(props.icon)}';
    ${(props) => {
      return handleColors(props.icon);
    }}
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
    case 'facebook':
      return '\\e903';
    case 'instagram':
      return '\\e904';
    case 'tripadvisor':
      return '\\e905';
  }
};

const handleColors = (icon: string) => {
  switch (icon) {
    case 'facebook':
      return 'color: #1877f2';
    case 'instagram':
      return 'color:#e4405f';
    case 'tripadvisor':
      return 'color:#00af87';
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
