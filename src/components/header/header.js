import Logo from './logo/Logo'
import Nav from './nav/nav';


export default function Header(){
    return(
        <div className='flex border justify-between  items-center sticky top-0 z-50 bg-white'>
            <Logo/>
            <Nav/>
            {/* <SearchBar/> */}
        </div>
    )
}