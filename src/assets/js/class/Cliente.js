export default class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    calcularImpuesto() {
        let impuesto = ((this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21);
        return impuesto;
    }
    

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get nombre(){
        return this._nombre;
    }

    set impuesto(nuevoImpuesto) {
        this._impuesto = nuevoImpuesto;
    }

    get impuesto(){
        return this._impuesto;
    }

}