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
