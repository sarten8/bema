import css from '../styles/styles.css'

export default () => (
  <section className={css.contact} id="contact">
    <div className={css.imageBackground} />
    <a href="https://www.instagram.com/suckthistangerine/" target="_blank">
      <img src="/static/icons/instagram.png" alt="" />
      <span>instagram</span>
    </a>
    <a href="mailto:bernardafz@gmail.com" target="_blank">
      <img src="/static/icons/gmail.png" alt="" />
      <span>gmail</span>
    </a>
    <a
      href="https://uy.linkedin.com/in/bernarda-fern%C3%A1ndez-r%C3%ADos-5139537a"
      target="_blank"
    >
      <img src="/static/icons/linkedin.png" alt="" />
      <span>linkedIn</span>
    </a>
  </section>
)
