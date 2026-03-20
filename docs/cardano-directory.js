// Cardano Developer Tools Directory — data module
// Source of truth for both the Watchtower index.html and any React UI.
// Flat array, then grouped by category for the default export.

const TOOLS_DATA = [
  // Core Infrastructure - Node Implementations
  { name: "cardano-node", category: "Node Implementations", language: "Haskell", repo: "https://github.com/IntersectMBO/cardano-node", description: "Reference node implementation (IOG)", org: "IntersectMBO" },
  { name: "Amaru", category: "Node Implementations", language: "Rust", repo: "https://github.com/pragma-org/amaru", description: "Alternative node client by Pragma (exploratory phase)", org: "Pragma" },
  { name: "Dolos", category: "Node Implementations", language: "Rust", repo: "https://github.com/txpipe/dolos", description: "Lightweight data node for read-only chain following", org: "TxPipe" },
  { name: "Dingo", category: "Node Implementations", language: "Go", repo: "https://github.com/blinklabs-io/dingo", description: "Go-based node using Ouroboros N2N mini-protocols", org: "Blink Labs" },
  { name: "Torsten", category: "Node Implementations", language: "Rust", repo: "https://github.com/michaeljfazio/torsten", description: "Full Cardano node in Rust — Praos consensus, UTxO-HD, Conway-era support (alpha)", org: "Sandstone Pool" },

  // CLI & Node Tooling
  { name: "cardano-cli", category: "CLI & Node Tooling", language: "Haskell", repo: "https://github.com/IntersectMBO/cardano-cli", description: "Official CLI for node interaction, tx building, governance", org: "IntersectMBO" },
  { name: "CNCLI", category: "CLI & Node Tooling", language: "Rust", repo: "https://github.com/cardano-community/cncli", description: "Community node CLI — leader logs, pool stats, sendtip", org: "Community" },
  { name: "CShell", category: "CLI & Node Tooling", language: "Rust", repo: "https://github.com/txpipe/cshell", description: "Developer/power-user wallet CLI", org: "TxPipe" },
  { name: "Cardano HW CLI", category: "CLI & Node Tooling", language: "TypeScript", repo: "https://github.com/vacuumlabs/cardano-hw-cli", description: "Hardware wallet integration for cardano-cli", org: "Vacuumlabs" },
  { name: "SPO Scripts", category: "CLI & Node Tooling", language: "Bash", repo: "https://github.com/gitmachtl/scripts", description: "Comprehensive SPO management scripts with HW wallet support", org: "Martin Lang" },
  { name: "Guild Operators", category: "CLI & Node Tooling", language: "Bash", repo: "https://github.com/cardano-community/guild-operators", description: "CNTools, gLiveView, topology updater — essential SPO toolkit", org: "Community" },
  { name: "cardano-node-mcp", category: "CLI & Node Tooling", language: "TypeScript", repo: "https://github.com/michaeljfazio/cardano-node-mcp", description: "MCP server for Cardano node CLI operations (cardano-cli + torsten-cli)", org: "michaeljfazio" },
  { name: "koios-mcp", category: "CLI & Node Tooling", language: "TypeScript", repo: "https://github.com/michaeljfazio/koios-mcp", description: "MCP server for Koios API endpoints for agent/tool workflows", org: "michaeljfazio" },

  // Ledger & Formal Specs
  { name: "cardano-ledger", category: "Ledger & Formal Specs", language: "Haskell", repo: "https://github.com/IntersectMBO/cardano-ledger", description: "Formal specs, executable models, and ledger implementation", org: "IntersectMBO" },
  { name: "plutus", category: "Ledger & Formal Specs", language: "Haskell", repo: "https://github.com/IntersectMBO/plutus", description: "Plutus Core compiler and language implementation", org: "IntersectMBO" },

  // Smart Contract Languages
  { name: "Aiken", category: "Smart Contracts", language: "Rust/Aiken", repo: "https://github.com/aiken-lang/aiken", description: "Purpose-built smart contract language (compiles to UPLC)", org: "Pragma" },
  { name: "Plutarch", category: "Smart Contracts", language: "Haskell", repo: "https://github.com/Plutonomicon/plutarch-plutus", description: "Typed eDSL for writing Plutus scripts in Haskell", org: "Plutonomicon" },
  { name: "Opshin", category: "Smart Contracts", language: "Python", repo: "https://github.com/OpShin/opshin", description: "Write Cardano smart contracts in Python", org: "OpShin" },
  { name: "Plu-ts", category: "Smart Contracts", language: "TypeScript", repo: "https://github.com/HarmonicLabs/plu-ts", description: "TypeScript-embedded Cardano smart contract language", org: "Harmonic Labs" },
  { name: "Scalus", category: "Smart Contracts", language: "Scala", repo: "https://github.com/nau/scalus", description: "Scala 3 implementation of Cardano Plutus Platform", org: "Community" },
  { name: "Marlowe", category: "Smart Contracts", language: "Haskell", repo: "https://github.com/marlowe-lang/marlowe-cardano", description: "DSL for financial smart contracts on Cardano", org: "Marlowe" },
  { name: "Helios", category: "Smart Contracts", language: "JavaScript", repo: "https://github.com/hyperion-bt/helios", description: "JS-based smart contract language for Cardano", org: "Community" },
  { name: "liqwid-libs", category: "Smart Contracts", language: "Haskell", repo: "https://github.com/Liqwid-Labs/liqwid-libs", description: "Widely used Plutarch library monorepo (common DeFi building blocks)", org: "Liqwid Labs" },

  // Off-Chain SDKs
  { name: "MeshJS", category: "Off-Chain SDKs", language: "TypeScript", repo: "https://github.com/MeshJS/mesh", description: "Full-featured TypeScript SDK — tx builder, React components, 1M+ downloads", org: "MeshJS" },
  { name: "Lucid Evolution", category: "Off-Chain SDKs", language: "TypeScript", repo: "https://github.com/Anastasia-Labs/lucid-evolution", description: "Maintained fork of Lucid — JS/TS off-chain framework", org: "Anastasia Labs" },
  { name: "Blaze", category: "Off-Chain SDKs", language: "TypeScript", repo: "https://github.com/butaneprotocol/blaze-cardano", description: "TypeScript SDK with modular provider architecture", org: "Butane Protocol" },
  { name: "cardano-js-sdk", category: "Off-Chain SDKs", language: "TypeScript", repo: "https://github.com/input-output-hk/cardano-js-sdk", description: "IOG's comprehensive TypeScript SDK collection", org: "IOG" },
  { name: "Cometa.js", category: "Off-Chain SDKs", language: "JavaScript", repo: "https://github.com/Biglup/cometa.js", description: "Fast, browser-ready JS toolkit for tx building", org: "Biglup" },
  { name: "PyCardano", category: "Off-Chain SDKs", language: "Python", repo: "https://github.com/Python-Cardano/pycardano", description: "Standalone Cardano client library in Python", org: "Community" },
  { name: "Cometa.py", category: "Off-Chain SDKs", language: "Python", repo: "https://github.com/Biglup/cometa.py", description: "High-performance Python lib for tx building and scripting", org: "Biglup" },
  { name: "kupo-py", category: "Off-Chain SDKs", language: "Python", repo: "https://github.com/theeldermillenial/kupo-py", description: "Async Python client for Kupo — type-safe Pydantic responses", org: "theeldermillenial" },
  { name: "dbsync-py", category: "Off-Chain SDKs", language: "Python", repo: "https://github.com/theeldermillenial/dbsync-py", description: "SQLModel ORM helpers for type-safe access to cardano-db-sync PostgreSQL", org: "theeldermillenial" },
  { name: "blockfrost-wrapper", category: "Off-Chain SDKs", language: "Python", repo: "https://github.com/theeldermillenial/blockfrost-wrapper", description: "Python wrapper for Blockfrost with rate-limit safeguards + typed models", org: "theeldermillenial" },
  { name: "minswap-py", category: "Off-Chain SDKs", language: "Python", repo: "https://github.com/theeldermillenial/minswap-py", description: "Python client for Minswap DEX on Cardano (deprecated, still usable)", org: "theeldermillenial" },
  { name: "charli3-dendrite", category: "Off-Chain SDKs", language: "Python", repo: "https://github.com/Charli3-Official/charli3-dendrite", description: "Python SDK for querying and swapping across Cardano DEXs (Minswap, SundaeSwap, WingRiders, and more)", org: "Charli3-Official" },
  { name: "Pallas", category: "Off-Chain SDKs", language: "Rust", repo: "https://github.com/txpipe/pallas", description: "Rust building blocks — chain sync, block parsing, serialization", org: "TxPipe" },
  { name: "Oura", category: "Off-Chain SDKs", language: "Rust", repo: "https://github.com/txpipe/oura", description: "Rust pipeline connecting to cardano-node tip for event streaming", org: "TxPipe" },
  { name: "cardano-client-lib", category: "Off-Chain SDKs", language: "Java", repo: "https://github.com/bloxbean/cardano-client-lib", description: "Java client with Blockfrost/Koios/Ogmios backends", org: "BloxBean" },
  { name: "Yaci", category: "Off-Chain SDKs", language: "Java", repo: "https://github.com/bloxbean/yaci", description: "Java mini-protocol implementation for cardano-node", org: "BloxBean" },
  { name: "gouroboros", category: "Off-Chain SDKs", language: "Go", repo: "https://github.com/blinklabs-io/gouroboros", description: "Go implementation of Ouroboros networking protocols", org: "Blink Labs" },
  { name: "CardanoSharp", category: "Off-Chain SDKs", language: ".NET", repo: "https://github.com/CardanoSharp/cardanosharp-wallet", description: ".NET Cardano cryptographic and serialization library", org: "CardanoSharp" },
  { name: "OgmiosDotnet", category: "Off-Chain SDKs", language: ".NET", repo: "https://github.com/ItsDaveB/OgmiosDotnet", description: ".NET 9.0 Ogmios client — chain sync, mempool, tx eval", org: "ItsDaveB" },
  { name: "Kogmios", category: "Off-Chain SDKs", language: "Kotlin", repo: "https://github.com/projectNEWM/kogmios", description: "Kotlin API library for interacting with Ogmios", org: "NEWM" },
  { name: "cardano-serialization-lib", category: "Off-Chain SDKs", language: "Rust/WASM", repo: "https://github.com/Emurgo/cardano-serialization-lib", description: "Low-level WASM serialization (Rust compiled to JS)", org: "Emurgo" },
  { name: "cardano-multiplatform-lib", category: "Off-Chain SDKs", language: "Rust/WASM", repo: "https://github.com/dcSpark/cardano-multiplatform-lib", description: "Rust serialization lib with WASM bindings", org: "dcSpark" },
  { name: "libada-go", category: "Off-Chain SDKs", language: "Go", repo: "https://github.com/Bitrue-exchange/libada-go", description: "Golang library for Cardano network", org: "Bitrue" },
  { name: "cardano_wallet_sdk", category: "Off-Chain SDKs", language: "Dart", repo: "https://github.com/reaster/cardano_wallet_sdk", description: "Dart SDK for Cardano wallet/tx functionality in Flutter apps", org: "Community" },

  // Indexers & Chain Followers
  { name: "cardano-db-sync", category: "Indexers", language: "Haskell", repo: "https://github.com/IntersectMBO/cardano-db-sync", description: "Full chain indexer to PostgreSQL (batteries-included)", org: "IntersectMBO" },
  { name: "Kupo", category: "Indexers", language: "Haskell", repo: "https://github.com/CardanoSolutions/kupo", description: "Lightweight, configurable chain-index with pattern filtering", org: "Cardano Solutions" },
  { name: "Ogmios", category: "Indexers", language: "Haskell", repo: "https://github.com/CardanoSolutions/ogmios", description: "WebSocket/JSON-RPC bridge to cardano-node mini-protocols", org: "Cardano Solutions" },
  { name: "Yaci Store", category: "Indexers", language: "Java", repo: "https://github.com/bloxbean/yaci-store", description: "Modular, high-performance indexer with plugin framework", org: "BloxBean" },
  { name: "Carp", category: "Indexers", language: "Rust", repo: "https://github.com/dcSpark/carp", description: "Modular indexer with customizable execution plans", org: "dcSpark" },
  { name: "Scrolls", category: "Indexers", language: "Rust", repo: "https://github.com/txpipe/scrolls", description: "Read-optimized indexer for common query patterns", org: "TxPipe" },

  // API Providers
  { name: "Blockfrost", category: "API Providers", language: "API", repo: "https://blockfrost.io", description: "REST API for Cardano (hosted + self-hosted RYO option)", org: "Blockfrost" },
  { name: "Koios", category: "API Providers", language: "API", repo: "https://koios.rest", description: "Decentralized, elastic REST query layer (community-run)", org: "Community" },
  { name: "Maestro", category: "API Providers", language: "API", repo: "https://www.gomaestro.org", description: "Blockchain indexer, APIs, and event management", org: "Maestro" },
  { name: "CardanoBI", category: "API Providers", language: "API", repo: "https://cardanobi.io", description: "Open-source business intelligence API layer", org: "CardanoBI" },
  { name: "Blockfrost RYO", category: "API Providers", language: "TypeScript", repo: "https://github.com/blockfrost/blockfrost-backend-ryo", description: "Run your own Blockfrost backend", org: "Blockfrost" },
  { name: "cardano-graphql", category: "API Providers", language: "TypeScript", repo: "https://github.com/cardano-foundation/cardano-graphql", description: "GraphQL API for Cardano", org: "Cardano Foundation" },
  { name: "koios-mcp", category: "API Providers", language: "TypeScript", repo: "https://github.com/michaeljfazio/koios-mcp", description: "MCP server exposing all 95 Koios endpoints to LLMs and AI agents", org: "michaeljfazio" },

  // Scaling
  { name: "Hydra", category: "Scaling", language: "Haskell", repo: "https://github.com/cardano-scaling/hydra", description: "Layer 2 state channels for low-latency, high-throughput tx", org: "Cardano Scaling" },
  { name: "Mithril", category: "Scaling", language: "Rust", repo: "https://github.com/input-output-hk/mithril", description: "Stake-based threshold multi-signatures for fast bootstrapping", org: "IOG" },

  // Dev Environments
  { name: "Demeter.run", category: "Dev Environments", language: "Platform", repo: "https://demeter.run", description: "Cloud platform — managed nodes, indexers, Ogmios, Kupo", org: "TxPipe" },
  { name: "Yaci DevKit", category: "Dev Environments", language: "Java", repo: "https://github.com/bloxbean/yaci-devkit", description: "Local Cardano devnet for development and testing", org: "BloxBean" },
  { name: "Atlas", category: "Dev Environments", language: "Haskell", repo: "https://github.com/geniusyield/atlas", description: "Haskell framework for off-chain code with test harness", org: "Genius Yield" },
  { name: "Vodka", category: "Dev Environments", language: "Aiken", repo: "https://github.com/Anastasia-Labs/vodka", description: "Aiken testing library for smart contract validation", org: "Anastasia Labs" },
  { name: "Aiken Starter Kit", category: "Dev Environments", language: "Aiken", repo: "https://github.com/cardano-foundation/aiken-lucid-yaci-dev-kit-starter-kit", description: "Template project: Aiken + Lucid + Yaci DevKit", org: "Cardano Foundation" },

  // Governance
  { name: "GovTool", category: "Governance", language: "TypeScript", repo: "https://github.com/IntersectMBO/govtool", description: "DRep registration, delegation, and governance action voting", org: "IntersectMBO" },
  { name: "SanchoNet", category: "Governance", language: "Platform", repo: "https://sancho.network", description: "Dedicated governance testnet", org: "Community" },
  { name: "ChangWatch", category: "Governance", language: "Web", repo: "https://changwatch.com", description: "Vote threshold dashboard with live stake distribution", org: "Community" },
  { name: "Round Table", category: "Governance", language: "TypeScript", repo: "https://github.com/ADAOcommunity", description: "Open-source multi-sig wallet with DRep support", org: "ADAO" },
  { name: "spo-governance-dashboard", category: "Governance", language: "JavaScript", repo: "https://github.com/KtorZ/spo-governance-dashboard", description: "Lightweight dashboard project for SPO governance workflows", org: "KtorZ" },

  // Explorers
  { name: "CExplorer", category: "Explorers", language: "Web", repo: "https://cexplorer.io", description: "Oldest and most-featured Cardano explorer", org: "CExplorer" },
  { name: "CardanoScan", category: "Explorers", language: "Web", repo: "https://cardanoscan.io", description: "Feature-rich explorer and analytics platform", org: "CardanoScan" },
  { name: "Cardano Updates", category: "Explorers", language: "Web", repo: "https://cardanoupdates.com", description: "Development activity tracker across repos", org: "Community" },
  { name: "pool.pm", category: "Explorers", language: "Web", repo: "https://pool.pm", description: "NFT and token explorer", org: "Community" },

  // Wallet Infrastructure
  { name: "cardano-wallet", category: "Wallet Infra", language: "Haskell", repo: "https://github.com/cardano-foundation/cardano-wallet", description: "HTTP server + CLI for UTxO and HD wallet management", org: "Cardano Foundation" },
  { name: "Veridian Wallet", category: "Wallet Infra", language: "TypeScript", repo: "https://github.com/cardano-foundation/veridian-wallet", description: "SSI wallet using KERI/ACDC protocols (CF project)", org: "Cardano Foundation" },
  { name: "cardano-addresses", category: "Wallet Infra", language: "Haskell", repo: "https://github.com/IntersectMBO/cardano-addresses", description: "Address derivation library (Bech32, Byron, Shelley)", org: "IntersectMBO" },
  { name: "wallet-prototype", category: "Wallet Infra", language: "Haskell", repo: "https://github.com/KtorZ/wallet-prototype", description: "Minimal viable wallet backend prototype", org: "KtorZ" },
  { name: "Cardano Peer Connect", category: "Wallet Infra", language: "TypeScript", repo: "https://github.com/fabianbormann/cardano-peer-connect", description: "CIP-0045 WebRTC communication for dApps/wallets", org: "Community" },
  { name: "Cardano Signer", category: "Wallet Infra", language: "Bash", repo: "https://github.com/gitmachtl/scripts", description: "Sign/verify data, generate DRep and CC keys", org: "Martin Lang" },

  // NFT & Tokens
  { name: "NMKR Studio", category: "NFT & Tokens", language: ".NET", repo: "https://github.com/nftmakerio/NMKR-Studio", description: "NFT management platform", org: "NMKR" },
  { name: "Token Registry", category: "NFT & Tokens", language: "JSON", repo: "https://github.com/cardano-foundation/cardano-token-registry", description: "Off-chain metadata registration for native tokens", org: "Cardano Foundation" },
  { name: "Anvil API", category: "NFT & Tokens", language: "API", repo: "https://ada-anvil.io", description: "REST endpoints for minting, tx building, contract interaction", org: "Anvil" },

  // Enterprise & Identity
  { name: "Reeve", category: "Enterprise", language: "TypeScript", repo: "https://github.com/cardano-foundation/cf-reeve-platform", description: "On-chain financial transparency & accounting", org: "Cardano Foundation" },
  { name: "CardanoPress", category: "Enterprise", language: "PHP", repo: "https://github.com/CardanoPress/cardanopress", description: "WordPress plugin for Cardano integration + governance", org: "CardanoPress" },

  // Oracles
  { name: "Charli3", category: "Oracles", language: "Platform", repo: "https://charli3.io", description: "Decentralized oracle network for Cardano", org: "Charli3" },
  { name: "Orcfax", category: "Oracles", language: "Platform", repo: "https://orcfax.io", description: "Decentralized oracle with inter-node vetoing", org: "Orcfax" },
];

// ── Group by category → { "Category": [ {name, description, repo, tags:[lang], org} ] }
const directory = {};
for (const t of TOOLS_DATA) {
  if (!directory[t.category]) directory[t.category] = [];
  directory[t.category].push({
    name: t.name,
    description: t.description,
    repo: t.repo,
    tags: [t.language],
    org: t.org,
  });
}

export default directory;

// Also export the flat array for consumers that need it
export { TOOLS_DATA };
