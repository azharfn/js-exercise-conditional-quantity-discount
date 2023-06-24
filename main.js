/**
 * flow 
 * 1. parameter yang digunakan quantity dan price
 * 2. buat variable pajak,diskon,totalbarang
 * 3. kondisi quantity yang diketahui 
 * - jika quantity >= dengan 5 = diskon 15%
 * - jika quantity >= dgn 10 = 20%
 * - barang kurang dari 5 tidak menerima diskon
 * 4. setelah itu total harga barang 
 * di tambah pajak 11% dari total harga barang
 * yang suda di diskon
 * 
 */

function quantityDiscount(quantity, price) {

  const pajak = 0.11 // 11%
  let diskon = 0 

  const totalB = quantity * price;
  if (quantity >= 10) {
    diskon = totalB * 0.2;
  }
  else if (quantity >= 5) {
    diskon = totalB * 0.15;
  }
    // const totalBB = totalB - diskon;
    // return totalBB + pajak * totalBB;
    
    return (totalB-diskon)+pajak*(totalB-diskon);
  


  // return null 
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
