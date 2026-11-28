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
- [Registro de controle personalizado](https://preview.yandexcloud.dev/dialog-fields/?path=/story/tutorials-custom-control-registration)

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
```

Dependendo do seu gerenciador de pacotes, pode ser necessário instalar manualmente as `peerDependencies`.

As abas verticais utilizam os pontos de entrada de arrastar e soltar e virtualização do UIKit,
e os controles Select virtualizam listas de 50 ou mais opções.
Envolva sua aplicação no `Provider` do UIKit e importe `@gravity-ui/uikit/styles/styles.css`.

## Migrando para UIKit 8

Substitua o `ThemeProvider` e o `MobileProvider` raiz da aplicação por `Provider`.
Mova as props deles para `Provider`, exceto pela prop removida `__experimentalMobileModals`:

```diff
-import {ThemeProvider, MobileProvider} from '@gravity-ui/uikit';
+import {Provider} from '@gravity-ui/uikit';

-<ThemeProvider theme="light">
-  <MobileProvider>
-    <App />
-  </MobileProvider>
-</ThemeProvider>
+<Provider theme="light">
+  <App />
+</Provider>
```

Se sua aplicação já utiliza `Provider`, nenhum wrapper adicional em torno de `DFDialog`
é necessário. `DFDialog` mantém suas props `visible`, `size` e `onClose`; as alterações do UIKit
em `Dialog.open`, `maxWidth` e `onOpenChange` são tratadas internamente pela biblioteca.

Revise estilos personalizados e snapshots visuais:

- O espaçamento do cabeçalho, corpo e rodapé do diálogo mudou, afetando formulários modais e inline.
- Os botões do rodapé para desktop agora se ajustam ao seu conteúdo em vez de ter uma largura mínima de 128px.
  Para restaurar a largura anterior, passe `{width: 'max', className: 'form-action'}` através
  de `footerProps.propsButtonApply` e `footerProps.propsButtonCancel`, e defina
  `.form-action { min-width: 128px; }` em sua folha de estilos.
- Os controles de checkbox de tamanho `l` agora usam um rótulo de 13px em vez de 15px e um indicador de 18px
  em vez de 17px. As cores do tema também mudaram ligeiramente.
- As abas verticais usam a nova `List` sem componentes legados. Seletores personalizados que visam
  a marcação antiga `.g-list__item` devem ser revisados. O callback `onOrderChanged({oldIndex, newIndex})`
  é preservado.

Controles personalizados e props do UIKit passadas através de definições de campo devem seguir o
[guia de migração do UIKit](https://github.com/gravity-ui/uikit/blob/main/docs/migration-to-v8.md).
Em particular, `Select` não aceita mais `virtualizationThreshold`; o controle `select` integrado
usa `ListVirtualizer` com um limite de 50 opções.

## Uso

Este exemplo inclui o provider da aplicação. Se sua aplicação já possui um `Provider` raiz,
omita o wrapper mostrado aqui.

```tsx
import {DFDialog} from '@gravity-ui/dialog-fields';
import {Provider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
}

function MyForm() {
  return (
    <Provider theme="light">
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
    </Provider>
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
Um campo oculto por sua condição é desmontado, não apenas visualmente oculto.

Veja mais exemplos no [storybook](https://preview.yandexcloud.dev/dialog-fields).