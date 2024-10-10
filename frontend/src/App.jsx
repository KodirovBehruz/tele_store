import Header from "./components/Header/Header.jsx";
import HomeSection from "./components/HomeSection/HomeSection.jsx";
import HomeDiscount from "./components/HomeDiscount/HomeDiscount.jsx";
import {Routes, Route} from "react-router-dom";
import HomeCategory from "./components/HomeCatagory/HomeCategory.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import FooterSection from "./components/FooterSection/FooterSection.jsx";


export default function App() {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <Header/>
                    <HomeSection />
                    <HomeDiscount />
                    <FooterSection />
                </>
            } />
            <Route path='/catalog' element={
                <>
                    <Header/>
                    <HomeCategory />
                    <Catalog />
                    <FooterSection />
                </>
            } />
        </Routes>
    )
}