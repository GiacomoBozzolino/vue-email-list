Problema: Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

1- Copio il cdn di Axion nell'html
2- Setto correttamente Vuejs 
3- In appdata creo un array vuoto in cui poi andranno inserite le mail generate randomicamente
4- In methods creo una funzione per generare le mail dall'api di boolean
    4.1 Uso un ciclo for per far ripetere l'operazione 10 volte:
    4.2- all'interno ciclo:
    axion.get(link dell'api).then((result) => { 
        dentro l'arrow function push i risultati ottenuti nell'array vuoto
        this.array.push (result.data.response)})
5- recupero la funzione così creata e la inserisco in mounted in modo che funzioni automaticamente.
6- nell'HTML creo un elemento ul in cui recupero l'array vuoto in modo che venga stampato in pagina