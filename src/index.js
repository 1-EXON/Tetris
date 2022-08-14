class Tetris {

    // 20*10 의 맵 크기 (세로*가로)
    map = Array.from(Array(20), () => new Array(10).fill(0))

    constructor(s) {
        console.log('Start Tertirs..')
        console.log(this.map)
    }
}

new Tetris()