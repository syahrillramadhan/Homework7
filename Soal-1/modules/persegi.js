class Persegi {
    constructor(sisi) {
        this.sisi = sisi;
    }

    keliling() {
        return 4 * this.sisi;
    }

    luas() {
        return this.sisi * this.sisi;
    }
}

export default Persegi;