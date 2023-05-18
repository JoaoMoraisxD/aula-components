class Produto extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class','produto-content');

        const fotoProduto = document.createElement('img');
        fotoProduto.setAttribute('class', 'produto-img');
        fotoProduto.src = this.getAttribute('foto')
        fotoProduto.alt = "Foto do produto"


        const nomeProduto = document.createElement('h3');
        nomeProduto.textContent = this.getAttribute('nomeProduto');

        const valorProduto= document.createElement('p');
        valorProduto.textContent = this.getAttribute('valorProduto');

        componentRoot.appendChild(fotoProduto);
        componentRoot.appendChild(nomeProduto);
        componentRoot.appendChild(valorProduto);

        return componentRoot;
    }
    styles(){
        const style = document.createElement('style');
        style.textContent = `
        
        .produto-content{
            margin: 30px;
            width: 200px;
            height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        
        .produto-img{
            width: 150px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        
        
        `
        return style;
    }
}

customElements.define('produto-component', Produto);