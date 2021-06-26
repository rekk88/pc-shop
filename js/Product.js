/**
 * @copyright mioooooo
 * @description shop
 * @license free
 */



export default class Product{
    /**
     * @param {string} nome
     * @param {string} descrizione
     * @param {number} prezzo
     * @param {string} categoria
     * @param {string} img_path
     */
    constructor(nome , descrizione , prezzo , categoria , img_path){
        this.nome = nome;
        this.descrizione = descrizione;
        this.prezzo = prezzo;
        this.categoria = categoria;
        this.img_path = img_path
    }

    
}