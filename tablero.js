class Tablero {
    constructor(tamanio=9){
        this.tamanio = tamanio;
        this.posiciones = new Array(tamanio*tamanio).fill(0);
        this.cadenas = [];
    }

    poner_piedra(piedra){
        if(this.comprobarPosicionValida(piedra)){
            this.posiciones[getIndice(piedra.x, piedra.y)] = piedra.color
            cadenas.agregarPiedra(piedra);
        }        
    }

    comprobarPosicionValida(piedra){
        return this.getIndice(piedra.x, piedra.y) == 0
    }

    getIndice(x,y){
        return x * tamanio + y
    }
}