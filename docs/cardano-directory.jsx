const { useState, useEffect, useRef } = React;

const TOOLS_DATA = [
  // Core Infrastructure - Node Implementations
  { name: "cardano-node", category: "Node Implementations", language: "Haskell", repo: "https://github.com/IntersectMBO/cardano-node", description: "Reference node implementation (IOG)", org: "IntersectMBO" },
  { name: "Amaru", category: "Node Implementations", language: "Rust", repo: "https://github.com/pragma-org/amaru", description: "Alternative node client by Pragma (exploratory phase)", org: "Pragma" },
  { name: "Dolos", category: "Node Implementations", language: "Rust", repo: "https://github.com/txpipe/dolos", description: "Lightweight data node for read-only chain following", org: "TxPipe" },
  { name: "Dingo", category: "Node Implementations", language: "Go", repo: "https://github.com/blinklabs-io/dingo", description: "Go-based node using Ouroboros N2N mini-protocols", org: "Blink Labs" },

  // CLI & Node Tooling
  { name: "cardano-cli", category: "CLI & Node Tooling", language: "Haskell", repo: "https://github.com/IntersectMBO/cardano-cli", description: "Official CLI for node interaction, tx building, governance", org: "IntersectMBO" },
  { name: "CNCLI", category: "CLI & Node Tooling", language: "Rust", repo: "https://github.com/cardano-community/cncli", description: "Community node CLI — leader logs, pool stats, sendtip", org: "Community" },
  { name: "CShell", category: "CLI & Node Tooling", language: "Rust", repo: "https://github.com/txpipe/cshell", description: "Developer/power-user wallet CLI", org: "TxPipe" },
  { name: "Cardano HW CLI", category: "CLI & Node Tooling", language: "TypeScript", repo: "https://github.com/vacuumlabs/cardano-hw-cli", description: "Hardware wallet integration for cardano-cli", org: "Vacuumlabs" },
  { name: "SPO Scripts", category: "CLI & Node Tooling", language: "Bash", repo: "https://github.com/gitmachtl/scripts", description: "Comprehensive SPO management scripts with HW wallet support", org: "Martin Lang" },
  { name: "Guild Operators", category: "CLI & Node Tooling", language: "Bash", repo: "https://github.com/cardano-community/guild-operators", description: "CNTools, gLiveView, topology updater — essential SPO toolkit", org: "Community" },

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

  // Off-Chain SDKs - TypeScript/JavaScript
  { name: "MeshJS", category: "Off-Chain SDKs", language: "TypeScript", repo: "https://github.com/MeshJS/mesh", description: "Full-featured TypeScript SDK — tx builder, React components, 1M+ downloads", org: "MeshJS" },
  { name: "Lucid Evolution", category: "Off-Chain SDKs", language: "TypeScript", repo: "https://github.com/Anastasia-Labs/lucid-evolution", description: "Maintained fork of Lucid — JS/TS off-chain framework", org: "Anastasia Labs" },
  { name: "Blaze", category: "Off-Chain SDKs", language: "TypeScript", repo: "https://github.com/butaneprotocol/blaze-cardano", description: "TypeScript SDK with modular provider architecture", org: "Butane Protocol" },
  { name: "cardano-js-sdk", category: "Off-Chain SDKs", language: "TypeScript", repo: "https://github.com/input-output-hk/cardano-js-sdk", description: "IOG's comprehensive TypeScript SDK collection", org: "IOG" },
  { name: "Cometa.js", category: "Off-Chain SDKs", language: "JavaScript", repo: "https://github.com/Biglup/cometa.js", description: "Fast, browser-ready JS toolkit for tx building", org: "Biglup" },

  // Python
  { name: "PyCardano", category: "Off-Chain SDKs", language: "Python", repo: "https://github.com/Python-Cardano/pycardano", description: "Standalone Cardano client library in Python", org: "Community" },
  { name: "Cometa.py", category: "Off-Chain SDKs", language: "Python", repo: "https://github.com/Biglup/cometa.py", description: "High-performance Python lib for tx building and scripting", org: "Biglup" },

  // Rust
  { name: "Pallas", category: "Off-Chain SDKs", language: "Rust", repo: "https://github.com/txpipe/pallas", description: "Rust building blocks — chain sync, block parsing, serialization", org: "TxPipe" },
  { name: "Oura", category: "Off-Chain SDKs", language: "Rust", repo: "https://github.com/txpipe/oura", description: "Rust pipeline connecting to cardano-node tip for event streaming", org: "TxPipe" },

  // Java
  { name: "cardano-client-lib", category: "Off-Chain SDKs", language: "Java", repo: "https://github.com/bloxbean/cardano-client-lib", description: "Java client with Blockfrost/Koios/Ogmios backends", org: "BloxBean" },
  { name: "Yaci", category: "Off-Chain SDKs", language: "Java", repo: "https://github.com/bloxbean/yaci", description: "Java mini-protocol implementation for cardano-node", org: "BloxBean" },

  // Go
  { name: "gouroboros", category: "Off-Chain SDKs", language: "Go", repo: "https://github.com/blinklabs-io/gouroboros", description: "Go implementation of Ouroboros networking protocols", org: "Blink Labs" },

  // .NET
  { name: "CardanoSharp", category: "Off-Chain SDKs", language: ".NET", repo: "https://github.com/CardanoSharp/cardanosharp-wallet", description: ".NET Cardano cryptographic and serialization library", org: "CardanoSharp" },
  { name: "OgmiosDotnet", category: "Off-Chain SDKs", language: ".NET", repo: "https://github.com/ItsDaveB/OgmiosDotnet", description: ".NET 9.0 Ogmios client — chain sync, mempool, tx eval", org: "ItsDaveB" },

  // Kotlin
  { name: "Kogmios", category: "Off-Chain SDKs", language: "Kotlin", repo: "https://github.com/projectNEWM/kogmios", description: "Kotlin API library for interacting with Ogmios", org: "NEWM" },

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

  // Scaling
  { name: "Hydra", category: "Scaling", language: "Haskell", repo: "https://github.com/cardano-scaling/hydra", description: "Layer 2 state channels for low-latency, high-throughput tx", org: "Cardano Scaling" },
  { name: "Mithril", category: "Scaling", language: "Rust", repo: "https://github.com/input-output-hk/mithril", description: "Stake-based threshold multi-signatures for fast bootstrapping", org: "IOG" },

  // Dev Environments
  { name: "Demeter.run", category: "Dev Environments", language: "Platform", repo: "https://demeter.run", description: "Cloud platform — managed nodes, indexers, Ogmios, Kupo", org: "TxPipe" },
  { name: "Yaci DevKit", category: "Dev Environments", language: "Java", repo: "https://github.com/bloxbean/yaci-devkit", description: "Local Cardano devnet for development and testing", org: "BloxBean" },
  { name: "Atlas", category: "Dev Environments", language: "Haskell", repo: "https://github.com/geniusyield/atlas", description: "Haskell framework for off-chain code with test harness", org: "Genius Yield" },
  { name: "Vodka", category: "Dev Environments", language: "Aiken", repo: "https://github.com/Anastasia-Labs/vodka", description: "Aiken testing library for smart contract validation", org: "Anastasia Labs" },

  // Governance
  { name: "GovTool", category: "Governance", language: "TypeScript", repo: "https://github.com/IntersectMBO/govtool", description: "DRep registration, delegation, and governance action voting", org: "IntersectMBO" },
  { name: "SanchoNet", category: "Governance", language: "Platform", repo: "https://sancho.network", description: "Dedicated governance testnet", org: "Community" },
  { name: "DRep Watch", category: "Governance", language: "Web", repo: "https://drepwatch.com", description: "Monitor DRep activity and voting power in real time", org: "Community" },
  { name: "ChangWatch", category: "Governance", language: "Web", repo: "https://changwatch.com", description: "Vote threshold dashboard with live stake distribution", org: "Community" },

  // Explorers
  { name: "CExplorer", category: "Explorers", language: "Web", repo: "https://cexplorer.io", description: "Oldest and most-featured Cardano explorer", org: "CExplorer" },
  { name: "CardanoScan", category: "Explorers", language: "Web", repo: "https://cardanoscan.io", description: "Feature-rich explorer and analytics platform", org: "CardanoScan" },
  { name: "Cardano Updates", category: "Explorers", language: "Web", repo: "https://cardanoupdates.com", description: "Development activity tracker across repos", org: "Community" },
  { name: "pool.pm", category: "Explorers", language: "Web", repo: "https://pool.pm", description: "NFT and token explorer", org: "Community" },

  // Wallet Infrastructure
  { name: "cardano-wallet", category: "Wallet Infra", language: "Haskell", repo: "https://github.com/cardano-foundation/cardano-wallet", description: "HTTP server + CLI for UTxO and HD wallet management", org: "Cardano Foundation" },
  { name: "Veridian Wallet", category: "Wallet Infra", language: "TypeScript", repo: "https://github.com/cardano-foundation/veridian-wallet", description: "SSI wallet using KERI/ACDC protocols (CF project)", org: "Cardano Foundation" },
  { name: "Cardano Peer Connect", category: "Wallet Infra", language: "TypeScript", repo: "https://github.com/fabianbormann/cardano-peer-connect", description: "CIP-0045 WebRTC communication for dApps/wallets", org: "Community" },

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

const CATEGORIES = [...new Set(TOOLS_DATA.map(t => t.category))];
const LANGUAGES = [...new Set(TOOLS_DATA.map(t => t.language))].sort();

const CATEGORY_ICONS = {
  "Node Implementations": "⬡",
  "CLI & Node Tooling": "⌘",
  "Ledger & Formal Specs": "📐",
  "Smart Contracts": "◈",
  "Off-Chain SDKs": "⚡",
  "Indexers": "◉",
  "API Providers": "⟐",
  "Scaling": "△",
  "Dev Environments": "⚙",
  "Governance": "⚖",
  "Explorers": "◎",
  "Wallet Infra": "🔐",
  "NFT & Tokens": "✦",
  "Enterprise": "◆",
  "Oracles": "◈",
};

const LANG_COLORS = {
  "Haskell": "#5e5086",
  "Rust": "#dea584",
  "Go": "#00ADD8",
  "TypeScript": "#3178c6",
  "JavaScript": "#f7df1e",
  "Python": "#3572A5",
  "Java": "#b07219",
  ".NET": "#512BD4",
  "Kotlin": "#A97BFF",
  "Bash": "#89e051",
  "Scala": "#c22d40",
  "Rust/Aiken": "#00d4aa",
  "Aiken": "#00d4aa",
  "PHP": "#4F5D95",
  "API": "#0ea5e9",
  "Web": "#64748b",
  "Platform": "#64748b",
  "JSON": "#94a3b8",
};

function ToolCard({ tool, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={tool.repo}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        background: hovered
          ? "linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(0,51,173,0.08) 100%)"
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(0,212,170,0.4)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "12px",
        padding: "20px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        animation: `fadeSlideIn 0.4s ease ${index * 0.03}s both`,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {hovered && (
        <div style={{
          position: "absolute", top: 0, right: 0, width: "120px", height: "120px",
          background: "radial-gradient(circle at top right, rgba(0,212,170,0.1), transparent 70%)",
          pointerEvents: "none",
        }} />
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
        <h3 style={{
          margin: 0, fontSize: "15px", fontWeight: 600,
          color: hovered ? "#00d4aa" : "#e2e8f0",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "-0.02em",
          transition: "color 0.3s ease",
        }}>{tool.name}</h3>
        <span style={{
          fontSize: "10px", padding: "2px 8px", borderRadius: "20px",
          background: `${LANG_COLORS[tool.language] || "#64748b"}20`,
          color: LANG_COLORS[tool.language] || "#94a3b8",
          border: `1px solid ${LANG_COLORS[tool.language] || "#64748b"}40`,
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 500, whiteSpace: "nowrap",
        }}>{tool.language}</span>
      </div>
      <p style={{
        margin: "0 0 12px 0", fontSize: "13px", color: "#94a3b8",
        lineHeight: 1.5, fontFamily: "'IBM Plex Sans', sans-serif",
      }}>{tool.description}</p>
      <div style={{
        fontSize: "11px", color: "#475569",
        fontFamily: "'IBM Plex Sans', sans-serif",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span>{tool.org}</span>
        <span style={{ color: hovered ? "#00d4aa" : "#475569", transition: "color 0.3s" }}>
          {tool.repo.includes("github.com") ? "GitHub →" : "Website →"}
        </span>
      </div>
    </a>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={{
      textAlign: "center", padding: "16px 24px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "10px",
    }}>
      <div style={{
        fontSize: "28px", fontWeight: 700,
        fontFamily: "'JetBrains Mono', monospace",
        background: "linear-gradient(135deg, #00d4aa, #0033ad)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>{value}</div>
      <div style={{
        fontSize: "11px", color: "#64748b", marginTop: "4px",
        fontFamily: "'IBM Plex Sans', sans-serif",
        textTransform: "uppercase", letterSpacing: "0.1em",
      }}>{label}</div>
    </div>
  );
}

function CardanoDevToolsDirectory() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLang, setActiveLang] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filtered = TOOLS_DATA.filter(tool => {
    const matchesSearch = search === "" ||
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()) ||
      tool.language.toLowerCase().includes(search.toLowerCase()) ||
      tool.org.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "All" || tool.category === activeCategory;
    const matchesLang = activeLang === "All" || tool.language === activeLang;
    return matchesSearch && matchesCat && matchesLang;
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0e17",
      color: "#e2e8f0",
      fontFamily: "'IBM Plex Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,212,170,0.2); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(0,212,170,0.4); }

        .cat-btn { transition: all 0.2s ease; cursor: pointer; border: none; outline: none; }
        .cat-btn:hover { background: rgba(0,212,170,0.15) !important; color: #00d4aa !important; }

        .search-input::placeholder { color: #475569; }
        .search-input:focus { outline: none; border-color: rgba(0,212,170,0.5); box-shadow: 0 0 0 3px rgba(0,212,170,0.1); }
      `}</style>

      {/* Background grid effect */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(0,212,170,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,170,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        animation: "gridPulse 8s ease-in-out infinite",
      }} />

      {/* Hero glow */}
      <div style={{
        position: "fixed", top: "-200px", left: "50%", transform: "translateX(-50%)",
        width: "800px", height: "600px", zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(0,51,173,0.15) 0%, transparent 70%)",
        animation: "heroGlow 6s ease-in-out infinite",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <header style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 32px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          backdropFilter: "blur(20px)",
          background: "rgba(10,14,23,0.8)",
          position: "sticky", top: 0, zIndex: 100,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "8px",
              background: "linear-gradient(135deg, #00d4aa, #0033ad)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "16px", fontWeight: 700, color: "#fff",
              fontFamily: "'JetBrains Mono', monospace",
            }}>C</div>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600, fontSize: "14px", letterSpacing: "-0.02em",
            }}>cardano-devtools</span>
          </div>
          <a href="https://github.com/BEACNpool/cardano-devtools-directory"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              color: "#94a3b8", textDecoration: "none", fontSize: "13px",
              fontFamily: "'IBM Plex Sans', sans-serif",
              padding: "6px 14px", borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)"; e.currentTarget.style.color = "#00d4aa"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#94a3b8"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Star on GitHub
          </a>
        </header>

        {/* Hero */}
        <section style={{
          padding: "80px 32px 60px",
          maxWidth: "1200px", margin: "0 auto",
          textAlign: "center",
          animation: isLoaded ? "fadeSlideIn 0.6s ease both" : "none",
        }}>
          <div style={{
            display: "inline-block", padding: "4px 16px", borderRadius: "20px",
            background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)",
            fontSize: "12px", color: "#00d4aa", marginBottom: "24px",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            Community-Maintained · Open Source · Neutral
          </div>

          <h1 style={{
            fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            lineHeight: 1.1, marginBottom: "16px",
            letterSpacing: "-0.04em",
          }}>
            Cardano Developer{" "}
            <span style={{
              background: "linear-gradient(135deg, #00d4aa 0%, #0066ff 50%, #00d4aa 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Tools Directory</span>
          </h1>

          <p style={{
            fontSize: "16px", color: "#64748b", maxWidth: "600px",
            margin: "0 auto 40px", lineHeight: 1.7,
          }}>
            Every actively maintained tool, library, and infrastructure project
            in the Cardano ecosystem — curated, categorized, and searchable.
          </p>

          {/* Stats */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "12px", maxWidth: "600px", margin: "0 auto 40px",
          }}>
            <StatCard label="Tools" value={TOOLS_DATA.length} />
            <StatCard label="Categories" value={CATEGORIES.length} />
            <StatCard label="Languages" value={LANGUAGES.length} />
            <StatCard label="Orgs" value={[...new Set(TOOLS_DATA.map(t => t.org))].length} />
          </div>

          {/* Search */}
          <div style={{ maxWidth: "560px", margin: "0 auto", position: "relative" }}>
            <svg style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "#475569" }}
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              className="search-input"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search tools, languages, organizations..."
              style={{
                width: "100%", padding: "14px 16px 14px 44px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px", fontSize: "14px", color: "#e2e8f0",
                fontFamily: "'IBM Plex Sans', sans-serif",
                transition: "all 0.3s ease",
              }}
            />
          </div>
        </section>

        {/* Main Content */}
        <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px 80px" }}>
          {/* Category filters */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "6px",
            marginBottom: "16px", justifyContent: "center",
          }}>
            <button className="cat-btn" onClick={() => setActiveCategory("All")}
              style={{
                padding: "6px 14px", borderRadius: "8px", fontSize: "12px",
                fontFamily: "'JetBrains Mono', monospace",
                background: activeCategory === "All" ? "rgba(0,212,170,0.15)" : "rgba(255,255,255,0.03)",
                color: activeCategory === "All" ? "#00d4aa" : "#64748b",
                border: `1px solid ${activeCategory === "All" ? "rgba(0,212,170,0.3)" : "rgba(255,255,255,0.06)"}`,
              }}>All</button>
            {CATEGORIES.map(cat => (
              <button key={cat} className="cat-btn" onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "6px 14px", borderRadius: "8px", fontSize: "12px",
                  fontFamily: "'JetBrains Mono', monospace",
                  background: activeCategory === cat ? "rgba(0,212,170,0.15)" : "rgba(255,255,255,0.03)",
                  color: activeCategory === cat ? "#00d4aa" : "#64748b",
                  border: `1px solid ${activeCategory === cat ? "rgba(0,212,170,0.3)" : "rgba(255,255,255,0.06)"}`,
                }}>
                <span style={{ marginRight: "4px" }}>{CATEGORY_ICONS[cat] || "◇"}</span>
                {cat}
              </button>
            ))}
          </div>

          {/* Language filters */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "4px",
            marginBottom: "32px", justifyContent: "center",
          }}>
            <button className="cat-btn" onClick={() => setActiveLang("All")}
              style={{
                padding: "4px 10px", borderRadius: "6px", fontSize: "11px",
                fontFamily: "'JetBrains Mono', monospace",
                background: activeLang === "All" ? "rgba(0,212,170,0.1)" : "transparent",
                color: activeLang === "All" ? "#00d4aa" : "#475569",
                border: `1px solid ${activeLang === "All" ? "rgba(0,212,170,0.2)" : "transparent"}`,
              }}>All Languages</button>
            {LANGUAGES.map(lang => (
              <button key={lang} className="cat-btn" onClick={() => setActiveLang(lang)}
                style={{
                  padding: "4px 10px", borderRadius: "6px", fontSize: "11px",
                  fontFamily: "'JetBrains Mono', monospace",
                  background: activeLang === lang ? `${LANG_COLORS[lang] || "#64748b"}20` : "transparent",
                  color: activeLang === lang ? (LANG_COLORS[lang] || "#94a3b8") : "#475569",
                  border: `1px solid ${activeLang === lang ? `${LANG_COLORS[lang] || "#64748b"}40` : "transparent"}`,
                }}>{lang}</button>
            ))}
          </div>

          {/* Results count */}
          <div style={{
            fontSize: "12px", color: "#475569", marginBottom: "20px",
            fontFamily: "'JetBrains Mono', monospace", textAlign: "center",
          }}>
            Showing {filtered.length} of {TOOLS_DATA.length} tools
          </div>

          {/* Tools Grid */}
          {filtered.length === 0 ? (
            <div style={{
              textAlign: "center", padding: "80px 0", color: "#475569",
              fontFamily: "'IBM Plex Sans', sans-serif",
            }}>
              <div style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.5 }}>◇</div>
              <p>No tools match your filters.</p>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "12px",
            }}>
              {filtered.map((tool, i) => (
                <ToolCard key={tool.name + tool.category} tool={tool} index={i} />
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "40px 32px",
          textAlign: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
            <img src="https://www.beacnpool.org/pfp.png" alt="BEACNpool"
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                border: "2px solid rgba(0,212,170,0.3)",
              }}
            />
            <div style={{ textAlign: "left" }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px", fontWeight: 600, color: "#e2e8f0",
              }}>BEACNpool</div>
              <div style={{
                fontSize: "11px", color: "#64748b",
                fontFamily: "'IBM Plex Sans', sans-serif",
              }}>Cardano DRep · 0% Margin SPO · Chicago</div>
            </div>
          </div>
          <p style={{
            fontSize: "12px", color: "#475569", maxWidth: "500px",
            margin: "0 auto 20px", lineHeight: 1.6,
            fontFamily: "'IBM Plex Sans', sans-serif",
          }}>
            Community-maintained and open source. No bias, no sponsorships.
            PRs welcome — help us keep this directory complete and accurate.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <a href="https://github.com/BEACNpool/cardano-devtools-directory" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "12px", color: "#00d4aa", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace" }}>
              GitHub Repo
            </a>
            <span style={{ color: "#1e293b" }}>·</span>
            <a href="https://www.beacnpool.org" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "12px", color: "#64748b", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace" }}>
              beacnpool.org
            </a>
          </div>
          <div style={{
            marginTop: "24px", fontSize: "11px", color: "#1e293b",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            Built for the Cardano community · Last updated March 2026
          </div>
        </footer>
      </div>
    </div>
  );
}
