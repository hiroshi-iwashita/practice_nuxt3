export type TElementsButton = {
    type: "reset" | "submit" | "button" | undefined | string;
    text: string;
    color: string;
    isDisabled: boolean;
    isLoading: boolean;
};