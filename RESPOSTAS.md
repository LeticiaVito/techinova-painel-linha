# Respostas do LAB 01

Nome: Leticia Vito de Oliveira
Matricula: 26174738
Dupla (M2 em diante):Aimée Juliana - 26174872

---

## M2 - Quem quebrou o painel

**Hash curto do commit que introduziu o erro:**
01ef93b

**Autor:**
Tarcisio Melo

**Data:**
15/06/2026 22:38

**Linha alterada (antes e depois):**

```
antes: return (leitura - 32) * 5 / 9;
depois: return leitura * 9 / 5 + 32;
```

---

## M3 - O segredo vazado

**O que voce esperava ver no `git status` e o que apareceu:**
Eu esperava que o arquivo `config/credenciais.env` deixasse de ser rastreado depois de adicioná-lo ao `.gitignore`, mas apareceu apenas o `.gitignore` como arquivo novo. Isso aconteceu porque o arquivo de credenciais já estava sendo rastreado pelo Git.

**Depois do push, alguem que clonar o repositorio ainda consegue ler a chave?
Responda em duas linhas, explicando o motivo:**
Sim. Mesmo removendo o arquivo do rastreamento atual, a chave continua registrada nos commits antigos do histórico.
Em uma situação real, seria necessário trocar a credencial vazada e, se necessário, limpar o histórico do repositório.

---

## M4 - Colisao

**O que significavam os marcadores que apareceram dentro do arquivo:**

* `<<<<<<<` :
* `=======` :
* `>>>>>>>` :

**Qual pedaco veio de quem, e qual titulo voces decidiram manter:**

---

## Casa - Incidente na linha 3

**Hash do commit que quebrou o painel:**

**Hash do commit de revert:**

**Por que `git revert` e nao `git reset` neste caso:**
