
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title> OSG List - Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reprehenderit rem exercitationem praesentium molestias animi mollitia hic, eos quos ea aliquam illum voluptatem, quod a. Laboriosam accusantium tempore culpa eum.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsum labore illum aliquam minus iste voluptas et, quibusdam aut. Temporibus repellendus ut hic quia. Nesciunt ullam vero maiores adipisci quia?</p>
        <Link href="/osg">
          <a className={styles.btn}>See OSG Listing</a>
        </Link>

      </div>
    </>
  )
}
