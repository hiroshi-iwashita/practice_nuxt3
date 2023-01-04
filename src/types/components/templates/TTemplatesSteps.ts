import { TElementsStep } from "~~/types/components/elements/step/TElementsStep";

export type TTemplatesSteps = {
    items: Array<TElementsStep>
    currentStep: TElementsStep['currentStep']
};
