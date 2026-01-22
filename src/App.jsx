import "./index.css";
import "./preloader.css";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Nav from "@/components/Nav/Nav";

let isInitialLoad = true;
gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function App() {
  const tagsRef = useRef(null);
  const metricsRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [loaderAnimating, setLoaderAnimating] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      if (loaderAnimating) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [lenis, loaderAnimating]);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    if (showPreloader) {
      setLoaderAnimating(true);
      tl.to(".spinner", {
        opacity: 0,
        duration: 0.3,
      });

      tl.to(
        ".word h1",
        {
          y: "0%",
          duration: 1,
        },
        "<"
      );

      tl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () =>
          gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 }),
      });

      tl.to("#word-1 h1", {
        y: "100%",
        duration: 1,
        delay: 0.3,
      });

      tl.to(
        "#word-2 h1",
        {
          y: "-100%",
          duration: 1,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () => {
            gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" });
          },
          onComplete: () => {
            gsap.set(".loader", { pointerEvents: "none" });
            setLoaderAnimating(false);
          },
        },
        "<"
      );
    }
  }, [showPreloader]);

  useGSAP(
    () => {
      if (!tagsRef.current) return;

      const tags = tagsRef.current.querySelectorAll(".what-we-do-tag");
      gsap.set(tags, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: tagsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(tags, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: tagsRef }
  );

  useGSAP(
    () => {
      if (!metricsRef.current) return;

      const valueNodes = metricsRef.current.querySelectorAll(".metric-value");
      if (!valueNodes.length) return;

      valueNodes.forEach((node) => {
        const suffix = node.dataset.suffix || "";
        const prefix = node.dataset.prefix || "";
        node.textContent = `${prefix}0${suffix}`;
      });

      valueNodes.forEach((node, index) => {
        const target = Number.parseFloat(node.dataset.count || "0");
        const suffix = node.dataset.suffix || "";
        const prefix = node.dataset.prefix || "";
        const decimals = Number(node.dataset.decimals || 0);
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: metricsRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            const current = decimals
              ? counter.value.toFixed(decimals)
              : Math.round(counter.value).toString();
            node.textContent = `${prefix}${current}${suffix}`;
          },
        });
      });
    },
    { scope: metricsRef }
  );

  return (
    <>
      {showPreloader && (
        <div className="loader">
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span>Floton &nbsp; &nbsp;</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1>Africa</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        </div>
      )}
      <Nav />
      <section className="hero">
        <div className="hero-bg">
          <img src="/featured-projects/hero2.jpg" alt="" />
        </div>
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={showPreloader ? 4 : 0.85}>
                <h1>DEVELOPING TIMELESS LIVING IN ZANZIBAR.</h1>
              </Copy>
            </div>
            {/* <div className="hero-tagline">
              <Copy animateOnScroll={false} delay={showPreloader ? 4.15 : 1}>
                <p>
                  At Floton Africa, we shape environments that elevate daily life,
                  invite pause, and speak through texture and light.
                </p>
              </Copy>
            </div> */}

            {/* <AnimatedButton
              label="Discover "
              route="/studio"
              animateOnScroll={false}
              delay={showPreloader ? 6.3 : 1.15}
            /> */}
            </div>

        </div>
        <div className="hero-stats">
          <div className="container">
            <div className="stat">
              <div className="stat-count">
                <Copy animateOnScroll={false} delay={0.1}>
                  <p>Class One Registered Developer & Contractor</p>
                </Copy>
              </div>
              {/* <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy animateOnScroll={false} delay={0.15}>
                  <p>Class One Registered Developer & Contractor</p>
                </Copy>
              </div> */}
              <div className="stat-divider"></div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy animateOnScroll={false} delay={0.2}>
                  <p>End-to-end development & construction capability</p>
                </Copy>
              </div>
              {/* <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy animateOnScroll={false} delay={0.25}>
                  <p>Ongoing spatial explorations</p>
                </Copy>
              </div> */}
              <div className="stat-divider"></div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy animateOnScroll={false} delay={0.3}>
                  <p>Active projects across Zanzibar <br/> & <br/>mainland Tanzania</p>
                </Copy>
              </div>
              {/* <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy animateOnScroll={false} delay={0.35}>
                  <p>Cross-disciplinary collaborators</p>
                </Copy>
              </div> */}
              <div className="stat-divider"></div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy animateOnScroll={false} delay={0.4}>
                  <p>Strong institutional, landowner, and government alignment</p>
                </Copy>
              </div>
              {/* <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy animateOnScroll={false} delay={0.45}>
                  <p>Return rate across commissions</p>
                </Copy>
              </div> */}
              <div className="stat-divider"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do-header">
            <Copy delay={0.1}>
              <h2>
                {/* <span className="spacer">&nbsp;</span> */}
                A Development-First Philosophy

              </h2>
            </Copy>
          </div>
          <div className="what-we-do-content">
            <div className="what-we-do-col">
              <Copy delay={0.1}>
                <h3>About Us</h3>
              </Copy>

              <Copy delay={0.15}>
                <p className="lg">
                  Floton Africa is a real estate development company focused on creating high-quality residential and mixed-use assets in emerging prime locations across Zanzibar. We combine land strategy, architectural intelligence, disciplined construction, and market-driven planning to deliver developments that perform—financially, socially, and spatially.
                  <br />
                  <br /> <span>We do not build volume.</span>
                  <br />We build value.
                </p>
              </Copy>
              <div className="what-we-do-metrics" ref={metricsRef}>
                <Copy delay={0.2}>
                  <p className="metrics-label">METRICS</p>
                </Copy>
                <div className="what-we-do-metrics-grid">
                  <div className="what-we-do-metric">
                    <h3>
                      <span className="metric-value" data-count="140" data-suffix="+">
                        140+
                      </span>
                    </h3>
                    <Copy delay={0.3}>
                      <p>Active &amp; Delivered units</p>
                    </Copy>
                  </div>
                  <div className="what-we-do-metric">
                    <h3>
                      <span className="metric-value" data-count="100" data-suffix="%">
                        100%
                      </span>
                    </h3>
                    <Copy delay={0.4}>
                      <p>Project list Compliant with ZIPA &amp; Local Regulations</p>
                    </Copy>
                  </div>
                  <div className="what-we-do-metric">
                    <h3>
                      <span className="metric-value" data-count="25000" data-suffix="+">
                        25000+
                      </span>
                    </h3>
                    <Copy delay={0.5}>
                      <p>Sqm- Spaces planned, built &amp; under development.</p>
                    </Copy>
                  </div>
                  <div className="what-we-do-metric">
                    <h3>
                      <span className="metric-value" data-count="14" data-suffix="+">
                        14+
                      </span>
                    </h3>
                    <Copy delay={0.6}>
                      <p>Years of Engineering &amp; Project Delivery Experience.</p>
                    </Copy>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="what-we-do-col">
              <div className="what-we-do-tags" ref={tagsRef}>
                <div className="what-we-do-tag">
                  <h3>Quiet</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>View</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Tactile</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Light-forward</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Slow design</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Modular rhythm</h3>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="featured-projects-container">
        <div className="container">
          <div className="featured-projects-header-callout">
            <Copy delay={0.1}>
              <p>Featured work</p>
            </Copy>
          </div>
          <div className="featured-projects-header">
            <Copy delay={0.15}>
              <h2>Discover our Underconstruction and completed projects</h2>
            </Copy>
          </div>
        </div>
        <FeaturedProjects />
      </section>
      <section className="development-pillars">
        <div className="container">
          <div className="development-pillars-header">
            <div className="development-pillars-callout">
              <Copy delay={0.1}>
                <p className="mono">How we develop</p>
              </Copy>
            </div>
            <div className="development-pillars-title">
              <Copy delay={0.15}>
                <h3>FOUR PILLARS</h3>
              </Copy>
            </div>
          </div>
          <div className="development-pillars-grid">
            <div className="development-pillar">
              <Copy delay={0.2}>
                <p className="mono pillar-index">01</p>
              </Copy>
              <Copy delay={0.25}>
                <h3>Land &amp; Location Strategy</h3>
              </Copy>
              <Copy delay={0.3}>
                <p>
                  We secure sites with long-term desirability—beachfront, view
                  corridors, access, and infrastructure growth.
                </p>
              </Copy>
            </div>
            <div className="development-pillar">
              <Copy delay={0.35}>
                <p className="mono pillar-index">02</p>
              </Copy>
              <Copy delay={0.4}>
                <h3>Architecture &amp; Planning</h3>
              </Copy>
              <Copy delay={0.45}>
                <p>
                  Every development is guided by proportion, climate response,
                  and timeless materiality—not trends.
                </p>
              </Copy>
            </div>
            <div className="development-pillar">
              <Copy delay={0.5}>
                <p className="mono pillar-index">03</p>
              </Copy>
              <Copy delay={0.55}>
                <h3>Construction &amp; Delivery</h3>
              </Copy>
              <Copy delay={0.6}>
                <p>
                  In-house Class One construction ensures quality, cost control,
                  and on-time delivery.
                </p>
              </Copy>
            </div>
            <div className="development-pillar">
              <Copy delay={0.65}>
                <p className="mono pillar-index">04</p>
              </Copy>
              <Copy delay={0.7}>
                <h3>Asset &amp; Investment Thinking</h3>
              </Copy>
              <Copy delay={0.75}>
                <p>
                  Each project is structured to retain value, rental appeal, and
                  resale strength.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>
      <section className="construction-section">
        <div className="container">
          <div className="construction-header">
            <Copy delay={0.1}>
              <p className="mono">Construction Section</p>
            </Copy>
            <Copy delay={0.15}>
              <h2>Integrated Development &amp; Construction</h2>
            </Copy>
          </div>
          <div className="construction-body">
            <Copy delay={0.2}>
              <p className="lg">
                Unlike most developers, Floton Africa maintains direct control
                over construction execution.
              </p>
            </Copy>
            <Copy delay={0.25}>
              <p>
                This integration ensures design intent is preserved, quality is
                uncompromised, and risks are managed professionally.
              </p>
            </Copy>
            <Copy delay={0.3}>
              <p>Construction is not our product.</p>
            </Copy>
            <Copy delay={0.35}>
              <p>It is our advantage.</p>
            </Copy>
          </div>
        </div>
      </section>
      {/* <section className="client-reviews-container">
        <div className="container">
          <div className="client-reviews-header-callout">
            <p>Voices from our spaces</p>
          </div>
          <ClientReviews />
        </div>
      </section> */}
      <section className="gallery-callout">
        <div className="container">
          <div className="gallery-callout-col">
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-1">
                <img src="/gallery-callout/gallery-callout-1.jpeg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-2">
                <img src="/gallery-callout/gallery-callout-2.jpeg" alt="" />
                <div className="gallery-callout-img-content">
                  <h3>10+</h3>
                  <p>Projects</p>
                </div>
              </div>
            </div>
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-3">
                <img src="/gallery-callout/gallery-callout-3.jpeg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-4">
                <img src="/gallery-callout/gallery-callout-4.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className="gallery-callout-col">
            <div className="gallery-callout-copy">
              <Copy delay={0.1}>
                <h3>
                  Floton Africa excels in general contracting and construction management, seamlessly integrating architectural vision with craft and quality control, and creative solutions that align with financial and design goals.
                </h3>
              </Copy>
              <AnimatedButton label="Explore Gallery" route="blueprints" />
            </div>
          </div>
        </div>
      </section>
      <CTAWindow
        img="/home/home-cta-window.jpg"
        header="Developing Places That Last"
        callout="Spaces that breathe with time"
        description="Luxury real estate development shaped by purpose, precision, and permanence."
      />
      <ConditionalFooter />
    </>
  );
}
