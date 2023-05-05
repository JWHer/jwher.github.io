import React from "react"
import Link from '@docusaurus/Link';

import styles from "./styles.module.scss"

export default function CurriculumVitae(): JSX.Element {
  return (
    <div className={styles.page__wrap}>
      <img
        src="/img/about-me/jeongwon-her.jpg"
        alt="Photo of Jeongwon Her"
        className={styles.pic}
      />

      <div>
        <h1 className={styles.page__header1}>Jeongwon Her</h1>

        <p className={styles.page__text}>
          {/* Cell: <span>555-666-7777</span> */}
          {/* <br /> */}
          Email: {" "}
          <a href="mailto:hacell2@gmail.com" className={styles.page__link}>
            hacell2@gmail.com
          </a>
        </p>
      </div>

      <div className={styles.objective}>
        <p className={styles.page__text}>
          Hi, I'm Jeongwon Her. I'm a software engineer in the MLOps team, Upstage.
          My research interest is <b>parallel programming</b> from <b>embedded devices</b> to <b>HPC</b>.
          Outside of research, I like to spend my time gardening, playing violin, and feeding&care.

          I am seeking a career that fits my professional skills, and personality.<br/><br/>
          For more, please look up my <a className={styles.page__link}>Curriculum Vitae.</a>
        </p>
        <a className={styles.page__link} onClick={() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
          })
        }}>
          Why do I believe in Jesus?
        </a>
      </div>

      <div className={styles.clear}></div>

      <dl className={styles.dl}>
        <dd className={`${styles.clear} ${styles.page__desc}`}></dd>

        <dt className={styles.page__term}>Education</dt>
        <dd className={styles.page__desc}>
          <h2 className={styles.page__header2}>
            Bachelor's degree in Computer Science and Engineering
          </h2>
          <p className={styles.page__text}>
            Dongguk University - Seoul, Korea
            <br />
            Followed my passion in <Link href="/posts/tags/parallel-computing">parallel computing</Link> classes,
            Worked as an assistant for programming language and parallel computing
          </p>
        </dd>

        <dd className={`${styles.clear} ${styles.page__desc}`}></dd>

        <dt className={styles.page__term}>Skills</dt>
        <dd className={styles.page__desc}>
          <h2 className={styles.page__header2}>Office skills</h2>
          <p className={styles.page__text}>
            Skill in project management methodologies, including <Link href="/posts/agile">Agile</Link> and Waterfall.
            Knowledge of how to design systems that meet business requirements,
            Developed and executed test plans and test cases to ensure quality of systems.
          </p>

          <h2 className={styles.page__header2}>Technical skills</h2>
          <p className={styles.page__text}>
            As a full stack developer,
            I have experience with <Link href="/posts/welcome-to-kubernetes">Kubernetes</Link> on HPC servers,
            PyTorch and ONNX/TensorRT with deepstream for <Link href="/posts/tags/paper">machine learning</Link> frameworks,
            and Django/FastAPI for web frameworks.
            In addition, I have skills in <Link href="/posts/ngrx">Angular</Link>, React, and Vue for front-end development.
          </p>
        </dd>

        <dd className={`${styles.clear} ${styles.page__desc}`}></dd>

        <dt className={styles.page__term}>Experience</dt>
        <dd className={styles.page__desc}>
          <h2 className={styles.page__header2}>
            <Link href="https://www.upstage.ai/">Upstage</Link>
            <span className={styles.page__right}>
              Software Development / Remote / 2022 - Current
            </span>
          </h2>
          <ul className={styles.page__ulist}>
            <li>
              Inspired and won highest peasant death competition among servants
            </li>
            <li>Helped coordinate managers to grow cult following</li>
            <li>Provided untimely deaths to all who opposed</li>
          </ul>

          <h2 className={styles.page__header2}>
            <Link href="http://www.snuailab.com/">SNUAILAB</Link>
            <span className={styles.page__right}>
              MLOps Development / Seoul, Korea / 2021 - 2022
            </span>
          </h2>
          <ul className={styles.page__ulist}>
            <li>Full stack MLOps developer responsible for end-to-end data ingestion, training, deployment lifecycle.</li>
            <li>Prototype development and commercialization</li>
            <li>Drive best practice implementation for across company</li>
          </ul>
        </dd>

        <dd className={`${styles.clear} ${styles.page__desc}`}></dd>

        {/* <dt className={styles.page__term}>Hobbies</dt>
        <dd className={styles.page__desc}>
          Gardening
        </dd> */}

        {/* <dd className={`${styles.clear} ${styles.page__desc}`}></dd> */}

        <dt className={styles.page__term}>References</dt>
        <dd className={styles.page__desc}>
          Available on request
          <p>
            For more, please look up my <a href="/files/jeongwon-her.pdf">Curriculum Vitae</a>.
          </p>
        </dd>

        <dd className={`${styles.clear} ${styles.page__desc}`}></dd>
      </dl>

      <div className={styles.clear}></div>

      <div className={styles.page__header2}>
        <span className={styles.page__right}>
          Last Update: May 2023
        </span>
      </div>
    </div>
  )
}
