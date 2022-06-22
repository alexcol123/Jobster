import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'
import { Logo } from '../components'

import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* Info */}
        <div className='info'>
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            provident obcaecati ad illum, quo amet dolor, dolorem doloremque
            accusamus necessitatibus ipsa laudantium vel quas facere?
          </p>

          <Link to='/register' className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
