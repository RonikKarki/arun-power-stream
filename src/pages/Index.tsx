import Layout from "@/components/Layout/Layout";
import HeroSlider from "@/components/Home/HeroSlider";
import CompanyOverview from "@/components/Home/CompanyOverview";
import LatestNews from "@/components/Home/LatestNews";
import NoticePopup from "@/components/Home/NoticePopup";

const Index = () => {
  return (
    <Layout>
      <NoticePopup />
      <HeroSlider />
      <CompanyOverview />
      <LatestNews />
    </Layout>
  );
};

export default Index;
