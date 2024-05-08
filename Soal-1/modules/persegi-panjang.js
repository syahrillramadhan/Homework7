class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }

    keliling() {
        return 2 * (this.panjang + this.lebar);
    }

    luas() {
        return this.panjang * this.lebar;
    }
}

export default PersegiPanjang;