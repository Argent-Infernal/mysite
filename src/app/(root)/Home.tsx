import AboutSection from "@/components/sections/about.section";
import MainSection from "@/components/sections/main.section";
import MyStackSection from "@/components/sections/mystack.section";

export default function Home() {
    return (
        <div>
            <MainSection/>
            <AboutSection/>
            <MyStackSection/>
        </div>
    )
}