import css from '../styles/styles.css'
import Link from 'next/link'

export default () => (
  <section className={css.about} id="about">
    <div className={css.imageBackground}></div>
    <p>B. / Lic. en Comunicación Social</p>
    <div className={css.goWorkContainer}>
        <Link href="/#work">
          <span
            className={css.tcon_indicator}
            aria-label="scroll"
            aria-hidden="true"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className={css.tcon_svgchevron}
              viewBox="0 0 30 36"
            >
              <path className={css.a3} d="M0,0l15,16L30,0" />
              <path className={css.a2} d="M0,10l15,16l15-16" />
              <path className={css.a1} d="M0,20l15,16l15-16" />
            </svg>
          </span>
        </Link>
    </div>
  </section>
)
