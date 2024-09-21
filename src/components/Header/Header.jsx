import "./Header.css";



const Header = () => {
  return (
    <div className="header-wrapper ">
      <div className="header-wrapper flex justify-start  items-center w-5/6 mx-auto">
          <div className="img-header f mx-auto object-contain"><img src="logo.png" alt="" /></div>
          <div className="list-header w-3/4 ">
            <ul className="flex justify-center gap-20 items-center text-white">
              <li>Home</li>
              <li>People</li>
              <li>About</li>
              <li>Contacts</li>
              
            </ul>

          </div>
        
      </div>
    </div>
  )
}

export default Header

