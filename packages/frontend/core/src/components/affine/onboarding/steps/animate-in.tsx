import anime from 'animejs';
import { type CSSProperties, useEffect } from 'react';

import { Paper, type PaperProps } from '../curve-paper/paper';
import * as paperStyles from '../curve-paper/paper.css';
import type { ArticleOption } from '../types';
import * as styles from './animate-in.css';

interface AnimateInProps {
  paperProps?: PaperProps;
  article: ArticleOption;
  onFinished?: () => void;
}

const easing = 'spring(5, 100, 10, 0)';
const animeSync = (params: Parameters<typeof anime>[0]) => {
  return new Promise(resolve => {
    anime({ ...params, complete: () => resolve(null) });
  });
};

export const AnimateIn = ({
  article,
  paperProps,
  onFinished,
}: AnimateInProps) => {
  const { id: _id, location, enterOptions, brief } = article;
  const id = `onboardingMoveIn${_id}`;
  const segments = 4;

  const rotateX = enterOptions.curve / segments;

  useEffect(() => {
    Promise.all([
      animeSync({
        targets: `[data-id="${id}"] .${paperStyles.segment}[data-direction="up"]`,
        rotateX: [-rotateX, 0],
        easing,
        delay: enterOptions.delay,
      }),
      animeSync({
        targets: `[data-id="${id}"] ${paperStyles.segment}[data-direction="down"]`,
        rotateX: [rotateX, 0],
        easing,
        delay: enterOptions.delay,
      }),
    ])
      .then(() => {
        onFinished?.();
      })
      .catch(console.error);
  }, [enterOptions.delay, id, rotateX, onFinished]);

  const variables = {
    '--fromX': `${enterOptions.fromX}vw`,
    '--fromY': `${enterOptions.fromY}vh`,
    '--fromZ': `${enterOptions.fromZ}px`,
    '--toZ': `${enterOptions.toZ}px`,
    '--fromRotateX': `${enterOptions.fromRotateX}deg`,
    '--fromRotateY': `${enterOptions.fromRotateY}deg`,
    '--fromRotateZ': `${enterOptions.fromRotateZ}deg`,
    '--toRotateZ': `${enterOptions.toRotateZ}deg`,

    '--delay': `${enterOptions.delay}ms`,
    '--duration': enterOptions.duration,
    '--easing': enterOptions.easing,

    '--offset-x': `${location.x || 0}px`,
    '--offset-y': `${location.y || 0}px`,
  } as CSSProperties;

  const props = {
    ...paperProps,
    segments,
    content: brief,
    centerIndex: Math.min(segments - 1, Math.max(0, enterOptions.curveCenter)),
  };

  return (
    <div data-id={id} className={styles.moveIn} style={variables}>
      <Paper {...props} />
    </div>
  );
};
