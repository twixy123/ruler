class RULER{

    constructor(obj) {

        this.top = obj.top
        // переменная для определения оси

        this.right = obj.right
        // переменная для определения оси

        this.bottom = obj.bottom
        // переменная для определения оси

        this.left = obj.left
        // переменная для определения оси

        this.ruler = this.getEl(obj.ruler)
        // присваиваем переменной ruler наш div

        this.rulerBackgroundColor =  obj.rulerBackgroundColor ? obj.rulerBackgroundColor : 'black'
        // присваиваем переменной rulerBackgroundColor цвет блока ruler

        this.lineColor = obj.lineColor ? obj.lineColor : 'red'
        // присваиваем переменной lineColor цвет полос

        this.stamp = 0
        //переменная для высоких полос (типа каждые 5мм)

        this.rulerStyle(this.ruler)
        //функция для задания блоку div стилей

        this.numberForСycle =
            this.top || this.bottom
                ? Math.floor(this.ruler.clientHeight / 2)
                : Math.floor(this.ruler.clientWidth / 2)
        // Округляем число для того что-бы небыло чисел после запятой,
        // иначе в цикле выдает ошибку и линии рисуются на половину

        this.cycle = this.top || this.bottom ? this.ruler.clientWidth : this.ruler.clientHeight
        //переменная для цикла отрисовывающий полосы

        this.drawLine(this.cycle)
        //функция для отрисовки полос на блоке div
    }

    getEl(x){
        return document.querySelector(x)
    }

    rulerStyle(rul){
        if (this.top){
            rul.style =
                `
                    width: 100%;
                    height: 100%;
                    background: ${this.rulerBackgroundColor};
                    margin: 0 auto;
                    box-sizing: border-box;
                    display: flex;
                    align-items: flex-end;
                `
        }
        if (this.bottom){
            rul.style =
                `
                    width: 100%;
                    height: 100%;
                    background: ${this.rulerBackgroundColor};
                    margin: 0 auto;
                    box-sizing: border-box;
                    display: flex;
                    align-items: flex-start;
                `
        }
        if (this.left){
            rul.style =
                `
                    width: 100%;
                    height: 100%;
                    background: ${this.rulerBackgroundColor};
                    margin: 0 auto;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                `
        }
        if (this.right){
            rul.style =
                `
                    width: 100%;
                    height: 100%;
                    background: ${this.rulerBackgroundColor};
                    margin: 0 auto;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                `
        }

    }

    drawLine(cycle){
        for (let i = 0; i <= cycle; i++){
            if (i % this.numberForСycle === 0){
                // создаем эллемент каждые this.this.numberForСycle пикселей

                const line = document.createElement('div')

                if(this.top || this.bottom){
                    line.style =
                        `
                            width: ${this.ruler.clientHeight / 2}px;
                            height: ${this.ruler.clientHeight / 2}px;
                            border-left: 1px ${this.lineColor} solid;
                            box-sizing: border-box;
                        `

                    if (this.stamp === 0 || this.stamp % 5 === 0){
                        // меняем стили для высоких полос (типа каждые 5мм)
                        line.style =
                            `
                                width: ${this.ruler.clientHeight / 2}px;
                                height: ${this.ruler.clientHeight}px;
                                border-left: 2px ${this.lineColor} solid;
                                box-sizing: border-box;
                            `
                    }
                }

                if(this.left || this.right){
                    line.style =
                        `
                        width: ${this.ruler.clientWidth / 2}px;
                        height: ${this.ruler.clientWidth / 2}px;
                        border-top: 1px ${this.lineColor} solid;
                        box-sizing: border-box;
                    `

                    if (this.stamp === 0 || this.stamp % 5 === 0){
                        // меняем стили для высоких полос (типа каждые 5мм)
                        line.style =
                            `
                            width: ${this.ruler.clientWidth}px;
                            height: ${this.ruler.clientWidth / 2}px;
                            border-top: 2px ${this.lineColor} solid;
                            box-sizing: border-box;
                        `
                    }
                }

                this.ruler.append(line);
                // пририсовывваем блоку div наши полосы

                this.stamp++;
            }

        }
    }
}

const ruler = new RULER({
    ruler: '.ruler',
    top: true,
    left: false,
    right:false,
    bottom:false,
    rulerBackgroundColor: 'black',
    lineColor: 'white',
})