export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
export const applyAttrs = (ele, attrs) => {
  for (const [key, value] of Object.entries(attrs)) {
    const kebabCaseKey = key.replace(
      /[A-Z]/g,
      (d) => `-${d.toLocaleLowerCase()}`
    );

    ele.setAttribute(kebabCaseKey, value);
  }
};
