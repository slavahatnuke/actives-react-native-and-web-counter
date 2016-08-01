import box from '../../Counter/box';
import connect from 'actives-react';

import Counter from './Counter';

box.add('Counter', ({CounterState}) => connect(CounterState)(Counter()));

export default box;