// import * as React from 'react'
// import { usePrepareContractWrite, useContractWrite, useWaitForTransaction,} from 'wagmi'
import * as React from 'react'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction,} from 'wagmi'
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import Web3 from 'web3';
var web3 = new Web3();


const PK = "13c090b69bedb4587ae87f0ae37596fd51fcb20f40036f0596313e49352ed9e3"; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async() => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `Mint Alert !:`,
        body: `You have Successfully Minted your gitNFT`
      },
      payload: {
        title: `Mint Alert!`,
        body: `You have Successfully Minted your gitNFT`,
        cta: '',
        img: ''
      },
    //   recipients: 'eip155:5:0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1', // recipient address
      recipients: web3.eth.getAccounts(), // recipient address
      channel: 'eip155:5:0xEe9e22b3C8c22C0E62BD2fa5a1c78992D00be672', // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}

 
// export function MintNFT() {
//     const { config } = usePrepareContractWrite({
//         address: '0x0b96d62349def159655ca16af82f00dde3737d4b',
//         abi:[
//             {
//                 "inputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "constructor"
//             },
//             {
//                 "anonymous": false,
//                 "inputs": [
//                     {
//                         "indexed": true,
//                         "internalType": "address",
//                         "name": "owner",
//                         "type": "address"
//                     },
//                     {
//                         "indexed": true,
//                         "internalType": "address",
//                         "name": "approved",
//                         "type": "address"
//                     },
//                     {
//                         "indexed": true,
//                         "internalType": "uint256",
//                         "name": "tokenId",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "Approval",
//                 "type": "event"
//             },
//             {
//                 "anonymous": false,
//                 "inputs": [
//                     {
//                         "indexed": true,
//                         "internalType": "address",
//                         "name": "owner",
//                         "type": "address"
//                     },
//                     {
//                         "indexed": true,
//                         "internalType": "address",
//                         "name": "operator",
//                         "type": "address"
//                     },
//                     {
//                         "indexed": false,
//                         "internalType": "bool",
//                         "name": "approved",
//                         "type": "bool"
//                     }
//                 ],
//                 "name": "ApprovalForAll",
//                 "type": "event"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "address",
//                         "name": "to",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "tokenId",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "approve",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "anonymous": false,
//                 "inputs": [
//                     {
//                         "indexed": true,
//                         "internalType": "address",
//                         "name": "previousOwner",
//                         "type": "address"
//                     },
//                     {
//                         "indexed": true,
//                         "internalType": "address",
//                         "name": "newOwner",
//                         "type": "address"
//                     }
//                 ],
//                 "name": "OwnershipTransferred",
//                 "type": "event"
//             },
//             {
//                 "anonymous": false,
//                 "inputs": [
//                     {
//                         "indexed": true,
//                         "internalType": "address",
//                         "name": "from",
//                         "type": "address"
//                     },
//                     {
//                         "indexed": true,
//                         "internalType": "address",
//                         "name": "to",
//                         "type": "address"
//                     },
//                     {
//                         "indexed": true,
//                         "internalType": "uint256",
//                         "name": "tokenId",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "Transfer",
//                 "type": "event"
//             },
//             {
//                 "anonymous": false,
//                 "inputs": [
//                     {
//                         "indexed": false,
//                         "internalType": "uint256",
//                         "name": "tokenId",
//                         "type": "uint256"
//                     },
//                     {
//                         "indexed": false,
//                         "internalType": "string",
//                         "name": "imageURL",
//                         "type": "string"
//                     },
//                     {
//                         "indexed": false,
//                         "internalType": "address payable",
//                         "name": "from",
//                         "type": "address"
//                     }
//                 ],
//                 "name": "gitnftcreated",
//                 "type": "event"
//             },
//             {
//                 "inputs": [],
//                 "name": "renounceOwnership",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "address",
//                         "name": "to",
//                         "type": "address"
//                     }
//                 ],
//                 "name": "safeMint",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "address",
//                         "name": "from",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "address",
//                         "name": "to",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "tokenId",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "safeTransferFrom",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "address",
//                         "name": "from",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "address",
//                         "name": "to",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "tokenId",
//                         "type": "uint256"
//                     },
//                     {
//                         "internalType": "bytes",
//                         "name": "data",
//                         "type": "bytes"
//                     }
//                 ],
//                 "name": "safeTransferFrom",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "address",
//                         "name": "operator",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "bool",
//                         "name": "approved",
//                         "type": "bool"
//                     }
//                 ],
//                 "name": "setApprovalForAll",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "address",
//                         "name": "from",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "address",
//                         "name": "to",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "tokenId",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "transferFrom",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "address",
//                         "name": "newOwner",
//                         "type": "address"
//                     }
//                 ],
//                 "name": "transferOwnership",
//                 "outputs": [],
//                 "stateMutability": "nonpayable",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "address",
//                         "name": "owner",
//                         "type": "address"
//                     }
//                 ],
//                 "name": "balanceOf",
//                 "outputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "tokenId",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "getApproved",
//                 "outputs": [
//                     {
//                         "internalType": "address",
//                         "name": "",
//                         "type": "address"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "address",
//                         "name": "owner",
//                         "type": "address"
//                     },
//                     {
//                         "internalType": "address",
//                         "name": "operator",
//                         "type": "address"
//                     }
//                 ],
//                 "name": "isApprovedForAll",
//                 "outputs": [
//                     {
//                         "internalType": "bool",
//                         "name": "",
//                         "type": "bool"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "name": "name",
//                 "outputs": [
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "name": "owner",
//                 "outputs": [
//                     {
//                         "internalType": "address",
//                         "name": "",
//                         "type": "address"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "tokenId",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "ownerOf",
//                 "outputs": [
//                     {
//                         "internalType": "address",
//                         "name": "",
//                         "type": "address"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "bytes4",
//                         "name": "interfaceId",
//                         "type": "bytes4"
//                     }
//                 ],
//                 "name": "supportsInterface",
//                 "outputs": [
//                     {
//                         "internalType": "bool",
//                         "name": "",
//                         "type": "bool"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [],
//                 "name": "symbol",
//                 "outputs": [
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             },
//             {
//                 "inputs": [
//                     {
//                         "internalType": "uint256",
//                         "name": "tokenId",
//                         "type": "uint256"
//                     }
//                 ],
//                 "name": "tokenURI",
//                 "outputs": [
//                     {
//                         "internalType": "string",
//                         "name": "",
//                         "type": "string"
//                     }
//                 ],
//                 "stateMutability": "view",
//                 "type": "function"
//             }
//         ],
//         functionName: 'mint',
//       })
//       const { write } = useContractWrite(config)
//       const { isLoading, isSuccess } = useWaitForTransaction({
//         hash: data?.hash,
//       })
//   return (
//     <div>
//  <button disabled={!write || isLoading} onClick={() => write()}>
//         {isLoading ? 'Minting...' : 'Mint'}
//       </button>
//       {isSuccess && (
//         <div>
//           Successfully minted your NFT!
//           <div>
//             <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
//           </div>
//         </div>
//       )}
//           </div>
//   )
// }
export function MintNFT() {
    const { config } = usePrepareContractWrite({
        address: '0x0b96d62349def159655ca16af82f00dde3737d4b',
        abi:[
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "imageURL",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "address payable",
                        "name": "from",
                        "type": "address"
                    }
                ],
                "name": "gitnftcreated",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "safeMint",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getApproved",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ],
        functionName: 'mint',
      })
      const { write } = useContractWrite(config)
      const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
      })
  return (
    <div>
        <button disabled={!write || isLoading} onClick={() => write()}>
            {isLoading ? 'Minting...' : 'Mint'}
        </button>
        {isSuccess && (
            <div>
                Successfully minted your NFT!
                {sendNotification}
                <div>
                    <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                </div>
            </div>
        )}
    </div>
  )
}