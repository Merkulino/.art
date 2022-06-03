# Art: Software de apoio a artistas independentes


Esse projeto foi o trabalho final do meu curso de graduação em Análise e Desenvolvimento de Sistemas. 
Iniciei essa pesquisa e desenvolvimento no começo do semestre (fev/2022 - jul/2022) com a colaboração do [Filliphi Perez](https://www.linkedin.com/in/filliphi-perez-a311511a5).<br>

Nosso projeto tem como intuito ajudar no impulsionamento de artistas independentes criando um networking entre os mesmos e a sociedade em geral. 

## 🤔 Sobre o projeto

O **"Art"** é um sistema para impulsionar e conectar artistas de uma região específica, dessa forma, todos da mesma localidade terão conhecimento 
dos movimentos artísticos da região. Os usuários em geral, poderão divulgar seu trabalho na plataforma, promover e acompanhar eventos culturais
da região e conectar diretamente com o artista via chat. Além disso, a plataforma terá uma área de ecommerce, em que os artistas poderão anunciar
e vender o seu trabalho. 

Trabalharemos com três tipos de públicos alvos:

O **artista**, que poderá utilizar esta rede para criar um portfólio artístico, anunciar um produto a venda, criar eventos artísticos e divulgar o seu
trabalho

Uma **empresa**: que poderá procurar um artista da região para contrato de trabalho

E por fim, o **usuário comum**: que poderá seguir e acompanhar os movimentos artísticos locais e os artistas de sua preferência.

Para criar esse networking dentro de nosso sistema, utilizaremos um sistema de feed filtrado. Além de conectar artistas em uma mesma região
via localização do usuário, iremos construir um feed que filtra categorias de conteúdos, seguidores e regiões, formando um feed customizado que poderá
ser modificado conforme a preferência do usuário.

## 💻 Desenvolvimento

De início, decidimos desenvolver um sistema web, tanto pela facilidade de acesso quanto para conciliar o estudo de desenvolvimento web 
do semestre do curso. <br>

As tecnologias utilizadas foram ferramentas básicas de desenvolvimento web como:

 - JavaScript
 - HTML
 - CSS
 
O desenvolvimento começou pela estrutura de elementos, utilizando HTML e com um auxílio do Bootstrap. Para estilização foi utilizado CSS. O site foi
passando por diversas modificações até chegar em uma estrutura e cores mais favoráveis. Com JavaScript, começamos a colocar ações e simular uma rede social,
primeiro ações simples, como um clique de botão e verificações básicas, depois foi feito um sistema de publicação e autenticação de usuário utilizando o 
LocalStorage do JavaScript.

Basicamente essas são as funcionalidades que o sistema tem até agora: Sistema básico de cadastro e login de usuario; Publicação de um conteúdo (Foto ou texto)
atrelado a uma conta expecífica.

## 👨‍💻 Próximos passos

Como visto anteriormente, nosso sistema ainda não tem nenhuma conexão de nuvem, como banco de dados e autenticação de usuário, para isso, iremos
utilizar a plataforma **Firebase**, nela será feita a conexão com a **Google Cloud**, onde iremos implementar a **autenticação** e provavelmente o 
**banco de dados**, tambem fornecida pela plataforma para o armazenamento de dados em nuvem. Dessa forma, poderemos seguir com a **interação de usuários** 
dentro de nosso site, como: chat, curtidas, seguidores, compartilhamento, entre outras funcionalidades. 
Um dos desafios do desenvolvimento de nosso site é a **identidade visual**, uma rede social (principalmente da área artística) precisa ter um bom visual,
bem estruturado e que traga uma boa experiência ao usuario, com isso, pretendemos trabalhar melhor a parte de UI e UX.

Estas são nossas principais ideias de trabalhos futuros e ainda falta um longo caminho de desenvolvimento, que eu particularmente estou bem ansioso para
aprender e desenvolver.

E caso queira acessar nosso site e acompanhar o desenvolvimento, [clique aqui](https://merkulino.github.io/)

## 📚 Arquivos de pesquisa

Para mais informações sobre a nossa pesquisa, acesse nossos arquivos de estudo:

Drive de nosso [trabalho](https://drive.google.com/drive/folders/1HJIAaqCoQRn8bCRR33FmuTrg6kVR76S5?usp=sharing)

## 🤝 Autores

**Melqui Brito de Jesus**

Linkedin: https://www.linkedin.com/in/melqui-brito-871676188/

Telegram: https://t.me/Merkulino

Email: Merkulino11@gmail.com
<br>

**Filliphi Perez**

Linkedin: https://www.linkedin.com/in/filliphi-perez-a311511a5

Email: pfilliphi@gmail.com 
