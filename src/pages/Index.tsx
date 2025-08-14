import Layout from "@/components/Layout/Layout";
import HeroSlider from "@/components/Home/HeroSlider";
import CompanyOverview from "@/components/Home/CompanyOverview";
import LatestNews from "@/components/Home/LatestNews";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <CompanyOverview />
      <LatestNews />
    </Layout>
  );
};

export default Index;
