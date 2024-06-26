import { writeFile } from 'fs/promises';
import { getData } from './get.data.js';

const writeData = async () => {
    try {
        const data = await getData();

        await writeFile('log.txt', data);
        console.log('Successfully to saving data');
    } catch (error) {
        throw new Error('Failed to write data', error);
    }
};

export { writeData };
