export interface ThemeImportProps {
    isOpen: boolean;
    onClose: () => void;
    /**
     * Fired only when the pasted theme actually parsed and got applied — the
     * page uses it to drop the gallery/preset selection that no longer
     * reflects what is on screen.
     */
    onImportSuccess?: () => void;
}
