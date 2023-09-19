import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Lamento a Mininal Blogging Tool: Create, Manage, Share and Grow Your Blog Easily' />
      <Layout>
        <Hero />
        {/* <Feature /> */}
        {/* <Pricing /> */}
      </Layout>
    </>
  );
}
