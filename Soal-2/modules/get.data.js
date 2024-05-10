import axios from 'axios';

const getData = async () => {
    try {
        const response = await axios.get('https://gist.githubusercontent.com/RezaNurRochmat13/291dcd64a10ff8c19f6b8b74107c85e2/raw/9d42c4c26ac6f3d783f8ae0b35af8b8d574a54ca/homework.log');

        return response.data;

    } catch (error) {
        throw new Error("Gagal mendapatkan data dari url");
    }
};

export { getData };