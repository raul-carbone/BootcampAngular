//Modelo do componente criado.
class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build() {
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card");

            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "cardLeft")

                const autor = document.createElement("span");
                    autor.textContent = "By: " + (this.getAttribute("autor") || "Anonymous");

                const linkTitle = document.createElement("a");
                    linkTitle.textContent = this.getAttribute("title");
                    linkTitle.href = this.getAttribute("link-url")

                const newsContent = document.createElement("p");
                    newsContent.textContent = this.getAttribute("content");

                cardLeft.appendChild(autor);
                cardLeft.appendChild(linkTitle);
                cardLeft.appendChild(newsContent);
                

        const cardRigth = document.createElement("div");
        cardRigth.setAttribute("class", "cardRigth");

            const newsImg = document.createElement("img");
                newsImg.src = this.getAttribute("photo") || "./assets/foto-default.jpg";
                newsImg.alt = "Foto Noticia";

        cardRigth.appendChild(newsImg)





        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRigth);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");

        style.textContent = `
            .card {
                width: 80%;
                margin-top: 15px;
                -webkit-box-shadow: 9px 9px 8px -1px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 9px 9px 8px -1px rgba(0, 0, 0, 0.75);
                box-shadow: 9px 9px 8px -1px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .cardLeft {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .cardLeft>a {
                color: black;
                text-decoration: none;
                font-weight: 700;
                margin-top: 15px;
                font-size: 25px;
            }
            
            .cardLeft>span {
                font-weight: 400;
            }
            
            .cardLeft>p {
                color: grey;
            }   
        `




        return style;

     }


}

customElements.define("card-news", CardNews);