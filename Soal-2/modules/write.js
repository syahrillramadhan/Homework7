import { writeFile } from 'fs/promises';
import { getData } from './get.data.js';

const writeData = async () => {
    try {
        const data = await getData();

        await writeFile('log.txt', data);
        console.log('Data berhasil disimpan');
    } catch (error) {
        throw new Error('Gagal menulis data mazeehh', error);
    }
};

export { writeData };