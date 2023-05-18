class NavBar extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('nav');
        componentRoot.setAttribute('class', 'nav-bar');

        const nomeEmpresa = document.createElement('h3');
        nomeEmpresa.setAttribute('class', 'nome-empresa');
        nomeEmpresa.textContent = this.getAttribute('nome');
        

        componentRoot.appendChild(nomeEmpresa);
        return componentRoot;
    }
    styles(){
        const style = document.createElement('style')
        style.textContent = `
            .nav-bar{
                width: 100%;
                height: 50px;
                display: flex;
                justify-contet: center;
                aling-items: flex-start;
                margin-bottom: 20px;
                background-color: black;
            }

            .nome-empresa{
                font-family: arial, sans-serif;
                font-weight: 600;
                color: white;
            }

            .nome-empresa:hover{
                color: gray;
            }
        `
        return style
    }

}

customElements.define('nav-bar', NavBar);