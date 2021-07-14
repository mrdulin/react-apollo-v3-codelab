import CycleIcon from './CycleIcon';
import SquareIcon from './SquareIcon';

export interface IconType {
  cycle: typeof CycleIcon;
  square: typeof SquareIcon;
}

export { CycleIcon as cycle, SquareIcon as square };
