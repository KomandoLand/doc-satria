import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hierarki RBAC Militer 11 Role',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Sistem otorisasi bertingkat merefleksikan rantai komando militer secara presisi:
        dari tingkat Brigif, Denma, Batalyon (Yonif), Kompi, Seksi, hingga Koramil kewilayahan.
      </>
    ),
  },
  {
    title: 'Manajemen Prajurit Lengkap',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Pelacakan biodata dan riwayat komprehensif: pangkat, jabatan, pendidikan umum &amp; militer,
        penugasan operasi &amp; tahorneg, uji kemampuan fisik/garjas/menembak, serta data keluarga.
      </>
    ),
  },
  {
    title: 'Alutsista & Teritorial Terpadu',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Monitoring inventaris alutsista &amp; mutasi senjata, pelacakan progres program satuan bertahap,
        serta geotagging dokumentasi kegiatan pembinaan teritorial (Binter) Koramil.
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
        <Heading as="h3">{title}</Heading>
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
