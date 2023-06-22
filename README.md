# Desafio-DDSolutions
Desafio de Estágio em Backend com Node.js: Desenvolvimento de API RESTful de Gerenciamento de Tarefas


### Como rodar na minha máquina?

- Clone o projeto `git clone https://github.com/Jonathan-Fernandes-Costa/Desafio-DDSolutions.git`
- Rode `npm install`
- Configure seu arquivo .env de acordo com seu banco de dados
- Rode `npx prisma generate`
- Rode `npm run dev` 
- Pronto 🎉

### Estrutura do projeto

- `./src`: É a pasta onde estão os aquivos principais do projeto, incluindo o app.ts e os modulos.
- `./src/modules`: É onde está sendo feita a configurações das rotas, schemas, controllers e serviços das tarefas e dos usuários.
  - `./prisma`: É onde está localizado a configuração do schema do prisma e sua migração.
  - `./utils`: Possui o arquivo básico do prisma e o sistema de hash.
