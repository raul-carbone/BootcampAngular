class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        //Base Componente - <h1>Título Notícia</h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo")



        //Estilizar o Componente
        const style = document.createElement("style");
        style.textContent = `
                h1{
                    color: red;
                }
            `



        //Enviar para a 'shadow'
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);




    }
}

customElements.define('titulo-dinamico', TituloDinamico)