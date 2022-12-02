const readline = require('readline-sync')

var nilai1 = readline.question('FUMGSI:[1.TAMBAH], [2.KALI], [3.KURANG] [4.BAGI]')


if(nilai1 ==1){
    var masukanNilai1 = readline.questionInt('masukan nilai 1:')
    var masukanNilai2 = readline.questionInt('masukan nilai 2:')
    console.log(Number(masukanNilai1)+(Number(masukanNilai2)))
}else if(nilai1 ==2){
    var MasukanNilai1 = readline.questionInt('masukan nilai 1:')
    var MasukanNilai2 = readline.questionInt('masukan nilai 2:')
    console.log(Number(MasukanNilai1)*(Number(MasukanNilai2)))
}else if(nilai1 ==3){
    var MasukanNilai1 = readline.questionInt('masukan nilai 1:')
    var MasukanNilai2 = readline.questionInt('masukan nilai 2:')
    console.log(Number(MasukanNilai1)-(Number(MasukanNilai2)))
}else if(nilai1 ==4)
    var MasukanNilai1 = readline.questionInt('masukan nilai 1:')
    var MasukanNilai2 = readline.questionInt('masukan nilai 2:')
    console.log(Number(MasukanNilai1)/(Number(MasukanNilai2)))
