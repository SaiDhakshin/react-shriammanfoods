
import classes from './Footer.module.css';
import insta from '../../img/icons8-instagram.svg'
import twitter from '../../img/icons8-twitter.svg'

const Footer = () => {
    return(
       <div className={classes.footer}> 
       <h2 className='text-center pt-5'>Shri Amman Foods</h2>
        <ul className='flex justify-center p-5'>
            <li className='px-3'><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDM5YmU1IiBkPSJNMjQgNUExOSAxOSAwIDEgMCAyNCA0M0ExOSAxOSAwIDEgMCAyNCA1WiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNi41NzIsMjkuMDM2aDQuOTE3bDAuNzcyLTQuOTk1aC01LjY5di0yLjczYzAtMi4wNzUsMC42NzgtMy45MTUsMi42MTktMy45MTVoMy4xMTl2LTQuMzU5Yy0wLjU0OC0wLjA3NC0xLjcwNy0wLjIzNi0zLjg5Ny0wLjIzNmMtNC41NzMsMC03LjI1NCwyLjQxNS03LjI1NCw3LjkxN3YzLjMyM2gtNC43MDF2NC45OTVoNC43MDF2MTMuNzI5QzIyLjA4OSw0Mi45MDUsMjMuMDMyLDQzLDI0LDQzYzAuODc1LDAsMS43MjktMC4wOCwyLjU3Mi0wLjE5NFYyOS4wMzZ6Ij48L3BhdGg+PC9zdmc+"/></li>
            <li className='px-3'><img src={insta}></img></li>
            <li className='px-3'><img src={twitter}></img></li>
        </ul>
       </div>
    );
}

export default Footer;