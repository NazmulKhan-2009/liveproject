import Head from 'next/head'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import ShopCategoriesContainer from '../components/ShopCategories/ShopCategories.container';


export default function Home() {
  return (
    <>
      <HeroSlider/>
      <ShopCategoriesContainer/>
      <FeaturedProducts/>
    </>
  )
}
