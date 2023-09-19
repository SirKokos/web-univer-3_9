let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d") //Эллемент через котороый происходит рисовние canvas


let countBlock = 20 // количество клеток
let sizeBlock = 40 // ширина в пикселях

let ko = 0.1 // коэфицент попадания бомб
canvas.width = countBlock*sizeBlock
canvas.height = countBlock*sizeBlock


let game = false


let blocks = Array()
//этот метод нужен для заполнения подсказок где находятся боимбы
function plusOne(h,w){
    if(h >=0 && h <= countBlock - 1 && w >= 0 && w < countBlock - 1) { // это условиенужно чтоб мы не захолил за границу нашего поля
    if(blocks[h][w].number != 10) {
        blocks[h][w].number++
        }
    }
}


// метод начала игры
function start(sh,sw){
    blocks = Array()
    for(let h = 0; h<countBlock; h++){
        let wline = Array()
        for(let w = 0; w< countBlock ; w++){

            if(h == sh && w == sw) {
                wline.push({number:0, show:0}); //чтобы не могли проиграть при первом клике
                continue;
            }

            if(Math.random() < ko){ // если рандомное число попадется меньше чем 0.1 то добавим бомбу
                wline.push({number:10,show:0}) //обозначение бомбы это 1 а показать или скрыть это 0
             }else {
                wline.push({number:0,show:0}) //обозначение бомбы это 1 а показать или скрыть это 0
            }



        }
        blocks.push(wline) //заполнили глобальный масив количеством бомб на карте

    }
    //цикл для просчета цифр рядом с бомбами
    for(let h = 0; h<countBlock; h++){
        for(let w = 0; w< countBlock ; w++) {
            if(blocks[h][w].number == 10){
                plusOne(h,w-1)
                plusOne(h,w+1)
                plusOne(h+1,w)
                plusOne(h-1,w)
                plusOne(h+1,w+1)
                plusOne(h-1,w-1)
                plusOne(h+1,w-1)
                plusOne(h-1,w+1)
            }

        }
    }
    game = true
}

function draw(){
    context.fillStyle = "#222";
    context.fillRect(0,0,canvas.width ,canvas.height)

        for(let h = 0; h<blocks.length; h++){
            for(let w = 0; w< blocks[h].length ; w++) {

                //если ээлемент показан то два варианта
                if(blocks[h][w].show) {
                    //если это бомба
                    if(blocks[h][w].number == 10){
                        // то отрисовываем ее
                        context.beginPath()
                        context.fillStyle = "#234"
                        context.arc(w*sizeBlock+sizeBlock/2,h*sizeBlock+sizeBlock/2,sizeBlock/3,0,2*Math.PI,true);
                        context.fill();
                        continue;
                    }
                    //если нет то рисуем просто серое окно
                    context.fillStyle = "#555"
                    context.fillRect(w*sizeBlock,h*sizeBlock,sizeBlock,sizeBlock)

                    // теперь отрисовка чисел которые рядом с бомбой
                    if(blocks[h][w].number){
                        context.font = "24px serif"
                        context.fillStyle = "#ddd"
                        context.fillText(blocks[h][w].number,w*sizeBlock+10 , (h + 1)*sizeBlock)
                    }
                }
            }
        }


        for(let i = 0; i < sizeBlock; i++){
            //рисовали горизонтальные линии
            context.strokeStyle = "#fff"
            context.moveTo(0,i*sizeBlock) // начало точки
            context.lineTo(canvas.width,i*sizeBlock)//конец точки
            context.stroke()

            context.strokeStyle = "#fff"
            context.moveTo(i*sizeBlock,0)
            context.lineTo(i*sizeBlock,canvas.width)
            context.stroke()
        }
}

setInterval(draw,25) // запуск отрисовки с интервалом

// открытие сразу группы блоков
function checkZero(h,w) {

    if (h >= 0 && h <= countBlock - 1 && w >= 0 && w < countBlock - 1) {
        if (!blocks[h][w].show) {
            showBLock(h, w);
        }
    }
}
// показать один блок
function showBLock(h,w) {

    blocks[h][w].show = 1;

    if (blocks[h][w].number != 0) {
        return;
    }

    checkZero(h,w-1);
    checkZero(h,w+1);
    checkZero(h-1,w);
    checkZero(h+1,w);

}

canvas.addEventListener('mousedown',function(event){



    let h = Math.floor((event.clientY/sizeBlock));
    let w = Math.floor((event.clientX/sizeBlock));

    if(!game) {
        start(h,w);
    }

    if (blocks[h][w].number == 10) {
        console.log('lose');
        game = false;

    }

    showBLock(h,w);


});





