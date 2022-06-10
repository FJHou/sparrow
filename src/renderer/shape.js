import { applyAttrs, createSVGElement, mount } from './utils';

export const shape = (type, context, attrs) => {
  const { group } = context;
  const el = createSVGElement(type);

  applyAttrs(el, attrs);

  mount(group, el);

  return el;
};

export const line = (context, attrs) => {
  return shape('line', context, attrs);
};

export const rect = (context, attrs) => {
  const { width, height, x, y } = attrs;

  return shape('rect', context, {
    ...attrs,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  });
};

export const circle = (context, attrs) => {
  return shape('circle', context, attrs);
};

export const text = (context, attrs) => {
  const { text, ...rest } = attrs;
  const textEle = shape('text', context, rest);

  textEle.textContent = text;

  return textEle;
};

export const path = (context, attrs) => {
  const { d } = attrs;

  return shape('path', context, { ...attrs, d: d.flat().join(' ') });
};
