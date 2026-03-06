# Cardano Developer Tools Directory

## 🌐 GitHub Pages
- Directory (main): https://beacnpool.github.io/cardano-devtools-directory/
- Docs app: https://beacnpool.github.io/cardano-devtools-directory/docs/

> A curated list of tools, libraries, and infrastructure for building on Cardano.
> Hosted by **BEACNpool**. Maintained as a community resource.
> Last updated: March 2026

**Scope (on purpose):** developer tools and infra. Not a directory of dApps/tokens/projects.

---

## Core Infrastructure

### Node Implementations
| Project | Language | Repo | Description |
|---------|----------|------|-------------|
| cardano-node | Haskell | [IntersectMBO/cardano-node](https://github.com/IntersectMBO/cardano-node) | Reference node implementation |
| Amaru | Rust | [pragma-org/amaru](https://github.com/pragma-org/amaru) | Alternative node client by Pragma (exploratory phase) |
| Dolos | Rust | [txpipe/dolos](https://github.com/txpipe/dolos) | Lightweight data node for read-only chain following |
| Dingo | Go | [blinklabs-io/dingo](https://github.com/blinklabs-io/dingo) | Go-based node using Ouroboros N2N mini-protocols |

### CLI & Node Tooling
| Project | Language | Repo | Description |
|---------|----------|------|-------------|
| cardano-cli | Haskell | [IntersectMBO/cardano-cli](https://github.com/IntersectMBO/cardano-cli) | Official CLI for node interaction, tx building, governance |
| CNCLI | Rust | [cardano-community/cncli](https://github.com/cardano-community/cncli) | Community node CLI — leader logs, pool stats, sendtip |
| CShell | Rust | [txpipe/cshell](https://github.com/txpipe/cshell) | Developer/power-user wallet CLI |
| Cardano HW CLI | TypeScript | [vacuumlabs/cardano-hw-cli](https://github.com/vacuumlabs/cardano-hw-cli) | Hardware wallet integration for cardano-cli |
| SPO Scripts | Bash | [gitmachtl/scripts](https://github.com/gitmachtl/scripts) | Comprehensive SPO management scripts with HW wallet support |

### Ledger & Formal Specs
| Project | Language | Repo | Description |
|---------|----------|------|-------------|
| cardano-ledger | Haskell | [IntersectMBO/cardano-ledger](https://github.com/IntersectMBO/cardano-ledger) | Formal specs, executable models, and ledger implementation |
| plutus | Haskell | [IntersectMBO/plutus](https://github.com/IntersectMBO/plutus) | Plutus Core compiler and language implementation |

---

## SPO Tooling

| Project | Repo | Description |
|---------|------|-------------|
| Guild Operators | [cardano-community/guild-operators](https://github.com/cardano-community/guild-operators) | CNTools, gLiveView, topology updater, ops docs — widely-used SPO toolkit |

---

## Smart Contract Languages

| Project | Language | Repo | Description |
|---------|----------|------|-------------|
| Aiken | Rust/Aiken | [aiken-lang/aiken](https://github.com/aiken-lang/aiken) | Purpose-built smart contract language for Cardano (compiles to UPLC) |
| Helios | JavaScript | [hyperion-bt/helios](https://github.com/hyperion-bt/helios) | JS-based smart contract language for Cardano |
| Marlowe | Haskell/DSL | [marlowe-lang/marlowe-cardano](https://github.com/marlowe-lang/marlowe-cardano) | DSL + runtime tooling for financial smart contracts on Cardano |
| Opshin | Python | [OpShin/opshin](https://github.com/OpShin/opshin) | Write Cardano smart contracts in Python |
| Plutarch | Haskell | [Plutonomicon/plutarch-plutus](https://github.com/Plutonomicon/plutarch-plutus) | Typed eDSL for writing Plutus scripts in Haskell |
| Plu-ts | TypeScript | [HarmonicLabs/plu-ts](https://github.com/HarmonicLabs/plu-ts) | TypeScript-embedded Cardano smart contract language |
| Scalus | Scala | [nau/scalus](https://github.com/nau/scalus) | Scala 3 implementation of Cardano Plutus Platform |

### Smart Contract Libraries
| Project | Repo | Description |
|---------|------|-------------|
| liqwid-libs | [Liqwid-Labs/liqwid-libs](https://github.com/Liqwid-Labs/liqwid-libs) | Widely used Plutarch library monorepo (common DeFi building blocks) |

---

## Off-Chain SDKs & Transaction Builders

### TypeScript/JavaScript
| Project | Repo | Description |
|---------|------|-------------|
| Blaze | [butaneprotocol/blaze-cardano](https://github.com/butaneprotocol/blaze-cardano) | TypeScript SDK with modular provider architecture |
| cardano-js-sdk | [input-output-hk/cardano-js-sdk](https://github.com/input-output-hk/cardano-js-sdk) | IOG's comprehensive TypeScript SDK collection |
| cardano-serialization-lib | [input-output-hk/cardano-serialization-lib](https://github.com/nicholasgasior/cardano-serialization-lib) | Low-level WASM serialization (Rust compiled to JS) |
| Cometa.js | [Biglup/cometa.js](https://github.com/Biglup/cometa.js) | Fast, browser-ready JS toolkit for tx building |
| Lucid Evolution | [Anastasia-Labs/lucid-evolution](https://github.com/Anastasia-Labs/lucid-evolution) | Maintained fork of Lucid — JS/TS off-chain framework |
| MeshJS | [MeshJS/mesh](https://github.com/MeshJS/mesh) | Full-featured TypeScript SDK — tx builder, React components, wallet integration |

### Python
| Project | Repo | Description |
|---------|------|-------------|
| Cometa.py | [Biglup/cometa.py](https://github.com/Biglup/cometa.py) | High-performance Python lib for tx building and scripting |
| PyCardano | [Python-Cardano/pycardano](https://github.com/Python-Cardano/pycardano) | Standalone Cardano client library in Python |

### Rust
| Project | Repo | Description |
|---------|------|-------------|
| cardano-multiplatform-lib | [dcSpark/cardano-multiplatform-lib](https://github.com/nicholasgasior/cardano-multiplatform-lib) | Rust serialization lib with WASM bindings |
| Oura | [txpipe/oura](https://github.com/txpipe/oura) | Rust pipeline connecting to cardano-node tip for event streaming |
| Pallas | [txpipe/pallas](https://github.com/txpipe/pallas) | Rust building blocks — chain sync, block parsing, serialization |

### Java/JVM
| Project | Repo | Description |
|---------|------|-------------|
| cardano-client-lib | [bloxbean/cardano-client-lib](https://github.com/bloxbean/cardano-client-lib) | Java client with Blockfrost/Koios/Ogmios backends |
| Yaci | [bloxbean/yaci](https://github.com/bloxbean/yaci) | Java mini-protocol implementation for cardano-node |

### Kotlin
| Project | Repo | Description |
|---------|------|-------------|
| kogmios | [NEWM/kogmios](https://github.com/NEWM/kogmios) | Kotlin client library for Ogmios |

### Go
| Project | Repo | Description |
|---------|------|-------------|
| gouroboros | [blinklabs-io/gouroboros](https://github.com/blinklabs-io/gouroboros) | Go implementation of Ouroboros networking protocols |
| libada-go | [Bitrue-exchange/libada-go](https://github.com/Bitrue-exchange/libada-go) | Golang library for Cardano network |

### Dart / Flutter
| Project | Repo | Description |
|---------|------|-------------|
| cardano_wallet_sdk | [reaster/cardano_wallet_sdk](https://github.com/reaster/cardano_wallet_sdk) | Dart SDK for Cardano wallet/tx functionality in Flutter apps |

### .NET
| Project | Repo | Description |
|---------|------|-------------|
| Blockfrost .NET SDK | [blockfrost/blockfrost-dotnet](https://github.com/blockfrost/blockfrost-dotnet) | .NET SDK for the Blockfrost API |
| CardanoSharp | [CardanoSharp/cardanosharp-wallet](https://github.com/CardanoSharp/cardanosharp-wallet) | .NET Cardano cryptographic and serialization library |
| OgmiosDotnet | [ItsDaveB/OgmiosDotnet](https://github.com/ItsDaveB/OgmiosDotnet) | .NET Ogmios client — chain sync, mempool, tx submission |

---

## Indexers & Chain Followers

| Project | Language | Repo | Description |
|---------|----------|------|-------------|
| cardano-db-sync | Haskell | [IntersectMBO/cardano-db-sync](https://github.com/IntersectMBO/cardano-db-sync) | Full chain indexer to PostgreSQL (batteries-included) |
| Carp | Rust | [dcSpark/carp](https://github.com/dcSpark/carp) | Modular indexer with customizable execution plans |
| Kupo | Haskell | [CardanoSolutions/kupo](https://github.com/CardanoSolutions/kupo) | Lightweight, configurable chain-index with pattern filtering |
| Ogmios | Haskell | [CardanoSolutions/ogmios](https://github.com/CardanoSolutions/ogmios) | WebSocket/JSON-RPC bridge to cardano-node mini-protocols |
| Scrolls | Rust | [txpipe/scrolls](https://github.com/txpipe/scrolls) | Read-optimized indexer for common query patterns |
| Yaci Store | Java | [bloxbean/yaci-store](https://github.com/bloxbean/yaci-store) | Modular, high-performance indexer with plugin framework |

---

## API Providers & Data Services

### Hosted APIs
| Project | URL | Description |
|---------|-----|-------------|
| Blockfrost | [blockfrost.io](https://blockfrost.io) | REST API for Cardano (hosted + self-hosted RYO option) |
| CardanoBI | [cardanobi.io](https://cardanobi.io) | Open-source business intelligence API layer |
| Koios | [koios.rest](https://koios.rest) | Decentralized, elastic REST query layer (community-run) |
| Maestro | [gomaestro.org](https://www.gomaestro.org) | Blockchain indexer, APIs, and event management |

### Self-Hosted API Backends
| Project | Repo | Description |
|---------|------|-------------|
| Blockfrost RYO | [blockfrost/blockfrost-backend-ryo](https://github.com/blockfrost/blockfrost-backend-ryo) | Run your own Blockfrost backend |
| cardano-graphql | [cardano-foundation/cardano-graphql](https://github.com/cardano-foundation/cardano-graphql) | GraphQL API for Cardano |

### Client SDKs for APIs
| Project | Language | Repo |
|---------|----------|------|
| blockfrost-haskell | Haskell | [blockfrost/blockfrost-haskell](https://github.com/blockfrost/blockfrost-haskell) |
| blockfrost-js | TypeScript | [blockfrost/blockfrost-js](https://github.com/blockfrost/blockfrost-js) |
| blockfrost-python | Python | [blockfrost/blockfrost-python](https://github.com/blockfrost/blockfrost-python) |
| blockfrost-rust | Rust | [blockfrost/blockfrost-rust](https://github.com/blockfrost/blockfrost-rust) |
| koios-api-python | Python | [cardano-apexpool/koios-api-python](https://github.com/cardano-apexpool/koios-api-python) |

---

## Scaling Solutions

| Project | Language | Repo | Description |
|---------|----------|------|-------------|
| Hydra | Haskell | [cardano-scaling/hydra](https://github.com/cardano-scaling/hydra) | Layer 2 state channels for low-latency, high-throughput tx |
| Mithril | Rust | [input-output-hk/mithril](https://github.com/input-output-hk/mithril) | Stake-based threshold multi-signatures for fast chain bootstrapping |

---

## Developer Environments & Testing

| Project | Repo | Description |
|---------|------|-------------|
| Aiken Starter Kit | [cardano-foundation/aiken-lucid-yaci-dev-kit-starter-kit](https://github.com/cardano-foundation/aiken-lucid-yaci-dev-kit-starter-kit) | Template project: Aiken + Lucid + Yaci DevKit |
| Atlas | [geniusyield/atlas](https://github.com/geniusyield/atlas) | Haskell framework for off-chain code with test harness |
| Cardano Testnet Faucet | [developers.cardano.org](https://developers.cardano.org/docs/get-started/cardano-testnet-faucet/) | tADA for testnet development |
| Demeter.run | [demeter.run](https://demeter.run) | Cloud platform — managed nodes, indexers, Ogmios, Kupo |
| Yaci DevKit | [bloxbean/yaci-devkit](https://github.com/bloxbean/yaci-devkit) | Local Cardano devnet for development and testing |

---

## Governance Tools

| Project | Repo/URL | Description |
|---------|----------|-------------|
| GovTool | [IntersectMBO/govtool](https://github.com/IntersectMBO/govtool) | DRep registration, delegation, and governance action voting |
| Round Table | [ADAOcommunity](https://github.com/ADAOcommunity) | Open-source multi-sig wallet with DRep support |
| SanchoNet | [sancho.network](https://sancho.network) | Dedicated governance testnet |
| CIP-95 Wallet Bridge | Spec | Extends CIP-30 for governance dApp development |

---

## Explorers & Analytics

| Project | URL | Description |
|---------|-----|-------------|
| CExplorer | [cexplorer.io](https://cexplorer.io) | Oldest and most-featured Cardano explorer |
| CardanoScan | [cardanoscan.io](https://cardanoscan.io) | Feature-rich explorer and analytics platform |
| Cardano Updates | [cardanoupdates.com](https://cardanoupdates.com) | Development activity tracker across repos |
| BuiltOnCardano | [builtoncardano.com](https://builtoncardano.com) | Ecosystem directory and project browser |
| pool.pm | [pool.pm](https://pool.pm) | NFT and token explorer |

---

## Wallet Infrastructure

| Project | Repo | Description |
|---------|------|-------------|
| cardano-addresses | [IntersectMBO/cardano-addresses](https://github.com/IntersectMBO/cardano-addresses) | Address derivation library (Bech32, Byron, Shelley) |
| cardano-wallet | [cardano-foundation/cardano-wallet](https://github.com/cardano-foundation/cardano-wallet) | HTTP server + CLI for UTxO and HD wallet management |
| Cardano Peer Connect | [fabianbormann/cardano-peer-connect](https://github.com/fabianbormann/cardano-peer-connect) | CIP-0045 WebRTC communication for dApps/wallets |
| Cardano Signer | [gitmachtl/scripts](https://github.com/gitmachtl/scripts) | Sign/verify data, generate DRep and CC keys |

---

## NFT & Token Tooling

| Project | Repo | Description |
|---------|------|-------------|
| Anvil API | [ada-anvil.io](https://ada-anvil.io) | REST endpoints for minting, tx building, contract interaction |
| Cardano Token Registry | [cardano-foundation/cardano-token-registry](https://github.com/cardano-foundation/cardano-token-registry) | Off-chain metadata registration for native tokens |
| NMKR Studio | [nftmakerio/NMKR-Studio](https://github.com/nftmakerio/NMKR-Studio) | NFT management platform (.NET) |

---

## Oracles

| Project | URL | Description |
|---------|-----|-------------|
| Charli3 | [charli3.io](https://charli3.io) | Decentralized oracle network for Cardano |
| Orcfax | [orcfax.io](https://orcfax.io) | Decentralized oracle with inter-node vetoing |

---

## WordPress / CMS Integration

| Project | Repo | Description |
|---------|------|-------------|
| CardanoPress | [CardanoPress/cardanopress](https://github.com/CardanoPress/cardanopress) | WordPress plugin for Cardano integration + governance features |

---

## Key GitHub Organizations

| Organization | URL | Focus |
|-------------|-----|-------|
| IntersectMBO | [github.com/IntersectMBO](https://github.com/IntersectMBO) | Core node, ledger, CLI, Plutus |
| Cardano Foundation | [github.com/cardano-foundation](https://github.com/cardano-foundation) | Developer portal, wallet, token registry, governance |
| IOG (Input Output) | [github.com/input-output-hk](https://github.com/input-output-hk) | Research implementations, JS SDK, Mithril |
| Cardano Scaling | [github.com/cardano-scaling](https://github.com/cardano-scaling) | Hydra, Mithril, Layer 2 working group |
| CardanoSolutions | [github.com/CardanoSolutions](https://github.com/CardanoSolutions) | Ogmios, Kupo |
| TxPipe | [github.com/txpipe](https://github.com/txpipe) | Pallas, Oura, Scrolls, Dolos, Demeter |
| Pragma | [github.com/pragma-org](https://github.com/pragma-org) | Amaru, Aiken |
| dcSpark | [github.com/dcSpark](https://github.com/dcSpark) | Carp, multiplatform-lib |
| BloxBean | [github.com/bloxbean](https://github.com/bloxbean) | Java client lib, Yaci, Yaci Store |
| Blink Labs | [github.com/blinklabs-io](https://github.com/blinklabs-io) | Go tooling — Dingo, gouroboros |
| Blockfrost | [github.com/blockfrost](https://github.com/blockfrost) | API service + multi-language SDKs |
| Anastasia Labs | [github.com/Anastasia-Labs](https://github.com/Anastasia-Labs) | Lucid Evolution, smart contract libraries |

---

## Official Documentation & Learning

| Resource | URL |
|----------|-----|
| Cardano Developer Portal | [developers.cardano.org](https://developers.cardano.org) |
| Cardano Docs | [docs.cardano.org](https://docs.cardano.org) |
| Cardano StackExchange | [cardano.stackexchange.com](https://cardano.stackexchange.com) |
| Cardano Forum | [forum.cardano.org](https://forum.cardano.org) |
| CIPs (Cardano Improvement Proposals) | [cips.cardano.org](https://cips.cardano.org) |
| Guild Operators FAQ | [cardano-community.github.io/support-faq](https://cardano-community.github.io/support-faq/) |
| Cardano Foundation Academy | [cardanofoundation.org/academy](https://cardanofoundation.org/academy) |
| MeshJS Course | [meshjs.dev/resources/cardano-course](https://meshjs.dev/resources/cardano-course) |
| Aiken Docs | [aiken-lang.org](https://aiken-lang.org) |
| Essential Cardano | [essentialcardano.io](https://essentialcardano.io) |
| Developer Ecosystem Survey (2025) | [cardano-foundation.github.io/state-of-the-developer-ecosystem/2025](https://cardano-foundation.github.io/state-of-the-developer-ecosystem/2025/) |

---

## Existing Awesome Lists

| List | Repo | Notes |
|------|------|-------|
| awesome-cardano | [CardanoUmbrella/awesome-cardano](https://github.com/CardanoUmbrella/awesome-cardano) | General ecosystem (tends to go stale) |
| awesome-cardano-rust | [2nd-Layer/awesome-cardano-rust](https://github.com/2nd-Layer/awesome-cardano-rust) | Rust-specific tooling |
| awesome-cardano-golang | [2nd-Layer/awesome-cardano-golang](https://github.com/2nd-Layer/awesome-cardano-golang) | Go-specific tooling |
| Essential Cardano Dev Tools | [essentialcardano.io](https://www.essentialcardano.io/article/a-list-of-community-built-developer-tools-on-cardano) | IOG-maintained list (updated June 2025) |
| Built On Cardano | [builtoncardano.com/ecosystem/developer-tools](https://builtoncardano.com/ecosystem/developer-tools) | Community project directory |

---

## Contributing

PRs welcome. See:
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

---

*Curated by BEACNpool (AI-assisted). Community PRs welcome.*
