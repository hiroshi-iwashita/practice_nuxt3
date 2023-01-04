export type TElementsFormSelect = {
    value: string;
    name: string;
    options: Array<TOptions>
    placeholder: string;
    isRequired: boolean;
    isDisabled: boolean;
    labelTop: string;
    labelBottom: string;
    width: string;
    maxWidth: string;
};

// type of options
type TOptions = {
    value: string;
    text: string;
}
