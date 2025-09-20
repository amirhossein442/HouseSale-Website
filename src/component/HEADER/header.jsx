import {Logo} from './logo'
import { Menu } from './menu'

export const Header=()=>{
    return(
        <header>
        <nav className="container">
          <Logo />
          <Menu />
        </nav>
        <div className="container">
          <div className="header-info">
            <h1>Quality home services, on demand</h1>
            <h2>
              Experienced, handpicked professionals to serve you at your doorstep
            </h2>
          </div>
        </div>
      </header>
    )
}