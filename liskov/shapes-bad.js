'use strict';

class Rectangle {
  setHeight(height) {
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  getArea() {
    return height * width;
  }
}

class Square extends Rectangle {
  setHeight(height) {
    this.height = height;
    this.width = height;
  }

  setWidth(width) {
    this.width = width;
    this.height = height;
  }
}
