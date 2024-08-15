import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { Box } from '@mui/material';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">

        <Box
          component="img"
          sx={{
            // height: 300,
            // width: 450,
            maxHeight: { xs: 130, md: 167 },
            maxWidth: { xs: 225, md: 450 },
          }}
          alt="Parcel Tracer"
          src={String(siteConfig.themeConfig.image)}
        />


        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem"
        }}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/user-guide/intro">
              Getting Started
            </Link>
          </div>

          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/user-guide/intro">
              Training Sessions
            </Link>
          </div>

        </div>

        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/resources-and-pricing/pricing">
            Pricing
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Docs`}
      description="Learn about parcel tracer to master managing delivery cycles">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
