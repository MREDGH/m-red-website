import "@testing-library/jest-dom/vitest";

// Mock IntersectionObserver globally for all tests
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(private callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    // Immediately trigger as intersecting for test visibility
    setTimeout(() => {
      this.callback(
        [
          {
            isIntersecting: true,
            target: document.createElement("div"),
            intersectionRatio: 1,
            boundingClientRect: {} as DOMRectReadOnly,
            intersectionRect: {} as DOMRectReadOnly,
            rootBounds: null,
            time: Date.now(),
          },
        ] as IntersectionObserverEntry[],
        this
      );
    }, 0);
  }

  observe(): void {
    // no-op
  }

  unobserve(): void {
    // no-op
  }

  disconnect(): void {
    // no-op
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver = MockIntersectionObserver;
