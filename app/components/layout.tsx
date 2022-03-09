import Navbar from './navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <div className="page-wrapper document-page">
        <header className="top-navigation">
          <div className="container">
            <div className="top-navigation-wrap">
              <a className="logo" href="#">
                Remix | By Example
              </a>
            </div>
            <div className="top-navigation-main">
              <nav className="main-nav" aria-label="Main menu">
                <ul className="main-menu">
                  <li className="top-level-nav-container">
                    <a className="top-level-nav" href="#"></a>
                  </li>
                  <li className="top-level-nav-container">
                    <a className="top-level-nav" href="#"></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className="article-actions-container">
          <div className="container">
            <div className="article-actions"></div>
          </div>
        </div>
        <div className="article-wrapper"></div>
      </div>
    </div>
  )
}
