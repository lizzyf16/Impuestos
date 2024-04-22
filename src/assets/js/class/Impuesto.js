class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    set montoBrutoAnual(montoBrutoAnual) {
        this._montoBrutoAnual = montoBrutoAnual;
    }

    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }

    set deducciones(deducciones) {
        this._deducciones = deducciones;
    }

    get deducciones(){
        return this._deducciones;
    }

}

export default Impuesto;