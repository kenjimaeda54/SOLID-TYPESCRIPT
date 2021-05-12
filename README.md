# SOLID-TYPESCRIPT
principios SOLID
- Exemplos de refaturação usando os princpios SOLID
- Primeiramente inicei uma classe de carrinhos de compras,sem nenhuma refaturação. Codigo legado.
# Conceito SOLID com type script
- Single Responsibility Principle
- Open/closed principle
- Liskov subtitution principle
- Interface segregration principle
- Dependency inversion principle


### Single Responsibility Principle( SRP)
-  Princio da responsabilidade unica, para aplicar este principio refaturei as classes com objetivo de cada uma possuir apenas uma responsabilidade.
- Conceito de responsabilidade e bastante amplo,porém algumas coisas são explicitas, exemplo: se sua classe precisa ser alterada cada chamada,
posivelmente possui varias responsabilidades dentro dessa classe,então seria interesante refaturar
- Validações normalmente são suspeitos a possuirem classes independentes,com objetivo apenas de validação
- Coesão é algo muito similiar a este principio. Segundo livros Coesão se cabe quando uma classe tem apenas metodos diretamente relacionado a ela 
Exemplo se  classe ou função tem objetivo de  adicionar compras em um carrinho,tudo ligado a esta compra haveria coesão esta em apenas uma classe


### Open/Closed Principle
- Principio do aberto e fechado.
- Suas entidades(metodos,funções,objetos) devem esta aberto para extensões, mas fechadas para modificações.
- Apliquei metodo de caso de uso. Gerente pediu para realizar uptade para o black friday,acresentar descontos relativos a semana,melhor maneira de realizar
esta mudança e aplicar o conceito open/closed principle.
- Criei uma classe responsável apenas para o desconto,praticando assim OCP,pois toda alteração do progama serão apenas extensão  do programa principal e
estarão fechadas para modificações, de quebra pratiquei o SRP


### Liskov Substitution Principle LSP
- Principio da substittuição dde Liskov. 
- Significado desse principio basicamente é que as classes devem possuir relação unica com suas intidades.
- Maneira de idenificar se esta de acordo com o principio, são verificações de tipagem,se ao decorrer de um classe precisa verificar o tipo que esta retornando ou recebendo, posivelmente não esta seguindo o principio da substiuição de Liskov.  
- Principio esta ligado diretamente  comportameno dos metodos,classes e objetos. Exemplo:vegetarino é esperado que  coma vegetais é não inverso 

### Interface segregation principle(Principio da segreação de interface)
- Os clientes não devem ser forçados a depender types,interface ou menbros abstratos que não utilizam
- Principio nos força a criar apenas inerfaces curtas e reutilizaveis,types,interface,membros abstratos... que possuem muitos atributos devem ser refaturados 

### Dependency Inverse Principle
- Principio da inversão dependencia. 
- Modulos de alto nivel não devem depender de modulos de baixo nivel.Ambos devem dependem de abstrações.
- Dependa de abstrações não de implementações
- Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
- Classes de baixo nivel são classes que executam tarefas (os detalhes)
- Classes de alto nivel são classes que gerenciam as classes de baixo nivel
- As relações entre as classes e determinante para sabermos o tipo dessa classe.
- Normalmente intidade de alo nivel são as que possuem mais abstração,exemplo as interfaces,apenas gerenciam algo,não executa nada
- Classes de mais baixo nivel seriam aquelas que não possuem absração ,apenas executam algo
 

