const formatNumber = (angka: number, prefix: string = 'Rp', suffix: string = '') => {
    const format = angka.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    if (convert !== null) {
        return prefix + convert.join(',').split('').reverse().join('') + suffix
    }
    return angka.toString();
}

export default formatNumber
