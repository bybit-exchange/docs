import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
      <Translate id="homepage.feature.unified.title">Unified V5 APIs</Translate>
    ),
    Svg: require('@site/static/img/power_plug_dark_mode.svg').default,
    description: (
      <Translate id="homepage.feature.unified.desc">
        Bybit's V5 suite unifies spot, derivatives, and options under a single
        API surface for a smooth and reliable integration experience.
      </Translate>
    ),
    link: '/v5/guide',
    linkLabel: (
      <Translate id="homepage.feature.unified.link">Read the guide</Translate>
    ),
    external: false,
    internal: true,
  },
  {
    title: (
      <Translate id="homepage.feature.mechanics.title">Learn Exchange Mechanics</Translate>
    ),
    Svg: require('@site/static/img/clipboard_light_mode.svg').default,
    description: (
      <Translate id="homepage.feature.mechanics.desc">
        Understand order types, margin modes, settlement rules, and market
        microstructure to fully maximize your API usage.
      </Translate>
    ),
    link: 'https://www.bybit.com/en/help-center/homepage',
    linkLabel: (
      <Translate id="homepage.feature.mechanics.link">Help Center</Translate>
    ),
    external: true,
  },
  {
    title: (
      <Translate id="homepage.feature.data.title">Historical Market Data</Translate>
    ),
    Svg: require('@site/static/img/candlesticks_dark_mode.svg').default,
    description: (
      <Translate id="homepage.feature.data.desc">
        Access comprehensive public OHLCV and tick data in CSV format to
        backtest strategies and build quantitative models.
      </Translate>
    ),
    link: 'https://www.bybit.com/derivatives/en/history-data',
    linkLabel: (
      <Translate id="homepage.feature.data.link">Download data</Translate>
    ),
    external: true,
  },
];

function Feature({Svg, title, description, link, linkLabel, external, internal}) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrap}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureBody}>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
          {link && internal && (
            <Link to={link} className={styles.featureLink}>
              {linkLabel} →
            </Link>
          )}
          {link && !internal && (
            <a
              href={link}
              className={styles.featureLink}
              {...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
            >
              {linkLabel} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
