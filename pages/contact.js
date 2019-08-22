import css from '../styles/styles.css'

export default () => (
  <section className={css.contact} id="contact">
    <div className={css.imageBackground} />
    <div>
      <p>::: contacto</p>
    </div>
    <div className={css.social}>
      <a href="https://www.instagram.com/suckthistangerine/" target="_blank">
        <div>
          <img src="/static/icons/icons8-instagram-50.png" alt="" />
          <span>instagram</span>
        </div>
      </a>
      <a
        href="https://uy.linkedin.com/in/bernarda-fern%C3%A1ndez-r%C3%ADos-5139537a"
        target="_blank"
      >
        <div>
          <img src="/static/icons/icons8-linkedin-50.png" alt="" />
          <span>linkedIn</span>
        </div>
      </a>
    </div>
  </section>
)
