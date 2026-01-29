## Descrição curta

O componente `DFDialog` tem como objetivo facilitar a criação de formulários, utilizando `react-final-form` internamente.
Ele suporta diversos tipos de campos pré-definidos, mas o usuário pode estendê-lo registrando novos tipos através da função `registerDialogControl`.

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
  - `block` - permite adicionar `ReactNode`
- [Registro de controle customizado](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

### Funcionalidades

- Visualização in-place e modal
- [Formulário em uma aba](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-01-one-tab) e [formulários em várias abas](https://preview.yandexcloud.dev/dialog-fields/?path=/story/demo-02-several-tab--horizontal-tabs)
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

Dependendo do seu gerenciador de pacotes, pode ser necessário instalar as `peerDependencies` manualmente.

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
          caption: 'Nome',
          tooltip: 'Descrição para o campo nome',
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

Veja mais exemplos no [storybook](https://preview.yandexcloud.dev/dialog-fields).