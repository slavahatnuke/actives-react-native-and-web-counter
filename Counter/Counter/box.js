import {Box} from 'actives';

import CounterService from './CounterService';

let box = new Box;

// logic
box.add('CounterService', () => new CounterService());

// states
box.connect('CounterState', 'CounterService')
    .state(({CounterService}) => {
        return {
            counter: CounterService.get()
        }
    })
    .actions(({CounterService}) => {
        return {
            onUp: () => CounterService.up(),
            onDown: () => CounterService.down(),
            onToggle: () => CounterService.toggle()
        };
    });

export default box;