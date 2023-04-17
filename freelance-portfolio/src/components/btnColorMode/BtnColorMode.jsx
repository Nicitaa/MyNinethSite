import "./BtnColorMode.css";
import sun from "./sun.svg";
import moon from "./moon.svg";
import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";


const BtnColorMode = () => {
    
    const detectColorMode = () => {
        if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
         return 'dark'
        }
        else return 'light'
     }

    const [colorMode,setColorMode] = useLocalStorage('colorMode',detectColorMode());
    
    const toggleColorMode = (() => {
        setColorMode(() =>{
            return colorMode === 'dark' ? 'light' : 'dark';
        })
    })

 
    
     
    useEffect(() => {
        if(colorMode === 'dark') {
            document.body.classList.add('dark')
        }
        else {
            document.body.classList.remove('dark')
        }
    },[colorMode])

    const btnLight = "dark-mode-btn";
    const btnDark = "dark-mode-btn dark-mode-btn--active";



    return ( 
        <button className={colorMode === 'light' ? btnLight : btnDark} onClick={toggleColorMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>
     );
}
 
export default BtnColorMode;