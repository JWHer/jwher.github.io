import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  date: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'MLOps Developer',
    date: 'September 2021 - Current',
    // Svg: require('@site/static/img/about-me/macintosh.svg').default,
    description: (
      <>
        ML system integration, Orchestrate the steps in ML, Automation&nbsp;
        <br />
        ∙ Full stack MLOps developer responsible for end-to-end data ingestion, training, deployment lifecycle.
        <br />
        ∙ Prototype development and commercialization
        <br />
        ∙ Drive best practice implementation for across company
        <br /><br />
        <p style={{fontWeight:"bold"}}>Skills:&nbsp;
          <Link href="https://jwher.github.io/categories/server/fastapi" className={styles.btn__warning}>FastAPI</Link>
          <Link href="https://jwher.github.io/categories/mlops/mlflow" className={styles.btn__warning}>MLflow</Link>
          <Link href="https://jwher.github.io/categories/pytorch" className={styles.btn__warning}>Pytorch</Link>
          <Link href="https://jwher.github.io/categories/web/angular" className={styles.btn__warning}>Angular</Link>
          <Link href="https://jwher.github.io/categories/ml/deepstream" className={styles.btn__warning}>Deepstream</Link>
        </p>
      </>
    ),
  },
  {
    title: 'MLOps Engineer',
    date: 'March 2021 - September 2021',
    Svg: require('@site/static/img/about-me/wrench.svg').default,
    description: (
      <>
        MLOps product survey and implementation for labeling toolset&nbsp;
        <br />
        ∙ Adopting kubernetes for scalable infrastructure
        <br />
        ∙ Automate training pipeline for pseudo-labeling feature
        <br />
        ∙ Deploy model using serverless framework
        <br /><br />
        <p style={{fontWeight:"bold"}}>Skills:&nbsp;
          <Link href="/categories/kubernetes" className={styles.btn__success}>Kubernetes</Link>
          <Link href="/categories/kubernetes/kubeflow" className={styles.btn__success}>Kubeflow</Link>
          <Link href="/categories/ml/openvino" className={styles.btn__warning}>OpenVINO</Link>
          <Link href="/categories/ml/nuclio" className={styles.btn__success}>Nuclio</Link>
          <Link href="/categories/web/angular" className={styles.btn__warning}>React</Link>
        </p>
      </>
    ),
  },
  {
    title: 'Java Backend Developer',
    date: 'January 2020 - February 2020',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Winter internship
        <br />
        ∙ Survey top blockchain trends
        <br />
        ∙ Develope logic to find a specific transaction on distributed ledger
        <br /><br />
        <p style={{fontWeight:"bold"}}>Skills:&nbsp;
          <Link href="/categories/java/spring" className={styles.btn__success}>Spring</Link>
          <Link href="/categories/web/node" className={styles.btn__success}>Node.js</Link>
        </p>
      </>
    ),
  },
  {
    title: 'Education',
    date: 'March 2015 - February 2021',
    Svg: require('@site/static/img/about-me/graduation-cap.svg').default,
    description: (
      <>
        Dongguk University. seoul, Korea
        <br />
        ∙ Received a bachelor's degree in Computer Science
        <br />
        ∙ Followed my passion in cloud computing classes
        <br />
        ∙ Worked as an assistant for programming language and parallel computing
        <br />
        ∙ Military service from Feb. 2016 until Nov. 2017
        <br /><br />
        <p style={{fontWeight:"bold"}}>Skills:&nbsp;
          <Link href="/categories/cs/algorithm" className={styles.btn__warning}>Algorithm</Link>
          <Link href="/categories/cs/design-pattern" className={styles.btn__warning}>Design Pattern</Link>
          <Link href="/categories/cs/operating-system" className={styles.btn__warning}>OS</Link>
          <Link href="/categories/cs/concurrent-programming" className={styles.btn__warning}>Concurrent Programming</Link>
        </p>
      </>
    ),
  },
  // {
  //   title: 'Powered by React',
  //   date: '',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ title, date, Svg, description }: FeatureItem) {
  return (
    <div className={styles.timeline}>
      <div className={styles.timeline__icon}>
        <span className={styles.year}>{date}</span>
      </div>
      <div className={styles.timeline__content}>
        {Svg ?
          <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div> : <></>
        }
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AboutMe(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <br />
        <h1 className="card-title">About Me</h1>
        <br />
        <div className={styles.card__body}>
          <h3>My name is Jeongwon Her. I have the following qualities</h3>
          ∙ Back-end programming languages: Python, Java, C#
          <br/>
          ∙ Back-End Framework: .NET, Spring Framework, FastAPI
          <br/>
          ∙ Front-End Framework: Angular, React
          <br/>
          ∙ Databases: MySQL, PostgreSQL, MongoDB
          <br/>
          ∙ Version control: Git
          <br/>
          ∙ DevOps, Docker, Kubernetes
          <br/><br/>
          ∙ Bachelor's degree in Computer Science
          <br />
          ∙ Passionate about automating repetitive tasks especially machine learning
          <br />
          ∙ Currently working as mlops developer
          <br /><br />
          ✉️ hacel@naver.com
          <br />
        </div>
        <br />
      </div>
      <hr></hr>
      <div className="container">
        <h1 className="card-title">Timeline</h1>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className={styles.main__timeline}>
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{padding: 0, maxWidth: "none"}}>
        <div className={styles.rainbow}>
          <div>Come unto me, all ye that labour and are heavy laden, and I will give you rest</div>
        </div>
      </div>
    </section>
  );
}
