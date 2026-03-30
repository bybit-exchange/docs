import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const primaryCards = [
  {
    title: <Translate id="homepage.card.mcp.title">MCP Tool</Translate>,
    eyebrow: <Translate id="homepage.card.mcp.eyebrow">Coming soon!</Translate>,
    description: (
      <Translate id="homepage.card.mcp.desc">
        Connect AI agents directly to Bybit through the official MCP server for trading workflows, market context, and faster tool-driven integration.
      </Translate>
    ),
    link: 'https://github.com/bybit-exchange/bybit-mcp',
    linkLabel: <Translate id="homepage.card.mcp.link">View repository</Translate>,
    external: true,
    tags: [
      <Translate id="homepage.card.mcp.tag.1">AI agents</Translate>,
      <Translate id="homepage.card.mcp.tag.2">MCP</Translate>,
      <Translate id="homepage.card.mcp.tag.3">Tool access</Translate>,
    ],
  },
  {
    title: <Translate id="homepage.card.unified.title">Unified V5 APIs</Translate>,
    description: (
      <Translate id="homepage.card.unified.desc">
        Build on Bybit&apos;s core REST and WebSocket APIs across spot, derivatives, and options with one consistent integration surface.
      </Translate>
    ),
    link: '/v5/guide',
    linkLabel: <Translate id="homepage.card.unified.link">Read the guide</Translate>,
    internal: true,
    tags: [
      <Translate id="homepage.card.unified.tag.1">REST + WebSocket</Translate>,
      <Translate id="homepage.card.unified.tag.2">Spot / Derivatives</Translate>,
      <Translate id="homepage.card.unified.tag.3">Production-ready</Translate>,
    ],
  },
  {
    title: <Translate id="homepage.card.skills.title">Skills</Translate>,
    description: (
      <Translate id="homepage.card.skills.desc">
        Install ready-made Bybit skills that help AI coding agents understand API patterns, common flows, and exchange-specific workflows faster.
      </Translate>
    ),
    link: 'https://github.com/bybit-exchange/skills',
    linkLabel: <Translate id="homepage.card.skills.link">Browse skills</Translate>,
    external: true,
    tags: [
      <Translate id="homepage.card.skills.tag.1">Agent-ready</Translate>,
      <Translate id="homepage.card.skills.tag.2">Workflow templates</Translate>,
      <Translate id="homepage.card.skills.tag.3">Faster onboarding</Translate>,
    ],
  },
  {
    title: <Translate id="homepage.card.sdks.title">SDKs</Translate>,
    description: (
      <Translate id="homepage.card.sdks.desc">
        Start faster with official SDKs for Python, Java, Go, and .NET when you need typed clients and language-native integration paths.
      </Translate>
    ),
    link: 'https://github.com/bybit-exchange/pybit/blob/master/examples/http_example_quickstart.py',
    linkLabel: <Translate id="homepage.card.sdks.link">pybit quickstart</Translate>,
    external: true,
    links: [
      {label: 'Python', href: 'https://github.com/bybit-exchange/pybit'},
      {label: 'TypeScript', href: 'https://www.npmjs.com/package/bybit-api'},
      {label: 'Java', href: 'https://github.com/bybit-exchange/bybit-java-api'},
      {label: 'C#', href: 'https://github.com/bybit-exchange/bybit.net.api'},
      {label: 'Go', href: 'https://github.com/bybit-exchange/bybit.go.api'},
    ],
  },
];

const secondaryCards = [
  {
    title: <Translate id="homepage.card.mechanics.title">Learn Exchange Mechanics</Translate>,
    description: (
      <Translate id="homepage.card.mechanics.desc">
        Understand order types, margin modes, settlement rules, and market structure before you ship trading logic into production.
      </Translate>
    ),
    link: 'https://www.bybit.com/en/help-center/homepage',
    linkLabel: <Translate id="homepage.card.mechanics.link">Help Center</Translate>,
    external: true,
  },
  {
    title: <Translate id="homepage.card.data.title">Historical Market Data</Translate>,
    description: (
      <Translate id="homepage.card.data.desc">
        Download public OHLCV and trade history datasets in CSV format for backtesting, research, and quantitative model development.
      </Translate>
    ),
    link: 'https://www.bybit.com/derivatives/en/history-data',
    linkLabel: <Translate id="homepage.card.data.link">Download data</Translate>,
    external: true,
  },
];

function Card({title, eyebrow, description, link, linkLabel, external, internal, tags = [], links = [], secondary = false}) {
  const linkProps = internal
    ? {to: link}
    : {href: link, ...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})};
  const LinkComponent = internal ? Link : 'a';

  return (
    <article className={clsx(styles.card, secondary && styles.secondaryCard)}>
      <div className={styles.cardAccent} aria-hidden="true" />
      <div className={styles.cardInner}>
        {eyebrow && <div className={styles.cardEyebrow}>{eyebrow}</div>}
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {tags.length > 0 && (
          <div className={styles.tagRow}>
            {tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        {links.length > 0 && (
          <div className={styles.linkCluster}>
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.miniLink}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className={styles.cardFooter}>
        <LinkComponent {...linkProps} className={styles.cardLink}>
          <span>{linkLabel}</span>
          <span className={styles.cardLinkArrow} aria-hidden="true">
            →
          </span>
        </LinkComponent>
      </div>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <div className={styles.sectionEyebrow}>
            <Translate id="homepage.section.eyebrow">Developer Toolkit</Translate>
          </div>
          <h2 className={styles.sectionTitle}>
            <Translate id="homepage.section.title">Build faster with Bybit tools</Translate>
          </h2>
          <p className={styles.sectionDescription}>
            <Translate id="homepage.section.desc">
              Start with the official API, plug in agent tooling, or pick an SDK that matches your stack.
            </Translate>
          </p>
        </div>

        <div className={styles.primaryGrid}>
          {primaryCards.map((card) => (
            <Card key={card.link} {...card} />
          ))}
        </div>

        <div className={styles.secondaryGrid}>
          {secondaryCards.map((card) => (
            <Card key={card.link} {...card} secondary />
          ))}
        </div>
      </div>
    </section>
  );
}
