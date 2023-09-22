//import Feature from "../components/Feature";
//import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead 
      title='Lamento - Multi Platform Blogging Tool'
      siteName='Lamento'
      description='Lamento a Mininal Blogging Tool: Create, Manage, Share and Grow Your Blog Easily'
      url='https://lamento.in'
      type='website'
      robots='follow, index'
      image='https://res.cloudinary.com/davkfrmah/image/upload/v1695348896/Lamento/optimised%20Illustration.jpg'
      author='Akilesh'      
      />
      <Layout>
        <Hero />
        {/* <Feature /> */}
        {/* <Pricing /> */}
      </Layout>
    </>
  );
}
