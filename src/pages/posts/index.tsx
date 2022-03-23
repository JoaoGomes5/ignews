import Head from 'next/head';
import React from 'react';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>  
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de Abril de 2022</time>
            <strong>The Hard Things About Front-End Development</strong>
            <p>When I started programming there was a notion that front-end development is easy. At the time it was little more than arranging HTML elements, styling them, and making AJAX calls. jQuery and Bootstrap were everyone’s default tech stack.</p>
          </a>
          <a href="#">
            <time>12 de Abril de 2022</time>
            <strong>The Hard Things About Front-End Development</strong>
            <p>When I started programming there was a notion that front-end development is easy. At the time it was little more than arranging HTML elements, styling them, and making AJAX calls. jQuery and Bootstrap were everyone’s default tech stack.</p>
          </a>
          <a href="#">
            <time>12 de Abril de 2022</time>
            <strong>The Hard Things About Front-End Development</strong>
            <p>When I started programming there was a notion that front-end development is easy. At the time it was little more than arranging HTML elements, styling them, and making AJAX calls. jQuery and Bootstrap were everyone’s default tech stack.</p>
          </a>
          <a href="#">
            <time>12 de Abril de 2022</time>
            <strong>The Hard Things About Front-End Development</strong>
            <p>When I started programming there was a notion that front-end development is easy. At the time it was little more than arranging HTML elements, styling them, and making AJAX calls. jQuery and Bootstrap were everyone’s default tech stack.</p>
          </a>
        </div>
      </main>
    </>
  );
}