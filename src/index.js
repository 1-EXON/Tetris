class Tetris {
    // 20*10 의 맵 크기 (세로*가로)
    map = Array.from(Array(20), () => new Array(10).fill(0))
    blocks = []

    constructor() {
        this.initBlocks()
        this.map[19][2] = 1
        this.map[1][4] = 1
        this.map[11][5] = 1
        this.map[12][5] = 1
        this.map[12][1] = 1
        
        setInterval(() => {
            this.clearMap()
            this.drawMap()
        }, 500)
    }

    clearMap() {
        console.clear()
    }

    drawMap() {
        let log = ''
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.map[i][j] === 1) log += '█'
                else log += ' '
            }
            log += '\n'
        }
        console.log(log)
    }

    initBlocks() {
        this.blocks.push([[[1, 1, 1, 1]], [[1], [1], [1], [1]]])
        this.blocks.push([[[1, 0, 0], [1, 1, 1]], [[0, 1], [0, 1], [1, 1]], [[1, 1, 1], [0, 0, 1]], [[1, 1], [1, 0], [1, 0]]])
        this.blocks.push([[[0, 0, 1], [1, 1, 1]], [[1, 1], [0, 1], [0, 1]], [[1, 1, 1], [1, 0, 0]], [[1, 0], [1, 0], [1, 1]]])
        this.blocks.push([[[1, 1], [1, 1]]])
        this.blocks.push([[[0, 1, 1], [1, 1, 0]], [[1, 0], [1, 1], [0, 1]]])
        this.blocks.push([[[1, 1, 0], [0, 1, 1]], [[0, 1], [1, 1], [1, 0]]])
        this.blocks.push([[[0, 1, 0], [1, 1, 1]], [[1, 0], [1, 1], [1, 0]], [[1, 1, 1], [0, 1, 0]], [[0, 1], [1, 1], [0, 1]]])

        console.log(JSON.stringify(this.blocks))
    }
}

new Tetris()