import { article, articleWrapper, text, title } from '../curve-paper/paper.css';
import type { ArticleId, ArticleOption } from '../types';

const ids = ['0', '1', '2', '3', '4'] as Array<ArticleId>;

/** locate paper */
const paperLocations = {
  '0': {
    x: 0,
    y: 0,
  },
  '1': {
    x: -240,
    y: -100,
  },
  '2': {
    x: 240,
    y: -100,
  },
  '3': {
    x: -480,
    y: 40,
  },
  '4': {
    x: 480,
    y: 50,
  },
};

/** paper enter animation config */
const paperEnterAnimationOriginal = {
  '0': {
    curveCenter: 4,
    curve: 292,
    delay: 800,
    fromZ: 1230,
    fromX: -76,
    fromY: 100,
    fromRotateX: 185,
    fromRotateY: -166,
    fromRotateZ: 252,
    toZ: 0,
    // toX: 12,
    // toY: -30,
    toRotateZ: 6,
    duration: '2s',
    easing: 'ease',
  },
  '1': {
    curveCenter: 4,
    curve: 280,
    delay: 0,
    fromZ: 3697,
    fromX: 25,
    fromY: -93,
    fromRotateX: 331,
    fromRotateY: 360,
    fromRotateZ: -257,
    toZ: 0,
    // toX: -18,
    // toY: -28,
    toRotateZ: -8,
    duration: '2s',
    easing: 'ease',
  },
  '2': {
    curveCenter: 3,
    curve: 660,
    delay: 1700,
    fromZ: 57379,
    fromX: 2,
    fromY: -77,
    fromRotateX: 0,
    fromRotateY: 0,
    fromRotateZ: 0,
    toZ: 0,
    // toX: -3,
    // toY: -21,
    toRotateZ: 2,
    duration: '2s',
    easing: 'ease',
  },
  '3': {
    curveCenter: 4,
    curve: 260,
    delay: 1500,
    fromZ: 4303,
    fromX: -37,
    fromY: -100,
    fromRotateX: 360,
    fromRotateY: 360,
    fromRotateZ: 8,
    toZ: 0,
    // toX: -30,
    // toY: -9,
    toRotateZ: 2,
    duration: '2s',
    easing: 'ease',
  },
  '4': {
    curveCenter: 3,
    curve: 270,
    delay: 1571,
    fromZ: 1876,
    fromX: 65,
    fromY: 48,
    fromRotateX: 101,
    fromRotateY: 188,
    fromRotateZ: -200,
    toZ: 0,
    // toX: 24,
    // toY: -2,
    toRotateZ: 8,
    duration: '2s',
    easing: 'ease',
  },
};

export type PaperEnterAnimation = (typeof paperEnterAnimationOriginal)[0];
export const paperEnterAnimations = paperEnterAnimationOriginal as Record<
  any,
  PaperEnterAnimation
>;

/** Brief content */
const paperBriefs = {
  '0': (
    <div className={articleWrapper}>
      <article className={article}>
        <h1 className={title}>Breath of the Wild: Redefining Game Design</h1>
        <p className={text}>
          “With all the time you spend watching TV,” he tells me, “you could
          have written a novel by now.” It’s hard to disagree with the sentiment
          — writing a novel is undoubtedly a better use of time than watching TV
          — but what about the hidden assumption? Such comments imply that time
          is “fungible” — that time spent watching TV can just as easily be
          spent writing a novel. And sadly, that’s just not the case.
        </p>
      </article>
    </div>
  ),
  '1': (
    <div className={articleWrapper}>
      <article className={article}>
        <h1 className={title}>Learning with earning with retrieval practice</h1>
        <p className={text}>
          Are there any specific techniques to make the process of learning more
          effective?
        </p>
        <p className={text}>
          Students often re-read, underline, or highlight materials, thinking
          that it will help them learn better. But, the best method for really
          turning information into long-term memory is to use what is called
          ‘retrieval practice’.
        </p>
      </article>
    </div>
  ),
  '2': (
    <div className={articleWrapper}>
      <article className={article}>
        <h1 className={title}>
          Local-first software
          <br />
          You own your data, in spite of the cloud
        </h1>
        <p className={text}>
          Cloud apps like Google Docs and Trello are popular because they enable
          real-time collaboration with colleagues, and they make it easy for us
          to access our work from all of our devices. However, by centralizing
          data storage on servers, cloud apps also take away ownership and
          agency from users. If a service shuts down, the software stops
          functioning, and data created with that software is lost.
        </p>
      </article>
    </div>
  ),
  '3': (
    <div className={articleWrapper}>
      <article className={article}>
        <h1 className={title}>More Is Different</h1>
        <p className={text}>
          Broken symmetry and the nature of the hierarchical structure of
          science
        </p>
        <p className={text}>
          The reductionist hypothesis may still be a topic for controversy among
          philosophers, but among the great majority of active scientists I
          think it is accepted without questions. The workings of our minds and
          bodies, and of all the animate or inanimate matter of which we have
          any detailed knowledge, are assumed to be controlled by the same set
          of fundamental laws, which except under certain extreme conditions we
          feel we know pretty well.
        </p>
      </article>
    </div>
  ),
  '4': (
    <div className={articleWrapper}>
      <article className={article}>
        <h1 className={title}>HOWTO: Be more productive</h1>
        <p className={text}>
          “With all the time you spend watching TV,” he tells me, “you could
          have written a novel by now.” It’s hard to disagree with the sentiment
          — writing a novel is undoubtedly a better use of time than watching TV
          — but what about the hidden assumption? Such comments imply that time
          is “fungible” — that time spent watching TV can just as easily be
          spent writing a novel. And sadly, that’s just not the case.
        </p>
      </article>
    </div>
  ),
};

export const articles: Record<ArticleId, ArticleOption> = ids.reduce(
  (acc, id) => {
    return {
      ...acc,
      [id]: {
        id,
        location: paperLocations[id],
        enterOptions: paperEnterAnimations[id],
        brief: paperBriefs[id],
      } satisfies ArticleOption,
    };
  },
  {} as Record<ArticleId, ArticleOption>
);
