Array.prototype.agregarPiedra = function(piedra) {
    var cadenas;
    if (!this.length){
        this.push(new Cadena(piedra));
    }
    cadenas = this.buscarAdyacentes(piedra)
    if(!cadenas){
        this.push(new Cadena());
    }
}