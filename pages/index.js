import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Login from '../components/login/Login';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poli - Collaboration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Flex height="100vh" background="gray.100" alignItems="center" justifyContent="center">
          <Box shadow="md" background="white" borderWidth="1px">
            <Login />
          </Box>
        </Flex>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
