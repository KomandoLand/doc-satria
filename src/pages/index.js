import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p style={{maxWidth: '780px', margin: '0 auto 1.5rem', opacity: 0.9}}>
          Platform komando dan tata kelola militer modern berbasis CodeIgniter 4 &amp; PostgreSQL.
          Dilengkapi hierarki RBAC militer 11 role, manajemen lengkap data riwayat prajurit,
          inventaris senjata &amp; mutasi alutsista, serta analitik komando terpadu.
        </p>
        <div className={styles.buttons} style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Mulai Eksplorasi 🚀
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/guide/installation">
            Panduan Instalasi ⚙️
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/KomandoLand/apps">
            GitHub Komando ⚔️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Dokumentasi Resmi Sistem Informasi Manajemen Prajurit & Satuan Militer - Komando Satria">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
