import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Presensi 3-in-1 & Audio TTS',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Mendukung QR Code Scanner, tap kartu RFID via USB reader, serta Face Recognition & Camera Capture.
        Dilengkapi pengumuman suara otomatis (Edge-TTS API & browser Web Speech API) saat scan berhasil.
      </>
    ),
  },
  {
    title: '7 Role-Based Multi-Dashboard',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dibangun di atas CodeIgniter 4 & Shield dengan 7 hak akses terisolasi: Superadmin, Admin, Kepala Sekolah,
        Guru/Wali Kelas, Orang Tua, Alumni, dan Petugas Scanner Gerbang.
      </>
    ),
  },
  {
    title: 'Notifikasi WA & PWA Standalone',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Integrasi notifikasi instan via 5 Gateway WhatsApp (Fonnte, OpenWA, ApiMe, Evolution API, wuzapi) dengan mode acak auto-rotasi,
        serta Progressive Web App (PWA) yang dapat dipasang di Android, iOS, dan Desktop.
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
