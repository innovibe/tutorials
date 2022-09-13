// necessary imports
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { useState, useEffect } from 'react';

// a simple component that returns a connect wallet button 
export default function Home(props) {

  // state that will hold our Web3Modal 
  const [web3Modal, setWeb3Modal] = useState(null)

  useEffect(() => {
    // necessary for instantiating an instance of Web3Modal
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: YOUR_INFURA_KEY,
        }
      },
    };

    // create our new Web3Modal instance, store in state
    const newWeb3Modal = new Web3Modal({
      cacheProvider: true, // very important for later
      network: "mainnet",
      providerOptions,
    });

    setWeb3Modal(newWeb3Modal)
  }, [])

  // returns a button that doesn't do much (yet)
  return <button>Connect</button>
}
