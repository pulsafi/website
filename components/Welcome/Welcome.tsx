'use client';

import {
  BackgroundImage,
  Box,
  Title,
  Text,
  AppShell,
  Grid,
  SimpleGrid,
  Paper,
  Card,
  Image,
  Center,
  useMantineTheme,
  Stack,
} from '@mantine/core';

import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';

import classes from './Welcome.module.css';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../app/db';

const sendFormSubmission = async (formContent: any) => {
  // e.preventDefault();
  // console.log('about to try');

  try {
    const docRef = await addDoc(collection(db, 'interested-users'), {
      ...formContent,
    });
    // console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    // console.error('Error adding document: ', e);
  }
};

const createDocRef = (form: any) =>
  addDoc(collection(db, 'interested-users'), {
    message: 'form.values.message there',
    email: 'form.values.email there',
    name: 'form.values.name there',
  });

interface CarouselCardProps {
  icon: string;
  title: string;
  caption: string;
}

function CarouselCard({ icon, title, caption }: CarouselCardProps) {
  return (
    <Paper
      withBorder
      shadow="md"
      px={15}
      py={15}
      maw={800}
      // my={15}
      radius="lg"
      className={classes.carouselCard}
    >
      <Text
        className={classes.logoWhite}
        ta="center"
        mx="auto"
        component="span"
        variant="gradient"
        gradient={{ from: 'blue', to: 'purple' }}
      >
        {icon}
      </Text>
      <Text ta="center" mx="auto" className={classes.stepCardTitle}>
        {title}
      </Text>
      <Text ta="center" mx="auto" className={classes.stepCardBody}>
        {caption}
      </Text>
    </Paper>
  );
}

const carouselItems = [
  {
    icon: '1.',
    title: 'Access PulsaFi via Mobile App or Website',
    caption:
      'Our application will be identical across all iOS, Android, and Mac devices, as well as any web browser.',
  },
  {
    icon: '2.',
    title: 'Link Bank Account',
    caption:
      'In order for PulsaFi to generate a creditworthiness score, at least one account must be linked. You may link as many accounts as you would like.',
  },
  {
    icon: '3.',
    title: 'Analyze Transations',
    caption:
      'This is where PulsaFi works its magic. We will analyze your transaction data with robust machine learning and give you a score.',
  },
  {
    icon: '4.',
    title: 'Apply For Credit Products',
    caption:
      'After receiving your score, you will be able to apply to credit products of your choice!',
  },
];

export function Welcome() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = carouselItems.map((item) => <CarouselCard key={item.title} {...item} />);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
    },
  });

  return (
    <AppShell>
      <AppShell.Header className={classes.header} withBorder={false}>
        <Text
          className={classes.logo}
          mx="auto"
          component="span"
          variant="gradient"
          gradient={{ from: 'blue', to: 'purple' }}
        >
          PulsaFi
        </Text>
      </AppShell.Header>
      <AppShell.Main>
        <BackgroundImage src="/wave5.svg">
          <Box className={classes.lightBox}>
            <Box pt={100} pb={125}>
              <Title className={classes.title} ta="center" pb={25}>
                <Text inherit component="span">
                  Get Credit Using Just Your Bank Account — It's That Simple
                </Text>
              </Title>
              <Text className={classes.subtitle} ta="center" mx="auto">
                PulsaFi utilizes machine learning to generate creditworthiness metrics based on bank
                transactions and alternative data
              </Text>
            </Box>
          </Box>
        </BackgroundImage>
        <Box className={classes.darkBox}>
          <Box pt={50} pb={50}>
            <Text className={classes.logo} mb={25}>
              The Problem
            </Text>
            <Text maw={1000} mx="auto" className={classes.stepCardBody}>
              When immigrants arrive in the United States, their immigrations status prevents them
              from accessing the financial tools they need to advance in this country. Though they
              may have credit histories in their home countries, and be creditworthy people, they
              must start from scratch in the United States. <br /> <br />
              Even for necessities — like work equipment, car loans, etc — immigrants often have to
              look for co-signers because banks have no data to determine their creditworthiness.{' '}
              <br /> <br />
              This is where PulsaFi comes in.
            </Text>
          </Box>
        </Box>
        <BackgroundImage src="/wave4.svg">
          <Box className={classes.lightBox}>
            <Box pt={50} pb={50}>
              <Text className={classes.logoWhite} mb={25}>
                How It Works
              </Text>
              <Grid grow>
                <Grid.Col span={1} />
                <Grid.Col span={10}>
                  <Stack align="center" justify="center" gap="xs">
                    {slides}
                  </Stack>
                </Grid.Col>
                <Grid.Col span={1} />
              </Grid>
            </Box>
          </Box>
        </BackgroundImage>
        <Box className={classes.darkBox}>
          <Box pt={50} pb={50}>
            <Text className={classes.logo} mb={25}>
              Who We Are
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 3 }}>
              <Center>
                <Card className={classes.card} shadow="lg" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image src="/zack.jpeg" height={350} />
                  </Card.Section>

                  <Text className={classes.cardTitle}>Zackery Atlas</Text>
                  <Text className={classes.cardSubtitle}>Founder & CEO</Text>
                  <Text className={classes.bodyItalic}>
                    BS in Business Administration, UC Berkeley HAAS, 2025
                  </Text>
                  <Text className={classes.body}>6 years at JP Morgan Chase and Wells Fargo</Text>
                  <Text className={classes.bodyHighlighted}>zack [at] pulsafi [dot] com</Text>
                </Card>
              </Center>

              <Center>
                <Card className={classes.card} shadow="lg" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image src="/jesus.jpg" height={350} />
                  </Card.Section>

                  <Text className={classes.cardTitle}>Jesus Villalobos</Text>
                  <Text className={classes.cardSubtitle}>Co-founder & CTO</Text>
                  <Text className={classes.bodyItalic}>
                    BS in Electrical Engineering and Computer Sciences, UC Berkeley College of
                    Engineering, 2024
                  </Text>
                  <Text className={classes.body}>
                    Machine Learning, Alpha Generation and ETF's At BlackRock
                  </Text>
                  <Text className={classes.bodyHighlighted}>jesus [at] pulsafi [dot] com</Text>
                </Card>
              </Center>

              <Center>
                <Card className={classes.card} shadow="lg" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image src="/justin.jpg" height={350} />
                  </Card.Section>

                  <Text className={classes.cardTitle}>Justin Gukhyun Cho, Ph.D.</Text>
                  <Text className={classes.cardSubtitle}>Advisor</Text>
                  <Text className={classes.bodyItalic}>
                    Professor Emeritus, Business Administration. Hawaii Pacific University, Honolulu
                  </Text>
                  <Text className={classes.body}>
                    Previous Advisor: South Korean Presidential Committee for Government Innovation,
                    Alcatel Korea, SK Telecom, SK Hynix
                  </Text>
                </Card>
              </Center>
            </SimpleGrid>
          </Box>
        </Box>
        <BackgroundImage src="/wave2.svg">
          <Box className={classes.lightBox}>
            <Box pt={50} pb={50}>
              <Paper shadow="xl" withBorder p="xl" maw={800} mx="auto">
                <Text className={classes.formTitle} ta="center" pt={25}>
                  Interested in learning more?
                </Text>

                <Text ta="center" pt={25}>
                  Send us an email and we'll keep you updated on PulsaFi's development! <br />
                  <br /> Reach us at:{' '}
                  <Text span className={classes.highlighted}>
                    dev [at] pulsafi [dot] com
                  </Text>
                </Text>
              </Paper>
            </Box>
          </Box>
        </BackgroundImage>

        <Box className={classes.darkBox} ta="center">
          <a
            className={classes.imageAttribution}
            href="https://www.freepik.com/free-vector/blue-neon-synthewave-patterned-background-vector_34101053.htm#page=2&query=finance%20dark%20purple&position=7&from_view=search&track=ais&uuid=bb204f72-646c-409c-8386-122859166551"
          >
            Image by rawpixel.com on Freepik
          </a>{' '}
          <a
            className={classes.imageAttribution}
            href="https://www.freepik.com/free-vector/stylish-blue-wavy-lines-abstract-background-design_34386344.htm#page=2&query=finance%20dark%20purple&position=1&from_view=search&track=ais&uuid=8eb6436c-4a1b-4d90-bde2-d32414f527a3"
          >
            Image by flatart on Freepik
          </a>{' '}
          <a
            className={classes.imageAttribution}
            href="https://www.freepik.com/free-vector/colorful-shiny-wave-with-lines-curved-wavy-line-smooth-stripe-design-element_34386256.htm#query=purple%20lines%20black%20background&position=48&from_view=search&track=ais&uuid=f4b6d5a4-3170-437a-af23-fe4643ed057e"
          >
            Image by flatart on Freepik
          </a>{' '}
          <a
            className={classes.imageAttribution}
            href="https://www.freepik.com/free-vector/abstract-blue-color-technology-line-wave-background_34386093.htm#query=purple%20lines%20black%20background&position=31&from_view=search&track=ais&uuid=f4b6d5a4-3170-437a-af23-fe4643ed057e"
          >
            Image by flatart on Freepik
          </a>{' '}
          <a
            className={classes.imageAttribution}
            href="https://www.freepik.com/free-vector/creative-line-art-vector-illustration-eps-10-design-elements-created-using-blend-tool_34385550.htm#query=purple%20lines%20black%20background&position=27&from_view=search&track=ais&uuid=f4b6d5a4-3170-437a-af23-fe4643ed057e"
          >
            Image by flatart on Freepik
          </a>{' '}
          <a
            className={classes.imageAttribution}
            href="https://www.freepik.com/free-vector/creative-line-art-vector-illustration-eps-10-design-elements-created-using-blend-tool_34386059.htm#query=purple%20lines%20black%20background&position=40&from_view=search&track=ais&uuid=f4b6d5a4-3170-437a-af23-fe4643ed057e"
          >
            Image by flatart on Freepik
          </a>{' '}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
