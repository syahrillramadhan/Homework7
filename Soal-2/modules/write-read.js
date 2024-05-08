import { writeFile, readFile } from 'node:fs/promises';

const readAndWriteData = async () => {
    //Url di soal nomor 2 dari github
    const dataUrl = 'https://gist.githubusercontent.com/RezaNurRochmat13/291dcd64a10ff8c19f6b8b74107c85e2/raw/9d42c4c26ac6f3d783f8ae0b35af8b8d574a54ca/homework.log';

    //Pakai try catch
    try {
        const response = await fetch(dataUrl); // Ngefetch data dari url dulu
        //Kalau ga response lempar error
        if (!response.ok) {
            throw new Error('ada yang error ngab!!');
        }
        //Await dulu terus responsenya convert ke bentuk text
        const logData = await response.text();

        //Kalau di write langsung kan synchronous, jadi aku kasih await biar kelihatan async kayak aku sama ... asudahlah..
        await writeFile('log.txt', logData);
        console.log('File sudah berhasil tersimpan di log.txt mazehhh~');
        //Tambah garis khatulistiwa
        console.log('===============================================================================');
        
        //Di soal sih ga disuruh nge-console.log filenya cuman biar nilaiku 101 aku kasih ini wkwk 
        const readFileLog = await readFile('log.txt', 'utf8');
        console.log(readFileLog);

    } catch (error) {
        //Ini adalah block pelarian, yang cuman kalau ada error dari code diatas doang baru lari kesini
        console.log('Error trosss:', error);
    }
}

export default readAndWriteData;