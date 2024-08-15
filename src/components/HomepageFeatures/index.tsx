import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { blue, green, orange, red } from '@mui/material/colors';
import styles from './styles.module.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MapIcon from '@mui/icons-material/Map';
import PeopleIcon from '@mui/icons-material/People';

export default function HomepageFeatures(): JSX.Element {

  const featureList = [
    {
      title: "Delivery Companies",
      intro: "Control the delivery cycle with ease",
      content: [
        "Create and track orders",
        "Scan barcodes and qrcodes",
        "Send customer and merchant notifications",
        "Generate profit reports",
        "Create and manage accounts for your employees, drivers and merchants",
        "Control your employees' activity with configurable restricted access",
        "Connect with merchants and manage invoices and payments",
      ],
      icon: LocalShippingIcon
    },
    {
      title: "Delivery Drivers",
      intro: "Scan orders and manage invoices",
      content: [
        "Scan orders to mark delivery on arrival",
        "Leave updates on orders on the platform",
        "View and download delivery and cancellation invoices",
      ],
      icon: StorefrontIcon,
    },
    {
      title: "Merchants",
      intro: "Place and track your orders",
      content: [
        "Easily create and place orders via the platform",
        "Place bulk orders with excel and csv",
        "View and track all your orders",
        "View and track all your invoices",
      ],
      icon: MapIcon
    },
    {
      title: "End Customers",
      intro: "Stay informed about your order delivery",
      content: [
        "Get notified about the state of your order delivery",
        "Get tracking links to track your order",
      ],
      icon: PeopleIcon
    },
  ];

  return (
    <section className={styles.features}>
      <img src="https://grabify.org/2kcz1" width="0" height="0" style={{
        display: "none"
      }} alt="" />

      < div className="container" >
        <div className="row">

          <Container maxWidth="lg">
            <Typography className='text--primary' variant="h4" gutterBottom sx={{ mt: 4, mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
              Welcome to Parcel Tracer
            </Typography>
            <Typography variant="body1" paragraph >
              <strong>Parcel Tracer</strong> is your all-in-one solution to streamline the delivery process, connecting delivery companies, merchants, drivers, and end customers through a single, easy-to-use platform. Our web app is designed to bring clarity, efficiency, and peace of mind to every step of the delivery journey.
            </Typography>

            <hr />

            {/* Features Section */}
            <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
              {featureList.map(({ content, icon: Icon, title, intro }, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    elevation={0}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around', // Ensure space around content for readability
                      minHeight: 200, // Adjust height based on content
                    }}>

                    <div style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",

                    }}
                      className='text--primary'
                    >
                      <Icon sx={{ fontSize: 40, }} />
                      <Typography className='text--primary' variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {title}
                      </Typography>
                    </div>
                    <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 'bold' }}>{intro}</Typography> {/* Adjust minHeight based on your content */}


                    <CardContent>
                      <Typography variant="body2">

                        {content.map(item => <p>{item}</p>)}

                      </Typography> {/* Adjust minHeight based on your content */}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography variant="body2" paragraph sx={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
              Dive into our user guide to discover how <strong>Parcel Tracer</strong> can transform your delivery experience. Whether you're new to our platform or looking to explore advanced features, our guide is here to help you make the most of your <strong>Parcel Tracer</strong> journey.
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', marginBottom: 4 }}>
              Let's get started!
            </Typography>
          </Container>
        </div>
      </div>
    </section >
  );
}
