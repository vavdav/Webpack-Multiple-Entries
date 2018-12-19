import { singleton } from './singleton';

console.log('entryB');
console.log('singletonB', singleton.getNumber());

export const testA = 'bbb';
