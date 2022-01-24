Services -
Armazena uma regra de negócio da aplicação

Regra de negócio = pode ser identificada como algo muito especifico da aplicação que com o tempo de se alterar conforme a aplicação cresce. Mais regras, mais lógicas, mais funções.
Ex: Fazer verificação por data... Retornar um erro caso não.

Somente uma regra de negócio ou funcionalidade para cada service

Service não tem acesso direto aos dados da requisição ou da resposta

Dependency Inversion-  SOLID
Para que os services utilizem o mesmo banco de dados de array
Ao invés de criar uma nova instância/ ou criar dentro do service se transforma em um parametro da classe (ex parametro de constructor)