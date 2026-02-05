import "./ProjectsPage.css";

import { useEffect, useState } from "react";
import projectsContent from "./projects-content";
import { useViewTransition } from "@/hooks/useViewTransition";

const ProjectsPage = ({ activeSlug }) => {
  const { navigateWithTransition } = useViewTransition();
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [galleryLoaded, setGalleryLoaded] = useState([]);

  const activeProject = activeSlug
    ? projectsContent.find((project) => project.slug === activeSlug)
    : null;

  useEffect(() => {
    if (!activeProject) {
      setHeroLoaded(false);
      setGalleryLoaded([]);
      return;
    }
    setHeroLoaded(false);
    setGalleryLoaded(Array(activeProject.gallery.length).fill(false));
  }, [activeProject?.id]);

  const handleGalleryLoad = (index) => {
    setGalleryLoaded((prev) => {
      if (prev[index]) {
        return prev;
      }
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  const handleNavigate = (event, href) => {
    if (event) {
      event.preventDefault();
    }
    navigateWithTransition(href);
  };

  if (activeSlug && !activeProject) {
    return (
      <section className="projects-page">
        <div className="container">
          <div className="project-not-found">
            <p className="mono">Project not found</p>
            <h2>We could not locate that project.</h2>
            <a
              className="projects-back"
              href="/studio"
              onClick={(event) => handleNavigate(event, "/studio")}
            >
              Back to projects
            </a>
          </div>
        </div>
      </section>
    );
  }

  if (activeProject) {
    return (
      <section className="projects-page">
        <div className="container">
          <div className="project-detail">
            <a
              className="projects-back"
              href="/studio"
              onClick={(event) => handleNavigate(event, "/studio")}
            >
              Back to projects
            </a>
            <div className="project-detail-hero">
              <div
                className={`project-hero-image image-shell${
                  heroLoaded ? " is-loaded" : ""
                }`}
              >
                <img
                  src={activeProject.heroImage}
                  alt={activeProject.title}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onLoad={() => setHeroLoaded(true)}
                  onError={() => setHeroLoaded(true)}
                />
              </div>
              <div className="project-hero-info">
                <p className="mono">{activeProject.location}</p>
                <h1>{activeProject.title}</h1>
                <p>{activeProject.summary}</p>
                <div className="project-hero-chips">
                  <span className="project-chip">{activeProject.status}</span>
                  <span className="project-chip">{activeProject.type}</span>
                  <span className="project-chip">{activeProject.unitSize}</span>
                </div>
              </div>
            </div>
            <div className="project-detail-grid">
              <div className="project-detail-main">
                <div className="project-section">
                  <h3>Overview</h3>
                  <p>{activeProject.overview}</p>
                </div>
                <div className="project-section">
                  <h3>Highlights</h3>
                  <ul className="project-highlights">
                    {activeProject.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="project-detail-aside">
                <div className="project-section">
                  <h3>Project Details</h3>
                  <div className="project-detail-list">
                    {activeProject.details.map((item) => (
                      <div className="project-detail-item" key={item.label}>
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project-section">
                  <h3>Amenities</h3>
                  <ul className="project-amenities">
                    {activeProject.amenities.map((amenity) => (
                      <li key={amenity}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="project-section">
              <h3>Gallery</h3>
              <div className="project-gallery">
                {activeProject.gallery.map((image, index) => (
                  <div
                    key={`${activeProject.id}-gallery-${index}`}
                    className={`project-gallery-item image-shell${
                      index % 6 === 0 ? " wide" : ""
                    }${galleryLoaded[index] ? " is-loaded" : ""}`}
                  >
                    <img
                      src={image}
                      alt={`${activeProject.title} gallery ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => handleGalleryLoad(index)}
                      onError={() => handleGalleryLoad(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects-page">
      <div className="container">
        <div className="projects-header">
          <p className="mono">Projects</p>
          <h1>All Properties</h1>
          <p>
            Explore the full portfolio of Floton Africa developments, each shaped
            by coastal context, architectural restraint, and long-term value.
          </p>
        </div>
        <div className="projects-grid">
          {projectsContent.map((project) => (
            <a
              key={project.id}
              className="project-card"
              href={`/studio/${project.slug}`}
              onClick={(event) =>
                handleNavigate(event, `/studio/${project.slug}`)
              }
            >
              <div className="project-card-image">
                <img
                  src={project.coverImage || project.heroImage}
                  alt={project.title}
                />
              </div>
              <div className="project-card-body">
                <div className="project-card-title">
                  <h3>{project.title}</h3>
                  <p className="project-card-location">{project.location}</p>
                </div>
                <p className="project-card-summary">{project.summary}</p>
                <div className="project-card-meta">
                  <span className="project-chip">{project.status}</span>
                  <span className="project-chip">{project.type}</span>
                  <span className="project-chip">{project.unitSize}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
