import { getBuiltGraphSDK } from "./.graphclient"

const { GetTransfers } = getBuiltGraphSDK()

async function main(): Promise<void> {
    try {
        const response = await GetTransfers();
        console.log(response.transfers);
    } catch (error) {
        console.error(error);
    }
}

main().catch((err) => {
    console.error({ err });
    process.exit(1);
});