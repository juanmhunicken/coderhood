// let autos = [
//     {dueño: 'Pedro', costo: 100000, tiempo: 100, repuestos: ['Parabrisas', 'Paragolpes delantero', 'Motor']},
//     {dueño: 'Matias', costo: 1000, tiempo: 5, repuestos: ['Parabrisas']},
//     {dueño: 'Pepe', costo: 200000, tiempo: 200, repuestos: ['Volante', 'Asiento conductor', 'Parabrisas', 'Paragolpes delantero', 'Motor']},
//     {dueño: 'Juan', costo: 80000, tiempo: 80, repuestos: ['Parabrisas', 'Paragolpes delantero']}
// ]

// let autoMasCaro = { 
//     costo: 0 
// }

// let repuestosJuan = []

// function sumarRepustosDeJuan( repuestos, repuestosJuan ){
//     for( let i = 0 ; i < repuestos.length ; i++){
//         let repuesto = repuestos[i]
//         repuestosJuan.push(repuesto)
//     }

//     return repuestosJuan
// } 


// for( let i = 0; i < autos.length ; i++ ){
//     const auto = autos[i]
//     if( auto.costo > autoMasCaro.costo){
//         autoMasCaro = auto
//     }

//     if( auto.dueño === 'Juan' ){
//         repuestosJuan = sumarRepustosDeJuan(auto.repuestos , repuestosJuan)
//     }
// }

// const solucion1 = 'El arreglo mas caro cuesta ' + autoMasCaro.costo + 'y necesita los repuestos ' + autoMasCaro.repuestos

// const solucion2 = 'Juan tiene que arreglar ' + repuestosJuan

// console.log(solucion1)
// console.log(solucion2)


let autos = [
    {
        nombre:'Pablo',
        reparacion: 8000,
        tiempo:120,
        respuestos:['paragolpe','puerta conductor','rueda conductor']
    },
    {
        nombre:'Tomi',
        reparacion: 7000000,
        tiempo:48,
        respuestos:['paragolpe']
    },
    {
        nombre:'Juan',
        reparacion: 15000,
        tiempo:48,
        respuestos:['paragolpe']
    }

]
let autoMasCaro={
    costo:0
}
for(let j=0; j < autos.length ;j++){
    let auto = autos[j]
    console.log("evaluando", auto.nombre);
    if(auto.reparacion>autoMasCaro.costo){
        console.log('evaluando auto', auto.nombre, "con el mas caro", autoMasCaro.nombre);
        console.log('evaluando costo', auto.reparacion, "con el mas caro", autoMasCaro.costo)
        autoMasCaro = auto;
    }
} 
console.log(autoMasCaro)