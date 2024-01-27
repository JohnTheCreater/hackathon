import LOGO from '../../1666598722572.jpeg';
function LogoImg() {
    return <img src={LOGO} className='w-20' alt='logo'/>;
  }
  
  function CName(){
    return <h1 >AuroiTech</h1>;
  }

 export   default function Logo() {
    return(
        <div className="flex gap-4">
          <div className=''><LogoImg/></div>
            
            <div className='flex justify-center items-center'> <CName/></div>
            
        </div>
    )
  }
