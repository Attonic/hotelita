# 🏨 Hotelita - Plataforma de Hotéis da Cidade
**Acesse aqui** - [Hotelita](https://hotelita.vercel.app/)

O **Hotelita** é um projeto acadêmico desenvolvido por estudantes da **Universidade Estadual do Maranhão (UEMA)**, com o objetivo de facilitar a busca por hotéis e pousadas na cidade de **Itapecuru Mirim**. A plataforma é composta por um **frontend** responsivo e um **backend** robusto, que juntos oferecem uma experiência completa para usuários que desejam encontrar hospedagens de forma prática e intuitiva.

---

## 📚 Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints da API](#endpoints-da-api)
- [Contribuidores](#contribuidores)
- [Licença](#licença)

---

## 🌟 Visão Geral

O **Hotelita** foi criado para conectar viajantes e moradores locais às melhores opções de hospedagem em Itapecuru Mirim. A plataforma permite visualizar informações detalhadas sobre hotéis, como localização, tipos de quartos, preços, serviços oferecidos e contatos. Além disso, os usuários podem acessar uma lista dos hotéis mais visitados e explorar páginas individuais de cada hotel.

---

## ✨ Funcionalidades

### Frontend
- Página inicial com listagem de hotéis.
- Página com os hotéis mais visitados.
- Páginas individuais para cada hotel, com informações detalhadas.
- Formulário de contato para adicionar novos hotéis à plataforma.
- Design responsivo e interativo.

### Backend
- API RESTful para gerenciar os dados dos hotéis.
- Incremento automático de visitas ao acessar detalhes de um hotel.
- Listagem dos hotéis mais visitados.
- Banco de dados populado com dados iniciais para testes.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica das páginas.
- **CSS3**: Estilos customizados e responsivos.
- **JavaScript**: Interatividade e manipulação dinâmica de dados.
- **Google Fonts** e **Font Awesome**: Para tipografia e ícones.
- **JavaScript**: Interatividade e manipulação dinâmica de dados.
- **Vercel**: Plataforma para hospedagem gratuita. [Vercel](https://vercel.com/)

### Backend
- **Java 21**: Linguagem principal.
- **Spring Boot 3.4.4**: Framework para desenvolvimento rápido de aplicações.
- **Spring Data JPA**: Gerenciamento de banco de dados.
- **H2 Database**: Banco de dados em memória para desenvolvimento.
- **PostgreSQL**: Banco de dados para produção.
- **Maven**: Gerenciamento de dependências e build.
- **Render**: Plataforma para deploy de api e banco de dados. [Render](https://render.com/)
---

### 📂 Estrutura do Projeto

```
frontend/
├── assets/
│   ├── css/          # Estilos CSS
│   ├── js/           # Scripts JavaScript
│   ├── components/   # Componentes reutilizáveis (header, footer)
│   └── img/          # Imagens e ícones
├── pages/            # Páginas HTML
└──         # Página inicial
backend/
├── src/
│   ├── main/
│   │   ├── java/com/hotelita/hoteis/  # Código-fonte Java
│   │   ├── resources/                # Configurações e arquivos de recursos
│   └── test/                         # Testes automatizados
├── target/                           # Arquivos gerados pelo Maven
├──                            # Configuração do Maven
└── Dockerfile                        # Configuração para container Docker
```
---

### 🔁 Endpoints da API
- 🔎 Listar todos os hotéis  
```GET /hoteis/{id}``` 

- 🧾 Obter hotel por ID (e registrar visita)  
```GET /hoteis``` 

-  Hotéis mais visitados  
```GET /hoteis/populares```

- ➕ Incrementar visitas manualmente  
```PUT /hoteis/{id}/incrementar-visitas```



### Pré-requisitos
- **Java 21+**
- **Maven 3.8+**
- **Node.js** (opcional, para extensões de desenvolvimento frontend)
- **Docker** (opcional, para rodar o banco de dados PostgreSQL)

### 👨‍💻 Contribuidores



## 👩‍💻 **Equipe de Desenvolvimento**
- **Antonio Cleison** - [LinkedIn](https://www.linkedin.com/in/antoniocleison/)
- **Afonso Gabriel** - [LinkedIn](https://www.linkedin.com/in/afonso-gabriel-217ba430b/)
- **Guilherme Silva** - [LinkedIn](https://www.linkedin.com/in/guilherme-silva-402b35208/)
- **João Vinicius** - [LinkedIn](https://www.linkedin.com/in/joaovinicius-/)
- **Alessandro Lopes** - [LinkedIn](https://www.linkedin.com/in/alessandro-pereira-lopes-1b5602339/)

---

## 🎓 **Agradecimentos**
Agradecemos à Universidade Estadual do Maranhão (UEMA) por proporcionar a oportunidade de desenvolver este projeto como parte de nossa formação acadêmica.
  
