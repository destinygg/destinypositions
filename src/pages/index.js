import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    num: 1,
    title: 'Get It From the Source',
    iconName: 'brain',
    description: (
      <>
        As a content creator, I am often misrepresented by people who disagree with me. Form an opinion about me <strong>based on my actual positions</strong>.
      </>
    ),
  },
  {
    num: 2,
    title: 'Nuance',
    iconName: 'comments',
    description: (
      <>
        The real world is complicated and the best answers are usually found between two extremes. Please take the time to understand the nuance involved in my positions.
      </>
    ),
  },
  {
    num: 3,
    title: 'Internet Discourse',
    iconName: 'tired',
    description: (
      <>
        Online political discourse has become increasingly unhealthy. I want debate to be grounded in facts and research. You can see some of the resources that I base my positions on here.
      </>
    ),
  },
];

function Feature({num, title, iconName, description}) {
  const iconStyles = `fa fa-${iconName} fa-stack-1x fa-inverse`;
  const circleStyles = `fa fa-circle fa-stack-2x accent${num}`;
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {iconStyles && (
        <div className="text--center">
          <br />
          <span className="fa-stack fa-3x">
            <i className={circleStyles}></i>
            <i className={iconStyles}></i>
          </span>
          <br /><br />
        </div>
      )}
      <h3 className="text--center">
        {title}
      </h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={useBaseUrl('img/dgg-logo.svg')} height="100px" />
          <br /><br />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Learn More
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
