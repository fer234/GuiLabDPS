interface SuperHero{
    nombre:string,
    poderes:string[];
}

function heroe(datos:SuperHero){
    return "Yo soy "+ datos.nombre+" y mis poderes son: "+datos.poderes;
}

let h = {nombre: "Peter parket", poderes: ["trepar", " super fuerza", "agilidad", " y hacer telas de araña"]};

console.log(heroe(h));