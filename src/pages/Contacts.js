const Contacts = () => {
  return (
  <main className="section">
    <div className="container">
      <h1 className="title-1">Contacts</h1>

      <ul className="content-list">
        <li className="content-list__item">
          <h2 className="title-2">Location</h2>
          <p>Belarus</p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Telegram / WhatsApp</h2>
          <p>
            <a href="tel:+375445128886">+375(44)512-88-86</a>
          </p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Email</h2>
          <p>
            <a href="alekseykar92@gmail.com">
              alekseykar92@gmail.com
            </a>
          </p>
        </li>
      </ul>
    </div>
  </main>
);
}

export default Contacts;