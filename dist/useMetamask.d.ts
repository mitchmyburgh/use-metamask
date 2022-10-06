export default useMetamask;
declare function useMetamask(): {
    connect: (Web3Interface: any, settings?: {}) => Promise<void>;
    getAccounts: ({ requestPermission }?: {
        requestPermission: boolean;
    }) => Promise<any>;
    getChain: () => Promise<{
        id: any;
        name: string;
    }>;
    metaState: {
        isAvailable: boolean;
        account: any[];
        chain: {
            id: any;
            name: string;
        };
        isConnected: boolean;
        web3: any;
    };
};
