Relatório de Projeto Front-end: Disco Heaven. 

1\. Informações Básicas 

● **Título do Projeto:** Disco Heaven 

● **Alunos(as):** \[Ana Heloise Alves, 1\] e \[Maria Júlia Moreira da Silva, 26\] 

● **Link do Projeto Online (se houver):** [https://mariamoreirasilva15-cmyk.github.io/HEAVEN-DISCO/](https://mariamoreirasilva15-cmyk.github.io/HEAVEN-DISCO/)

● **Link do Repositório GitHub (se houver):** [https://github.com/mariamoreirasilva15-cmyk/HEAVEN-DISCO.git](https://github.com/mariamoreirasilva15-cmyk/HEAVEN-DISCO.git)

2\. Descrição do Projeto 

● Qual é o propósito da sua página web? O que ela faz ou sobre o que ela é? 

O projeto **Disco Heaven** é uma página web fictícia que simula uma plataforma de streaming musical. Seu objetivo é oferecer ao usuário uma experiência interativa de descoberta de músicas, playlists temáticas e informações sobre artistas, além de apresentar eventos fictícios em um mapa interativo. A ideia central é representar um serviço completo de música online, com foco em design responsivo, organização de conteúdo e interatividade. 

● Qual problema ela tenta resolver ou qual informação ela quer transmitir, qual foi a sua principal ideia ou conceito para este projeto? 

A escolha do tema foi motivada pelo interesse pessoal no universo musical e pela oportunidade de aplicar, de forma prática, os conhecimentos desenvolvidos ao longo do curso técnico em Desenvolvimento de Sistemas. A proposta combina elementos visuais atrativos com recursos de JavaScript que simulam funcionalidades presentes em plataformas reais, como players, filtros e navegação entre seções.Além disso, o projeto buscou exercitar habilidades de layout com CSS, manipulação do DOM com JavaScript e estruturação semântica em HTML, sempre considerando a responsividade e usabilidade da interface. 

3\. Funcionalidades Implementadas  
Liste as principais funcionalidades que você desenvolveu, separando por tecnologia (HTML, CSS, JavaScript). Seja específico\! 

**HTML** 

● **Uso de tags semânticas**, como: 

○ `<header>`, `<main>`, `<nav>`, `<section>` e `<footer>`, que ajudam a organizar o conteúdo da página de forma mais clara e acessível. 

● **Criação de menus com listas**: 

○ Usei `<ul>` e `<li>` para montar os menus laterais e a lista de playlists, deixando o conteúdo organizado e fácil de navegar. 

● **Inserção de imagens com `alt`**: 

○ Coloquei imagens de álbuns e playlists com descrição alternativa (`alt`), que é importante para acessibilidade. 

● **Responsividade básica**: 

○ Adicionei a meta tag `<meta name="viewport">` para que o site se ajuste melhor em celulares e tablets. 

**CSS:** 

● Layout responsivo para telas mobile e desktop 

○ Usei @media queries para adaptar o número de colunas nas seções de álbuns e playlists. 

Por exemplo, a grade de álbuns muda de 2 colunas no mobile para até 6 colunas em telas maiores. 

● Uso de Flexbox e CSS Grid para organização dos elementos  
○ Utilizei Flexbox para estruturar a sidebar, a barra do player e o layout geral da aplicação. 

○ Usei CSS Grid para organizar os cards de álbuns e músicas de forma responsiva. ● Estilização de fontes, cores e espaçamentos 

○ Apliquei a fonte 'Inter', importada do Google Fonts. 

○ Escolhi uma paleta escura com tons de preto, vermelho escuro e cinza claro. 

○ Trabalhei com padding, margin e gap para espaçar os elementos de forma equilibrada. 

● Implementação de transições e animações CSS 

**○** Adicionei transições suaves em botões, links e cards (ex: mudança de cor no hover, botão de play que aparece com `opacity` e `transform`). 

○ O botão de play nos cards de álbuns se move levemente para cima com animação ao passar o mouse. 

● Scroll personalizado 

**○** Estilizei a barra de rolagem (`::-webkit-scrollbar`) para combinar com o tema escuro do site. 

**JavaScript:** 

● Manipulação do DOM para atualizar informações no player 

○ Ao clicar em um card de álbum ou playlist, o JavaScript atualiza dinamicamente o conteúdo do player fixo no rodapé, incluindo a imagem de capa, o nome da música e o artista.  
○ Essa funcionalidade foi implementada utilizando `textContent` e `src` para alterar os elementos do DOM com base nos atributos `data-` dos cards. 

● Controle do botão de Play/Pause 

○ O botão central do player alterna entre os ícones de "play" e "pause", simulando o controle da reprodução. 

○ Isso é feito alternando o texto do ícone com `textContent` e uma variável booleana chamada `isPlaying`. 

● Evento de clique nos cards e botões individuais 

○ Cada card de álbum responde ao clique para acionar o player. 

○ Os botões de play sobre os cards também funcionam separadamente, com `e.stopPropagation()` para evitar conflitos de clique. 

● Efeito dinâmico no cabeçalho ao rolar a página 

○ O cabeçalho (`main-header`) recebe ou remove classes dinamicamente quando o usuário rola a página, para aplicar efeitos visuais como fundo escuro, desfoque e sombra. 

○ Esse comportamento foi implementado com `scrollTop` e 

`classList.add()/remove()`. 

4\. Desafios e Soluções 

● Quais foram os principais desafios técnicos que você encontrou durante o desenvolvimento do projeto? (Ex: layout responsivo, uma lógica específica em JS, posicionamento de elementos).  
● Como você (ou sua dupla) abordou e resolveu esses desafios? Quais ferramentas, pesquisas ou discussões foram úteis? 

○ *Exemplo:* "Um desafio foi fazer o menu hambúrguer funcionar perfeitamente em mobile e esconder o menu principal. Inicialmente, tivemos dificuldade com o display: none e o display: block e a transição. Pesquisamos sobre classes no JavaScript e decidimos adicionar/remover uma classe CSS (.active) com classList.toggle() para controlar a visibilidade e aplicar transições suaves." 

5\. Aprendizados e Reflexões 

Neste projeto, nossa maior dificuldade foi trabalhar com o CSS, especialmente em definir o layout e decidir exatamente como organizar os elementos para que ficassem responsivos e visualmente agradáveis. Isso nos fez aprender bastante sobre Flexbox, Grid e media queries, além de como usar transições para melhorar a experiência. 

Também reforçamos o uso do JavaScript para manipular o DOM, como atualizar conteúdos e controlar estados (play/pause). A parte de eventos e organização do código também melhorou bastante, assim como a atenção aos detalhes. 

Se pudéssemos refazer, planejaremos melhor o design antes de começar a codificar e exploraremos funcionalidades extras, como integração com APIs e temas personalizados. 

6\. Contribuição Individual 

Ana Heloise Alves: 

● Desenvolveu toda a estrutura do projeto utilizando HTML, CSS e JavaScript. 

● Criou o layout responsivo com Flexbox e CSS Grid, estilizou as páginas e implementou as funcionalidades interativas, como filtros, simulação da reprodução musical, menu fixo com scroll suave e mapa interativo de shows. 

Maria Júlia M.S.:  
● Criou a logo do Disco Heaven. 

● Responsável por parte da estilização em CSS, especialmente nos detalhes visuais do banner e da logo. 

● Elaborou toda a documentação do projeto, incluindo relatórios de desafios, aprendizados, contribuições e organização geral. 

● Auxiliou na revisão final e nos testes de usabilidade para garantir a qualidade da entrega.