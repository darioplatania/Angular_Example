export class Prodotto{
    /**
     *
     * @param id
     * @param categoria
     * @param nome
     * @param prezzo
     * @param descrizione
     */
   constructor(
        public id? : number,
        public categoria? : string,
        public nome? : string,
        public prezzo? : number,
        public descrizione? : string
    ){}


}
