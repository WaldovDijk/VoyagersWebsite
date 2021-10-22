import styled from 'styled-components';

interface InputProps {
  icon: string;
  size: number;
  marginLeft?: number;
  marginRight?: number;
}

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
    case 'arrow':
      return '\\e906';
    case 'menu':
      return '\\e907';
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

export { Icon };

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
