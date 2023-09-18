let mas = []

function createMas(width = 8, height = 8,bomb =10){
    mas = Array.from({length: height}, () =>Array.from({length: width},() => 0)) //создает масив из масивоподобного объекта или итерируемого

}