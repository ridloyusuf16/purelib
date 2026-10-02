import HeroSection from "./sections/HeroSection";
import PopularSection from "./sections/PopularSection";
import BlogSection from "./sections/BlogSection";
import QuoteSection from "./sections/QuoteSection"

export default function HomePage(){
    return(
        <>
            <HeroSection/>
            <QuoteSection/>
            <PopularSection/>
            <BlogSection/>
        </>
    )
}