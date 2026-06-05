export const transitions = {
    fast: '100ms ease',
    base: '150ms ease',
    slow: '250ms ease',
} as const;

export type Transitions = typeof transitions;
export type TransitionToken = keyof Transitions;
