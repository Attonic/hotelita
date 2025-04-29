# 🏨 API - Hotéis da Cidade

Este backend foi desenvolvido como parte de uma extensão acadêmica da Universidade Estadual do Maranhão (UEMA), integrando-se ao projeto *Hotéis da Cidade*. A API oferece funcionalidades essenciais para gerenciar os dados dos hotéis da cidade de **Itapecuru Mirim**, permitindo que o frontend acesse, exiba e atualize informações de hospedagem de forma dinâmica.

---

## 📚 Sumário

- [Objetivo](#objetivo)
- [Tecnologias](#tecnologias)
- [Como executar](#como-executar)
- [Endpoints](#endpoints)
- [Modelo de Dados](#modelo-de-dados)
- [Contribuidores](#contribuidores)
- [Licença](#licenca)

---

## 🎯 Objetivo

Facilitar o acesso a informações sobre hotéis e pousadas da cidade de Itapecuru Mirim, fornecendo uma API REST que possa ser consumida por um frontend responsivo. A plataforma é voltada para moradores e visitantes da cidade que buscam opções de hospedagem com facilidade e agilidade.

---

## 🚀 Tecnologias

- Java 21
- Spring Boot 3.4.4
- Spring Web
- Spring Data JPA
- Banco de dados H2 (desenvolvimento) e PostgreSQL (produção)
- Maven

---

## ⚙️ Como executar

### Pré-requisitos

- Java 21+
- Maven 3.8+
- (Opcional) Docker, se desejar utilizar PostgreSQL localmente

### Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/hoteis-api.git

cd hoteis-api

# Compile o projeto
mvn clean install

# Execute a aplicação
mvn spring-boot:run
```

A aplicação estará disponível em:  
📍 `http://localhost:8080`

---

## 🔁 Endpoints

### 🔎 Listar todos os hotéis
```http
GET /hoteis
```

### 🧾 Obter hotel por ID (e registrar visita)
```http
GET /hoteis/{id}
```

### 🔝 Hotéis mais visitados
```http
GET /hoteis/populares
```

### ➕ Incrementar visitas manualmente
```http
PUT /hoteis/{id}/incrementar-visitas
```

---

## 🧾 Modelo de Dados

### Entidade `Hotel`

| Campo      | Tipo    | Descrição                          |
|------------|---------|------------------------------------|
| `id`       | Long    | Identificador único                |
| `nome`     | String  | Nome do hotel                      |
| `imagem`   | String  | URL da imagem do hotel             |
| `descricao`| String  | Descrição do hotel                 |
| `telefone` | String  | Telefone de contato                |
| `visitas`  | Integer | Número de vezes que foi visualizado |

---

## 👨‍💻 Contribuidores

Este projeto foi desenvolvido por estudantes da UEMA:

- Antonio Cleison  
- Afonso Gabriel  
- Guilherme Silva  
- João Vinicius  
- Alessandro Lopes  

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

## 🎓 Agradecimentos

Agradecemos à Universidade Estadual do Maranhão (UEMA) por proporcionar a oportunidade de desenvolver este projeto como parte de nossa formação acadêmica.
