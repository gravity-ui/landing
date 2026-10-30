## Descrição curta

O componente `DFDialog` tem como objetivo facilitar a criação de formulários, utilizando `react-final-form` internamente.
Ele suporta vários tipos de campos pré-definidos, mas o usuário pode estendê-lo registrando novos tipos através de `registerDialogControl`.

### Controles

- [Controles base](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-00-base-controls)
  - `plain` - texto estático
  - `text` - texto editável
  - `multi-text` - array de strings definido pelo usuário
  - `checkbox` - caixa de seleção
  - `tumbler` - interruptor
  - `radio` - botão de rádio
  - `editable-list` - lista de strings removíveis
  - `multi-editable-list` - lista múltipla de strings removíveis
  - `text area` - área de texto
  - `select` - seleção
  - `block` - permite adicionar ReactNode
- [Registro de controle customizado](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### Funcionalidades

- Visualização in-place e modal
- [Um aba](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) e [vários formulários em abas](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
- [Abas verticais/horizontais](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab)
- [Campos e abas ocultos](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-04-visibility-condition)
- [Campos vinculados por valores](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-05-extras-and-linked-fields)
- [Validação em nível de campo](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-06-field-validators)
- [Validação em nível de formulário](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-07-form-validation)
- [Abas virtualizadas](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-virtualized-tabs)
- [Abas clonáveis](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-08-cloneable-tabs-)
- [Campos agrupados](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-03-sections)

## Instalação

```bash
$ npm install @gravity-ui/dialog-fields
# Use a versão requerida de react/react-dom caso ainda não as tenha instalado
$ npm install @gravity-ui/dialog-fields react@18 react-dom@18
```

Dependendo do seu gerenciador de pacotes, pode ser necessário instalar `peerDependencies` manualmente.

## Uso

```ts
import {DFDialog, FormApi} from '@gravity-ui/dialog-fields';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
    <DFDialog<FormValues>
      visible={true}
      headerProps={{
        title: 'Meu formulário',
      }}
      onAdd={(form) => {
        console.log(form.getState().values);
        return Promise.resolve();
      }}
      fields={[
        {
          name: 'firstName',
          type: 'text',
          caption: 'Primeiro nome',
          tooltip: 'Descrição para o campo primeiro nome',
        },
        {
          name: 'lastName',
          type: 'text',
          caption: 'Sobrenome',
          tooltip: 'Descrição para o campo sobrenome',
        },
      ]}
    />
  );
}
```

### Visibilidade condicional

Campos e abas suportam `visibilityCondition`. Com uma string `when`, `isActive`
recebe o valor desse campo:

```ts
visibilityCondition: {
  when: 'register',
  isActive: (value) => Boolean(value),
}
```

Use um array de nomes de campos para depender de múltiplos valores. `isActive` recebe os
valores como argumentos separados na mesma ordem de `when`:

```ts
visibilityCondition: {
  when: ['multiConsumer', 'register'],
  isActive: (multiConsumer, register) => Boolean(multiConsumer && register),
}
```

Nomes são caminhos a partir da raiz do formulário, incluindo prefixos de aba como
`general.register`. A visibilidade é atualizada quando qualquer campo referenciado muda.
Um campo oculto por sua condição é desmontado, não apenas visualmente escondido.

Veja mais exemplos no [storybook](https://preview.yandexcloud.dev/dialog-fields).