'use client';

import { useDisclosure } from '@mantine/hooks';
import {
  BackgroundImage,
  Box,
  Title,
  Text,
  Anchor,
  AppShell,
  Burger,
  Space,
  Group,
  UnstyledButton,
  TextInput,
  Textarea,
  SimpleGrid,
  Button,
  Paper,
} from '@mantine/core';

import { useForm } from '@mantine/form';

import classes from './Welcome.module.css';
import { theme } from '@/theme';

export function Welcome() {
  const [opened, { toggle }] = useDisclosure();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header withBorder={false}>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Text
                className={classes.navbarLogo}
                variant="gradient"
                component="span"
                gradient={{ from: 'purple', to: 'blue' }}
              >
                PulsaFi
              </Text>
              <Group ml="xl" gap={0} visibleFrom="sm">
                <UnstyledButton className={classes.control}>About</UnstyledButton>
                <UnstyledButton className={classes.control}>Contact</UnstyledButton>
              </Group>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4}>
          <UnstyledButton className={classes.control}>About</UnstyledButton>
          <UnstyledButton className={classes.control}>Contact</UnstyledButton>
        </AppShell.Navbar>

        <AppShell.Main>
          <Box mx="auto">
            <BackgroundImage src="/top-section.svg">
              <Space h="xl" />
              <Space h="xl" />
              <Space h="xl" />
              <Space h="xl" />
              <Space h="xl" />
              {/* c="dimmed" */}
              <Text ta="center" size="xl" maw={750} mx="auto" mt="xl">
                PulsFi makes it possible for anyone with a bank account to obtain credit
              </Text>
              <Space h="xl" />
              <Space h="xl" />
              <Space h="xl" />
              <Space h="xl" />
              <Space h="xl" />
            </BackgroundImage>
          </Box>

          <Paper shadow="xl" withBorder p="xl" maw={800} mx="auto" mt={50} mb={50}>
            <form onSubmit={form.onSubmit(() => {})}>
              <Title
                order={2}
                size="h1"
                style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                fw={900}
                ta="center"
              >
                Get in touch
              </Title>

              <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  name="name"
                  variant="filled"
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  name="email"
                  variant="filled"
                  {...form.getInputProps('email')}
                />
              </SimpleGrid>

              <TextInput
                label="Subject"
                placeholder="Subject"
                mt="md"
                name="subject"
                variant="filled"
                {...form.getInputProps('subject')}
              />
              <Textarea
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
                {...form.getInputProps('message')}
              />

              <Group justify="center" mt="xl">
                <Button type="submit" size="md">
                  Send message
                </Button>
              </Group>
            </form>
          </Paper>
        </AppShell.Main>

        {/* Images Provided By: <a href="https://www.freepik.com/free-vector/blue-neon-synthewave-patterned-background-vector_34101053.htm#page=2&query=finance%20dark%20purple&position=7&from_view=search&track=ais&uuid=bb204f72-646c-409c-8386-122859166551">Image by rawpixel.com</a> on Freepik */}
        {/* <a href="https://www.freepik.com/free-vector/stylish-blue-wavy-lines-abstract-background-design_34386344.htm#page=2&query=finance%20dark%20purple&position=1&from_view=search&track=ais&uuid=8eb6436c-4a1b-4d90-bde2-d32414f527a3">Image by flatart</a> on Freepik */}
      </AppShell>
    </>
  );
}
