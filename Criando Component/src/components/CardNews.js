class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement('span');
        autor.textContent ="By" + (this.getAttribute('autor') || "Anonymous");

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute('link-url')

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('noticia');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute("class", "card__right");

        const cardImage = document.createElement('img');
        cardImage.setAttribute('class', 'fotoNoticia')
        cardImage.src = this.getAttribute('photo') || 'assets/userPadrao.jpg';
        cardImage.alt = "foto noticia"

        cardRight.appendChild(cardImage)

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `

            .fotoNoticia{
                    height: 100px;
            }
        
            .card{
                height: 150px;
                width: 80%;
                display: flex;
                flex-direction: row;
                box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;    justify-content: space-between;
            }

            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card__left > span{
                font-weight: 500;
            }

            .card__left > h1{
                margin-top: 15px;
                font-size: 25px;
            }

            .card__left > p{
                color: rgb(58, 58, 58);
            }

            .card__right{
                display: flex;
                justify-content: center;
                align-items: center;
                padding-right: 10px;
            }
        `
        return style;
    }
}

customElements.define('card-news', CardNews);