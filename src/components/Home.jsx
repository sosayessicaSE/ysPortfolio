import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { HOME_PROJECT_GALLERY_SLIDES } from '../data/homeProjectGallerySlides';
import "../views/home.css";

const AVATAR_BASE =
  'https://api.dicebear.com/7.x/notionists/svg';

const HERO_GALLERY_COUNT = HOME_PROJECT_GALLERY_SLIDES.length;

const Home = ({ isDarkMode }) => {
  const { t } = useTranslation();
  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  const page = t('homePage', { returnObjects: true }) || {};
  const hero = page.hero || {};
  const quoteBand = page.quoteBand || {};

  const reviewsBlock = t('homeReviews', { returnObjects: true });
  const reviewItems = Array.isArray(reviewsBlock?.items) ? reviewsBlock.items : [];
  const highlights = [
    { value: '5+', label: t('aboutMe.stats.yearsExperience') },
    { value: '30+', label: t('aboutMe.services.projectsDelivered') },
    { value: '100%', label: t('aboutMe.services.clientSatisfaction') },
  ];

  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [heroRef, heroVis] = useInViewOnce({ threshold: 0.08 });
  const [highlightsRef, highlightsVis] = useInViewOnce({ threshold: 0.1 });
  const [quoteRef, quoteVis] = useInViewOnce({ threshold: 0.12 });
  const [reviewsRef, reviewsVis] = useInViewOnce({ threshold: 0.08 });

  const reveal = (visible) => (visible ? 'home-reveal home-reveal--visible' : 'home-reveal');

  const goHeroPrev = () => {
    setHeroSlideIndex((i) => (i - 1 + HERO_GALLERY_COUNT) % HERO_GALLERY_COUNT);
  };

  const goHeroNext = () => {
    setHeroSlideIndex((i) => (i + 1) % HERO_GALLERY_COUNT);
  };

  const syncHeroSlideFromSlider = (info) => {
    if (typeof info?.currentIndex === 'number') {
      setHeroSlideIndex(info.currentIndex);
    }
  };

  return (
    <div className={`home ${themeClass}`}>
      <section
        ref={heroRef}
        className={`home-hero ${themeClass} ${reveal(heroVis)}`}
        aria-labelledby="home-hero-heading"
      >
        <div className="home-hero-layout">
          <div className="home-hero-col home-hero-col--copy">
            <div className="home-hero-inner">
              <h1 id="home-hero-heading" className="home-hero-title">
                {hero.title}
              </h1>
              <p className="home-hero-subtitle">{hero.subtitle}</p>
              <div className="home-hero-actions">
                <Link to="/contact" className={`home-hero-cta-ghost ${themeClass}`}>
                  {hero.ctaPrimary}
                </Link>
                <Link to="/projects" className={`home-hero-cta-ghost ${themeClass}`}>
                  {hero.ctaProjects}
                </Link>
                <Link to="/experience" className={`home-hero-cta-ghost ${themeClass}`}>
                  {hero.ctaExperience}
                </Link>
              </div>
            </div>
          </div>
          <div
            className="home-hero-col home-hero-col--gallery"
            aria-label={hero.galleryAria || undefined}
          >
            <div className="home-hero-slider-shell">
              <button
                type="button"
                className={`home-hero-arrow home-hero-arrow--prev ${themeClass}`}
                onClick={goHeroPrev}
                aria-label={t('homePage.hero.prevSlide')}
              >
                <FaChevronLeft aria-hidden />
              </button>
              <div className="home-hero-slider-track">
                <AwesomeSlider
                  className="home-hero-slider"
                  bullets
                  mobileTouch
                  buttons={false}
                  infinite
                  selected={heroSlideIndex}
                  onTransitionEnd={syncHeroSlideFromSlider}
                >
                  {HOME_PROJECT_GALLERY_SLIDES.map((slide, index) => (
                    <div key={slide.titleKey} className="home-hero-slide">
                      <img
                        src={slide.src}
                        alt={t(slide.titleKey)}
                        className="home-hero-slide-img"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        width={640}
                        height={400}
                      />
                    </div>
                  ))}
                </AwesomeSlider>
              </div>
              <button
                type="button"
                className={`home-hero-arrow home-hero-arrow--next ${themeClass}`}
                onClick={goHeroNext}
                aria-label={t('homePage.hero.nextSlide')}
              >
                <FaChevronRight aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className={`home-main-row ${themeClass}`}>
        <section
          ref={highlightsRef}
          className={`home-highlights ${themeClass} ${reveal(highlightsVis)}`}
          aria-label="Home Highlights"
        >
          <div className="home-highlights-inner">
            <ul className={`home-highlights-metrics ${highlightsVis ? 'home-highlights-metrics--stagger' : ''}`}>
              {highlights.map((item) => (
                <li key={item.label}>
                  <div className={`home-metric-card ${themeClass}`}>
                    <p className="home-metric-value">{item.value}</p>
                    <p className="home-metric-label">{item.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <section
        ref={quoteRef}
        className={`home-quote-band ${themeClass} ${reveal(quoteVis)}`}
        aria-label={quoteBand.ariaLabel || undefined}
      >
        <div className="home-quote-band__inner">
          <FaQuoteLeft className="home-quote-band__icon" aria-hidden />
          <blockquote className="home-quote-band__blockquote">
            <p className="home-quote-band__text">{quoteBand.quote || ''}</p>
            {(quoteBand.attribution || '').trim() ? (
              <cite className="home-quote-band__cite">{quoteBand.attribution}</cite>
            ) : null}
          </blockquote>
        </div>
      </section>

      {reviewItems.length > 0 && (
        <section
          ref={reviewsRef}
          className={`home-reviews ${themeClass} ${reveal(reviewsVis)}`}
          aria-labelledby="home-reviews-heading"
        >
          <div className="home-reviews-inner">
            <header className="home-reviews-header">
              <h2 id="home-reviews-heading" className="home-reviews-title">
                {reviewsBlock.title}
              </h2>
              {reviewsBlock.subtitle && (
                <p className="home-reviews-subtitle">{reviewsBlock.subtitle}</p>
              )}
            </header>

            <ul className="home-reviews-grid">
              {reviewItems.map((item, index) => {
                const fullName = `${item.firstName} ${item.lastName}`.trim();
                const seed = encodeURIComponent(item.avatarSeed || fullName || String(index));
                const avatarExtra =
                  typeof item.avatarParams === 'string' && item.avatarParams.trim()
                    ? `&${item.avatarParams.replace(/^\?/, '').replace(/^&/, '')}`
                    : '';
                return (
                  <li key={`${item.avatarSeed}-${index}`}>
                    <article
                      className={`home-review-card ${themeClass}`}
                    >
                      <div className="home-review-card-top">
                        <img
                          className="home-review-card-avatar"
                          src={`${AVATAR_BASE}?seed=${seed}${avatarExtra}`}
                          alt=""
                          width={56}
                          height={56}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="home-review-card-meta">
                          <h3 className="home-review-card-name">{fullName}</h3>
                          <p className="home-review-card-company">{item.company}</p>
                        </div>
                      </div>
                      <div className="home-review-card-body">
                        <FaQuoteLeft className="home-review-card-quote-icon" aria-hidden />
                        <div className="home-review-card-message-scroll">
                          <p className="home-review-card-message">
                            {typeof item.message === 'string' ? item.message : ''}
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

Home.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Home;
