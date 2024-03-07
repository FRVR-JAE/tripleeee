import React, { Component } from 'react';

interface ImageSliderProps {}

interface ImageSliderState {
  currentIndex: number;
}

interface ImageRef {
  current: HTMLImageElement | null;
}

class ImageSlider extends Component<ImageSliderProps, ImageSliderState> {
  imageRefs: React.RefObject<HTMLImageElement>[];
  intervalId: NodeJS.Timeout | null;

  constructor(props: ImageSliderProps) {
    super(props);

    this.imageRefs = Array.from({ length: 2 }).map((_, i) => React.createRef<HTMLImageElement>());
    this.intervalId = null;

    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.showNext();
    }, 5000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  showNext() {
    const { imageRefs, state } = this;

    imageRefs[state.currentIndex].current?.classList.remove('active');

    this.setState((prevState) => {
      const nextIndex = (prevState.currentIndex + 1) % imageRefs.length;
      return { currentIndex: nextIndex };
    });

    imageRefs[this.state.currentIndex].current?.classList.add('active');
  }

  render() {
    const { imageRefs } = this;

    return (
      <div className="image-slider">
        <img
          ref={imageRefs[0]}
          src="https://images.unsplash.com/photo-1623475173140-ad2f0369ca92?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={this.state.currentIndex === 0 ? 'active' : ''}
        />
        <img
          ref={imageRefs[1]}
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={this.state.currentIndex === 1 ? 'active' : ''}
        />
      </div>
    );
  }
}

export default ImageSlider;
