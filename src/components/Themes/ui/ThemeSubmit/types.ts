export interface ThemeSubmitProps {
    isOpen: boolean;
    onClose: () => void;
    onDone: (pullRequestUrl: string) => void;
    onCreateTheme: () => void;
}
