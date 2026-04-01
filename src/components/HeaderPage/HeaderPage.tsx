import './HeaderPage.css'

export const HeaderPage = () => {
  return (
    <header>
      <nav className='navOption'>
        <h1 id='title'>YouTuDown</h1>

        
        <div id='buttons-language'>
          <button>En</button>
          <button>ES</button>
        </div>
        <div id='buttons-theme'>
          <button>Claro</button>
          <button>Oscuro</button>
          <button>Sistema</button>
        </div>



      </nav>


    </header>
  )
}
