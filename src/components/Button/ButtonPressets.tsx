import {Theemecolors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';

export type ButtonPreset = 'primary' | 'outline' | 'secondary';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: Theemecolors;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const buttonPressets: Record<ButtonPreset, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'primaryContrast',
  },
  outline: {
    container: {
      borderWidth: 1,
      borderColor: 'primary',
    },
    content: 'primary',
  },
  secondary: {
    container: {
      backgroundColor: 'carrotSecondary',
    },
    content: 'primaryContrast',
  },
};
