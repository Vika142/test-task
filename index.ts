import { AptosClient } from "aptos";  

const LAVA_GATEWAY_RPC_URL = "https://g.w.lavanet.xyz:443/gateway/apt1/rest/53a3bff5287c4d4653447bf052fcc28c";

const client = new AptosClient(LAVA_GATEWAY_RPC_URL,undefined,true);

const TEST_ACCOUNT_ADDRESS = "0x81b2b9b978d6226f633eefe7b6ddcb099034264c21965947c7dbb1946c147cfd";  

let validRequests = 0;
let errors = 0;

async function testGetAccountResources() {
    for (let i = 0; i < 100; i++) {
        try {
            const resources = await client.getAccountResources(TEST_ACCOUNT_ADDRESS,{ledgerVersion:279444635}).then(console.log);
            validRequests++;
        } catch (error) {
            console.log(error)
            errors++;
        }
    }

    console.log(`Valid requests: ${validRequests}`);
    console.log(`Errors: ${errors}`);
}

testGetAccountResources();
