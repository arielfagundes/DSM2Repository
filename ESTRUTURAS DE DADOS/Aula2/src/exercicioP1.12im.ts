import * as prompt_sync from 'prompt-sync';

import {maior} from './exercicioP1.12ex'

const prompt = prompt_sync();

const num1: number = Number(prompt('Número 1: '));
const num2: number = Number(prompt('Número 2: '));

console.log(maior(num1, num2));