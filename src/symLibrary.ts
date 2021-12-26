import { Symbol } from 'types';
let Arrow1 = require('./symbols/Arrow1.svg');
let Arrow2 = require('./symbols/Arrow2.svg');
let FlatVessel1 = require('./symbols/FlatVessel1.svg');
let Line1 = require('./symbols/Line1.svg');
let Mixer1 = require('./symbols/Mixer1.svg');
let Motor1 = require('./symbols/Motor1.svg');
let Pipe1 = require('./symbols/Pipe1.svg');
let Pipe2 = require('./symbols/Pipe2.svg');
let Pipe3 = require('./symbols/Pipe3.svg');
let Pump1 = require('./symbols/Pump1.svg');
let Tank1 = require('./symbols/Tank1.svg');
let Tank2 = require('./symbols/Tank2.svg');
let Tank3 = require('./symbols/Tank3.svg');
let Valve1 = require('./symbols/Valve1.svg');
let Valve2 = require('./symbols/Valve2.svg');

// attention. In the svg files add  preserveAspectRatio="none" to the svg tag to allow non-uniform scale
export const SymbolsLibrary: Symbol[] = [
  {
    label: 'None',
    value: '',
    width: 32,
    height: 32,
    factor: 1,
  },
  {
    label: 'Custom Symbol',
    value: 'custom',
    width: 32,
    height: 32,
    factor: 1,
  },
  {
    label: 'Arrow 1',
    value: Arrow1,
    width: 32,
    height: 32,
    factor: 1,
  },
  {
    label: 'Arrow 2',
    value: Arrow2,
    width: 32,
    height: 32,
    factor: 1,
  },
  {
    label: 'Flat Vessel 1',
    value: FlatVessel1,
    width: 16,
    height: 32,
    factor: 8,
  },
  {
    label: 'Line 1',
    value: Line1,
    width: 32,
    height: 32,
    factor: 1,
  },
  {
    label: 'Mixer 1',
    value: Mixer1,
    width: 32,
    height: 32,
    factor: 2,
  },
  {
    label: 'Motor 1',
    value: Motor1,
    width: 32,
    height: 32,
    factor: 2,
  },
  {
    label: 'Pipe 1',
    value: Pipe1,
    width: 32,
    height: 32,
    factor: 1,
  },
  {
    label: 'Pipe 2',
    value: Pipe2,
    width: 32,
    height: 32,
    factor: 2,
  },
  {
    label: 'Pipe 3',
    value: Pipe3,
    width: 32,
    height: 32,
    factor: 2,
  },
  {
    label: 'Pump 1',
    value: Pump1,
    width: 32,
    height: 32,
    factor: 2,
  },
  {
    label: 'Tank 1',
    value: Tank1,
    width: 16,
    height: 32,
    factor: 8,
  },
  {
    label: 'Tank 2',
    value: Tank2,
    width: 16,
    height: 32,
    factor: 8,
  },
  {
    label: 'Tank 3',
    value: Tank3,
    width: 16,
    height: 32,
    factor: 8,
  },
  {
    label: 'Valve 1',
    value: Valve1,
    width: 32,
    height: 16,
    factor: 2,
  },
  {
    label: 'Valve 2',
    value: Valve2,
    width: 32,
    height: 32,
    factor: 2,
  },
];
