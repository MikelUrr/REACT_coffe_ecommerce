import React from 'react';
import { useEffect,useState } from 'react';
import "./../App.css";
import { useNavigate } from 'react-router-dom';

const Intro = () => {
const [isMobile, setIsMobile] = useState(false);
const navigate = useNavigate();
const handleClick = () => {
    navigate('/auth');
}

//create a function to isMobile
useEffect(() => {
const isMobile = () => {
    const ua = navigator.userAgent;
    console.log(ua);
    return /Android|Mobi/i.test(ua);
    
}

if (!isMobile()) {
    alert('This app is only supported on Mobile devices.Please open the website on Mobile device or use the dev tools of your browser to simulate a mobile view. ');
} else {
    setIsMobile(true);
}
}, []);
    return (
     <section>
        <div className='intro-container'>
<div className='foto-container'>
    <img src="/cafe.png" alt="Coffe photo" />
</div>
<div className='text-container'>
<h1 className='intro-title'>Stay Focused</h1>
<p className='intro-text'>Get the cup filled of your choice to stay focused and awake. Diffrent type of coffee menu, hot lottee cappucino</p>
</div>
<div className='button-container'>
    <button onClick={handleClick} className='intro-button'>Dive In   <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Iconly/Light-Outline/Arrow---Right">
<g id="Arrow---Right">
<path id="Combined-Shape" d="M0.719971 8.08548C0.719971 7.66434 1.03292 7.3163 1.43895 7.26122L1.55182 7.25362L16.1747 7.25429L10.8919 1.99307C10.5663 1.66891 10.5652 1.14222 10.8893 0.816659C11.184 0.520699 11.6461 0.492855 11.9723 0.733783L12.0657 0.814126L18.776 7.49556C18.8189 7.53829 18.8562 7.58453 18.8878 7.63337C18.8968 7.64807 18.9059 7.66311 18.9145 7.67845C18.9224 7.6916 18.9296 7.70525 18.9364 7.71905C18.9457 7.73914 18.9549 7.75989 18.9632 7.78107C18.97 7.79739 18.9757 7.81327 18.9808 7.82927C18.987 7.84912 18.9929 7.87027 18.998 7.89174C19.0018 7.90673 19.0049 7.92116 19.0075 7.93565C19.0112 7.9572 19.0143 7.9795 19.0166 8.00207C19.0185 8.01928 19.0197 8.03633 19.0203 8.0534C19.0205 8.06376 19.0207 8.07459 19.0207 8.08548L19.0203 8.1177C19.0197 8.13403 19.0185 8.15034 19.0169 8.16661L19.0207 8.08548C19.0207 8.13797 19.0158 8.18933 19.0065 8.23912C19.0044 8.25102 19.0018 8.26323 18.999 8.27539C18.9931 8.30043 18.9862 8.32454 18.9784 8.34818C18.9745 8.35993 18.97 8.37248 18.9652 8.38493C18.9555 8.40996 18.9449 8.43383 18.9333 8.45707C18.9279 8.468 18.9219 8.47944 18.9155 8.49076C18.9051 8.50924 18.8944 8.5268 18.8831 8.54391C18.8751 8.55602 18.8663 8.56863 18.857 8.58104L18.8498 8.59063C18.8274 8.61991 18.8031 8.64765 18.7771 8.67368L18.7761 8.67446L12.0658 15.357C11.7403 15.6812 11.2136 15.6801 10.8894 15.3546C10.5947 15.0586 10.5688 14.5964 10.8111 14.2713L10.8918 14.1781L16.1724 8.91799L1.55182 8.91733C1.0924 8.91733 0.719971 8.5449 0.719971 8.08548Z" fill="white"/>
</g>
</g>
</svg></button>
</div>
        </div>
     </section>
    );
}

export default Intro;