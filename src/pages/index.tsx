import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { Box, Button, Grid } from "@mui/material";
import { isMobile } from "react-device-detect";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero", styles.heroBanner)}>
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

        {isMobile && (
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={6} className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/category/user-guide"
                style={{ width: "100%", textAlign: "center" }} // Optional: Ensures full width and centered text
              >
                User Guide
              </Link>
            </Grid>
            {/* 
            <Grid item xs={12} sm={6} md={6} className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/category/resources--pricing"
                style={{ width: "100%", textAlign: "center" }} // Optional: Ensures full width and centered text
              >
                Resources & Pricing
              </Link>
            </Grid> */}

            <Grid item xs={12} sm={6} md={6} className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/privacy-policy"
                style={{ width: "100%", textAlign: "center" }} // Optional: Ensures full width and centered text
              >
                Privacy Policy
              </Link>
            </Grid>
          </Grid>
        )}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Docs`}
      description="Learn about parcel tracer to master managing delivery cycles"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
