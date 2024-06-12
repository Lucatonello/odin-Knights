let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

function knightMoves(start, goal) {
    if (!validCords(start, goal)) {
        return;
    }
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
    
    const queue = [[start, 0, [start]]];
    const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
    visited[start[0]][goal[1]] = true;

    while (queue.length > 0) {
        const [[x, y], moves, path] = queue.shift();

        if (x === goal[0] && y === goal[1]) {
            return { moves, path };
        }
        
        for (const[dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (validCords([newX, newY]) && !visited[newX][newY]) {
                visited[newX][newY] = true;
                queue.push([[newX, newY], moves + 1, [...path, [newX, newY]]]);
            }
        }
    }
}

function validCords(coords) {
    if (coords[0] > 7 || coords[0] < 0 || coords[1] > 7 || coords[1] < 0) {
        return false;
    }
    return true;
}

console.log(knightMoves([0, 1],[2, 2]));