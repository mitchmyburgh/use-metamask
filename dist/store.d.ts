export namespace typeStateMap {
    const SET_ACCOUNT: string;
    const SET_CHAIN: string;
    const SET_CONNECTED: string;
    const SET_WEB3: string;
}
export const MetaStateContext: import("react").Context<{
    account: any[];
    chain: {
        id: any;
        name: string;
    };
    isConnected: boolean;
    web3: any;
}>;
export const MetaDispatchContext: import("react").Context<any>;
export function MetamaskStateProvider({ children }: {
    children: any;
}): JSX.Element;
