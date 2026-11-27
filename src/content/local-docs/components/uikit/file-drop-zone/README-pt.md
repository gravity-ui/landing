`FileDropZone` é uma área para selecionar arquivos por arrastar e soltar ou com o diálogo de arquivos do sistema.

```tsx
import {FileDropZone, type DropZoneFileRejection} from '@gravity-ui/uikit';
```

### Uso Básico

```tsx
const accept = ['image/*'];
const handleUpdate = (acceptedItems: File[], rejectedItems: DropZoneFileRejection[]) => {
  // Faça algo com os arquivos aceitos e rejeitados.
};

<FileDropZone accept={accept} onUpdate={handleUpdate} />;
```

### Textos e Ícones Personalizados

```tsx
import {DatabaseFill, HeartCrack} from '@gravity-ui/icons';

const accept = ['image/*'];
const handleUpdateAccepted = (files: File[]) => {
  // Faça algo com os arquivos.
};

<FileDropZone
  accept={accept}
  onUpdateAccepted={handleUpdateAccepted}
  title="Lorem ipsum dolor sit amet"
  description="Duis consequat commodo eros sit"
  buttonText="Upload"
  icon={DatabaseFill}
  errorIcon={HeartCrack}
/>;
```

### Layout Personalizado

O padrão de Componente Composto permite renderizar um layout arbitrário. Todas as props são passadas apenas para o pai e compartilhadas via contexto React, enquanto os subcomponentes só podem receber um `className`.

```tsx
const accept = ['image/*'];
const handleUpdateAccepted = (files: File[]) => {
  // Faça algo com os arquivos.
};

<FileDropZone
  accept={accept}
  onUpdateAccepted={handleUpdateAccepted}
  title="Lorem ipsum dolor sit amet"
  description="Duis consequat commodo eros sit"
  buttonText="Upload"
  icon={DatabaseFill}
  errorIcon={HeartCrack}
>
  <div
    style={{
      flexGrow: '1',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      <FileDropZone.Icon />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <FileDropZone.Title />
        <FileDropZone.Description />
      </div>
    </div>
    <div style={{marginInlineStart: '16px'}}>
      <FileDropZone.Button />
    </div>
  </div>
</FileDropZone>;
```

### Tipos de Arquivo Aceitos

`accept` usa o formato do atributo `accept` do HTML. Um arquivo é aceito quando corresponde a pelo menos uma entrada:

- um tipo MIME exato, por exemplo, `image/png`;
- um curinga de nível superior, por exemplo, `image/*`;
- uma extensão de arquivo, por exemplo, `.csv` ou `.md`, correspondida sem distinção entre maiúsculas e minúsculas com o nome do arquivo.

As mesmas regras se aplicam a arquivos arrastados e soltos e a arquivos selecionados no diálogo.

Enquanto um arquivo está sendo arrastado sobre a zona, seu nome ainda não está disponível, portanto, as entradas de extensão não marcam o arrasto como inválido. A verificação final ocorre ao soltar: um arquivo com um tipo não correspondente é destacado durante o arrasto, mas ainda pode ser solto e passado para `onUpdateRejected`. Um arrasto sem arquivos, como texto selecionado ou um link, não pode ser solto na zona.

As entradas MIME são verificadas em relação a `File.type`, que é fornecido pelo sistema operacional. Ele pode estar vazio para extensões desconhecidas (`File.type === ''`) ou diferir do que você espera: por exemplo, o Chrome no Windows relata `.csv` como `application/vnd.ms-excel` quando o Excel está instalado e `.zip` como `application/x-zip-compressed`. O diálogo de arquivos filtra por extensões, portanto, ele pode mostrar tal arquivo, mas ele é rejeitado com `invalid-type` após a seleção. Para aceitar tais arquivos de forma confiável, liste a extensão ao lado do tipo MIME, por exemplo, `['text/csv', '.csv']` ou `['image/*', '.heic']`.

Entradas vazias e apenas com espaços em branco são ignoradas. Uma lista sem outras entradas aceita todos os tipos de arquivo, assim como o atributo `accept` do HTML.

## Propriedades
GRAVITY_TRANSLATION_BLOCK_0_END

| Nome             | Descrição                                                                                                                                                    |                                   Tipo                                    |                                                     Padrão                                                      |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| accept           | Tipos de arquivo permitidos: tipos MIME, curingas de nível superior e extensões de arquivo. Uma lista vazia aceita todos os tipos de arquivo. Veja [Tipos de arquivo aceitos](#tipos-de-arquivo-aceitos) |                                `string[]`                                 |                                                       `[]`                                                       |
| onUpdate         | Um callback invocado quando os arquivos são adicionados. Recebe arquivos aceitos e rejeitados em uma única chamada                                                                 | `(acceptedItems: File[], rejectedItems: DropZoneFileRejection[]) => void` |                                                                                                                  |
| onUpdateAccepted | Um callback invocado quando arquivos aceitos são adicionados                                                                                                               |                         `(items: File[]) => void`                         |                                                                                                                  |
| onUpdateRejected | Um callback invocado com arquivos rejeitados: arquivos soltos ou selecionados com um tipo que não corresponde a `accept` e arquivos além do primeiro em modo de arquivo único                                                                 |                `(items: DropZoneFileRejection[]) => void`                 |                                                                                                                  |
| title            | Um título exibido sob o ícone                                                                                                                               |                                 `string`                                  | `"Arraste o arquivo aqui ou selecione-o"` (`multiple=false`); `"Arraste os arquivos aqui ou selecione-os"` (`multiple=true`) |
| description      | Uma descrição exibida sob o título                                                                                                                        |                                 `string`                                  |                                                                                                                  |
| buttonText       | Um rótulo do botão de upload                                                                                                                                         |                                 `string`                                  |                     `"Selecionar um arquivo"` (`multiple=false`); `"Selecionar arquivos"` (`multiple=true`)                     |
| icon             | Um componente de ícone personalizado de `@gravity-ui/icons`. Quando `null` é passado, o ícone não é renderizado                                                                |                       `@gravity-ui/icons/IconData`                        |                                                                                                                  |
| errorIcon        | Um componente de ícone de erro personalizado de `@gravity-ui/icons`. Quando `null` é passado, o ícone de erro não é renderizado                                                    |                       `@gravity-ui/icons/IconData`                        |                                                                                                                  |
| className        | Um nome de classe do elemento raiz                                                                                                                                       |                                 `string`                                  |                                                                                                                  |
| multiple         | Um valor booleano que determina se vários arquivos podem ser enviados. Quando `false`, apenas um arquivo é aceito                                                |                                 `boolean`                                 |                                                     `false`                                                      |
| disabled         | Um valor booleano que determina se o envio de arquivos está desabilitado                                                                                             |                                 `boolean`                                 |                                                                                                                  |
| errorMessage     | Uma mensagem de erro. Se fornecida, os estilos de erro também são renderizados                                                                                                  |                                 `string`                                  |                                                                                                                  |
| validationState  | Estado de validação. Se definido como `"invalid"`, os estilos de erro são renderizados                                                                                             |                                `"invalid"`                                |                                                                                                                  |
| children         | Conteúdo de layout personalizado. Os subcomponentes compostos `FileDropZone.Icon`, `Title`, `Description` e `Button` só podem ser usados dentro de `FileDropZone`             |                             `React.ReactNode`                             |                                                                                                                  |

GRAVITY_TRANSLATION_BLOCK_1_END
GRAVITY_TRANSLATION_BLOCK_2_END
GRAVITY_TRANSLATION_BLOCK_3_END
GRAVITY_TRANSLATION_BLOCK_4_END
GRAVITY_TRANSLATION_BLOCK_5_END
GRAVITY_TRANSLATION_BLOCK_6_END
GRAVITY_TRANSLATION_BLOCK_7_END
GRAVITY_TRANSLATION_BLOCK_8_END
GRAVITY_TRANSLATION_BLOCK_9_END
GRAVITY_TRANSLATION_BLOCK_10_END
GRAVITY_TRANSLATION_BLOCK_11_END
GRAVITY_TRANSLATION_BLOCK_12_END
GRAVITY_TRANSLATION_BLOCK_13_END
GRAVITY_TRANSLATION_BLOCK_14_END