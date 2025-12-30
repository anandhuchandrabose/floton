export const useViewTransition = () => {
  const navigateWithTransition = (href) => {
    if (!href) return;

    if (href === "/" || href === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    console.warn(
      `[navigateWithTransition] Navigation to "${href}" is not wired in the Vite build.`
    );
  };

  return { navigateWithTransition };
};
