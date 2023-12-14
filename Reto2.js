function manufacture(gifts, materials) {
  let manufacturable = []
    let set = new Set(materials.split(""))
    for(let valor in gifts) {
        let array = [...new Set(gifts[valor].split(""))]
        
        let sePuedeFormar = array.every(elem => set.has(elem))
        if(sePuedeFormar) {
            manufacturable.push(gifts[valor])
        }
    }
    return manufacturable
}
