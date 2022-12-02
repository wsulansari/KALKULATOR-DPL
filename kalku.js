const readline = require('readline-sync')

var Nilai1 = readline.questionInt('FUNGSI:[1.TAMBAH],[2.KURANG],[3.KALI],[4.BAGI]:')

if(Nilai1 == 1){
    var MasukanNilai1 = readline.questionInt('Masukan Nilai 1:')
    var MasukanNilai2 = readline.questionInt('Masukan Nilai 2:')
    var Nilai1 = MasukanNilai1 + MasukanNilai2
    console.log(Nilai1)
}else if(Nilai1 == 2){
    var MasukanNilai1 = readline.questionInt('Masukan Nilai 1:')
    var MasukanNilai2 = readline.questionInt('Masukan Nilai 2:')
    var Nilai1 = MasukanNilai1 - MasukanNilai2
    console.log(Nilai1)
}else if(Nilai1 == 3){
    var MasukanNilai1 = readline.questionInt('MASUKAN NILAI 1:')
    var MasukanNilai2 = readline.questionInt('MASUKAN NILAI 2:')
    var Nilai1 = MasukanNilai1 * MasukanNilai2
    console.log(Nilai1)
}else if(Nilai1 == 4){
    var MasukanNilai1 = readline.questionInt('MASUKAN NILAI 1:')
    var MasukanNilai2 = readline.questionInt('MASUKAN NILAI 2:')
    var Nilai1 = MasukanNilai1 / MasukanNilai2
    console.log(Nilai1)
}
