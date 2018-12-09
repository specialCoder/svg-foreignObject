import SVG from 'svg.js';

SVG.ForiegnObject = function() {
  this.constructor(SVG.create('foreignObject'));
  this.type = 'foreignObject';
};
SVG.ForiegnObject.prototype = new SVG.Shape();
SVG.extend(SVG.ForiegnObject, {
  appendChild(child, attrs) {
    const newChild = typeof (child) === 'string' ? document.createElement(child) : child;
    if (typeof attrs === 'object') {
      const keys = Object.keys(attrs);
      keys.forEach((key) => {
        newChild[key] = attrs[key];
      });
    }
    this.node.appendChild(newChild);
    return this;
  },
  getChild(index) {
    return this.node.childNodes[index];
  },
});

SVG.extend(SVG.Container, {
  foreignObject(width, height) {
    return this.put(new SVG.ForiegnObject()).size(
      width === null ? 100 : width, height === null ? 100 : height,
    );
  },
});

export default SVG;
