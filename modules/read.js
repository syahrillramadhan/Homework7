import { readFile } from 'fs/promises';
import { getData } from './get.data.js';

const readData = async () => {
    try {
        const data = await getData();

        const read = await readFile('log.txt', 'utf8');
        console.log('Data:', data);
    } catch (error) {
        throw new Error('Failed to read file', error);
    }
};

export { readData };
