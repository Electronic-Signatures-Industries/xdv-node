# XDV Node

## A decentralized document anchoring, storage agnostic
### is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).


## Features / Roadmap

- **Document Anchoring**
- **Files with IPLD API**
- **Support for XDV, IPFS, Swarm Storage**
- **RSA Transaction validation / signing**
- **"Smart Data Contracts"**: Code IPLD Schemas, merkle proof verifiable, which can be NFT tokenized, or any linked data format
- **Data Subscriptions**: Subscribe IPLD Queries to oracles to execute jobs or actions
- **Supports DID and Verified Credentials**

## Use Cases

- Smart card signing
- NFT
- Documents (anchored or tokenized)
- Decentralized Map Reduce
- IPLD Smart Contracts
- Electronic Invoices
- Verified Credentials
- Decentralized GDPR-like document management

## Tokenomics

- XDV Token
- IDAO Governance Token
 


## Get started

```
starport serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

## Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

## Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

## Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)


## Contributors

- `Industrias DAO / DAO Industries` 2021
- `Industrias de Firmas Electronicas SA` 2021
- `Fernando Romero` 2021