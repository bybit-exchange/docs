import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Unified APIs',
    Svg: require('@site/static/img/power_plug_dark_mode.svg').default,
    description: (
      <>
        Bybit's latest v3 suite of APIs allow for a smooth and easy
        integration.
      </>
    ),
  },
  {
    title: 'Learn Exchange Mechanisms',
    Svg: require('@site/static/img/clipboard_light_mode.svg').default,
    description: (
      <>
        Learn the intricate details of Bybit's market rules to fully
        maximise your API usage.
      </>
    ),
  },
  {
    title: 'Historical Market Data',
    Svg: require('@site/static/img/candlesticks_dark_mode.svg').default,
    description: (
      <>
        Get comprehensive public market data in CSV format
        to speedily backtest and build strategies.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
