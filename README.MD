
## O que é DOM?
- [x]  Document Object Model - Modelo de Objeto de Documentos
- [x]  Estrutura de árvore criada pelo browser para o Javascript
- [x]  Representação do HTML em Objetos
- [x]  Propriedades e métodos

## Para que serve a DOM?

- [x]  Javascript usa a DOM para se conectar ao HTML
- [x]  Manipular o HTML com o JavaScript
![Untitled](https://user-images.githubusercontent.com/72776221/224213382-a13b79ef-39f9-499b-9ca5-a6967d714758.png)
![Untitled (1)](https://user-images.githubusercontent.com/72776221/224213388-60e16f4f-99a4-40af-a9fe-9f8016c2cece.png)


- [x]  Console 👀 (vasculhar o objeto)
    - [x]  console.dir(document)
    - [x]  document.URL
        - [x]  URL, title, head, body, links, forms, images
### Buscando e selecionando elementos
- [x]  getElementById (returns element)
- [x]  .getElementsByClassName (returns HTMLCollection)
- [x]  .getElementsByTagName (return HTMLCollection)
- [x]  .querySelector (returns element)
- [x]  .querySelectorAll (returns NodeList)
### Manipulando conteúdo
- [x]  .textContent
- [x]  .innerText
- [x]  .innerHTML
- [x]  .value (inputs)
### Alterando estilos
- [x]  .style.property (camelCase)
- [x]  .classList 
    - [x]  .add() (adiciona classe)
    - [x]  .remove()
    - [x]  .toggle()
### Navegando pelos elementos
- [x]  Parents
    - [x]  .parentNode(elemento pai)
    - [x]  .parentElement (elemento pai)
- [x]  Children (elementos filhos)
    - [x]  .childNodes
    - [x]  .children
    - [x]  .childElementCount
    - [x]  .firstChild
    - [x]  .firstElementChild
    - [x]  .lastChild / .lastElementChild
    - [x]  .remove()
- [x]  Siblings (elementos irmão)
    - [x]  .nextSibling
    - [x]  .nextElementSibling
    - [x]  .previousSibling
### Criando elementos
 - [x]  .createElement()
### Trabalhando com propiedades dos elementos
 - [x]  .setAttribute() adiciona um atributo na tag
  - [x]  .getAttribute() obtem um " "   "  "  " "
   - [x]  .removeAttribute() remove " "     " "
### Inserindo elementos no  HTML
   - [x]  .insertBefore() - insere antes
     - [x]  .insertAfter() - insere depois
     - [x]  .append() / .appendChild() - adiciona elementos depois
     - [x]  .prepend() - adiciona elementos antes
### Eventos
- [x]  .addEventListener()
    - [x]  load
    - [x]  click
    - [x]  scroll
    - [x]  keydown
    - [x]  change
    - [x]  submit
-   [x]  event
    - [x]  target
        - [x]  id
        - [x]  className
    - [x]  type
    - [x]  clientX / clientY (relative to document)
    - [x]  offsetX / offsetY (relative to element)
    - [x]  preventDefault()
