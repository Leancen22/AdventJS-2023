function findFirstRepeated(gifts) {
let nuevo = new Set();
    for (let id of gifts) {
        if(nuevo.has(id)) {
            return id;
        }
        nuevo.add(id)
    }
    return -1
}
