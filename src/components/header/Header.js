import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to="/"><img className='header_icon' alt='Logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADOUlEQVR4nO2YW0gUURjHRzDooZv1UGBmQmb0orHuGc1idJ09Z1E7xw3EZnCznMEiAvHJBQPt9tpL4YNvUfQShUG6FpRkFkGShVDQ1cwNs3qpViS1L8a96N5qNmd1ifnD9zBz5vz/3284+7G7HGfKlClTpkyZMpVUpSE7bUaEeRGmEwjTU0nLIeyMP4ON8YQ2afcW5ZgvsHU8pr08YbCwrJjJnMFChLkicxBhHotYs/afDK3l1Rt4QgcjTecKs5vGA9CemFmEPS7CNesTMttN6WqE2ZPwpqkbETY992YwfW00AE/Y28Bbn+YxbQ2HoIOCULNKl5HF0riCJ/RWRPMfBEFI5wn74QdgU8YD0J9+APpdy9I+cxE99Gq9/dUIEdoRdRYxbQusfQ2YzRoPwH4FsiYC1ydjHKfzf24e04PR553OIodzs3+dPQuEjBgPQEcDx2VIuy7ELCsIFVaOfXUxDax2VoAwnYwB8DAEqI05wsZ5B6swGgARWokI/bRwTCPCHsUYID6Enflhm7VRxRP6Js7EaeGWSTym7lg9aUMEORxrQg8iwi7HGWFQSGjesgGIlbnx+kKYXgo9aJdVMKwk5b0oq2249lBW0F90NW6xS0q7KKujRmZxSQFYwuL+W4CM6z7gukB3pXUBrLwxAxnXfJBz8SUIx9ujwur3u+BBsQgjhSXgRTx4i6zgLdZf76wl+gESaT5W5XYORYX17HEk1LA3RukGKOgDKB3QX8IAQFE/QH4fQM5tgGL3haiwExUH4NuOvTC1tRRmMm0Am0SAjfpL26cbIJHmo8rzJe6ZHc92JNQ0RNSSANg67sQF6LI4Ux+gvOVcXAA3qUtxgLuTYHcdDfo8x3XKNlE6kivKygvtXoWkgC/TnroAts57IY9yWWVBfyw1VAfve3Y5UxdAbD47t1+UlI+WxvkfH4LQlm6XlDFtranSlZoAtivDof2irEb9cyFKyung+uDOquQClF19lVDzZZ7PYD/WGnz7s2VyQ3YkgPblTpTVGe2Zw9X1CY/U4bwq/QCLrO7I5hfkdBuZxc0bK/eNMBQlZai8Vt0eD0BbEyX1qUFZ/fFyTJkyZcqUKVOmOH36DZ26Xh5gqeGdAAAAAElFTkSuQmCC" /></Link>
            <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>upcoming</span></Link>
        </div>
    </div>
  )
}

export default Header