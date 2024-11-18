import { useEffect } from "react";

export const useAnchorLinkScroll = () => {
    useEffect(() => {

        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        const handleAnchorClick = (e: Event) => {
        
            e.preventDefault();
            
            const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href")?.replace("#", "");
            if (!target) return;  
      
            const targetElement = document.getElementById(target);
            if (!targetElement) return;
      
            const rectTop = targetElement.getBoundingClientRect().top;
            const positionY = window.scrollY;
            window.scrollTo({
              top: rectTop + positionY,
              behavior: "smooth",
            });
        }

        scrollLinks.forEach((link) => link.addEventListener("click", handleAnchorClick));
        
        return () => {
          scrollLinks.forEach((link) => link.removeEventListener("click", handleAnchorClick));
        };
    }, []);
}
