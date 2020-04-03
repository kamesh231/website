import React from "react";
import styled from "styled-components";


import Layout from "../components/layout";
import SEO from "../components/seo";


import Container, {
  PageWrapper,
} from "../components/container";
import { TopDivider, BottomDivider } from "../components/dividers";
import Footer from "../components/footer";

import colors from "../colors";

import UsageBasedPricing from "../components/pricing/usage-based-pricing";
import SubscriptionPlans from "../components/pricing/subscription-plans";

const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
  & svg.top {
    position: absolute;
    top: -1px;
  }
  & svg.bottom {
    position: absolute;
    bottom: -1px;
    left:-1px;
  }
`;

const FauxHero = styled.section`
  position: relative;
  width: 100%;
  margin-bottom: 64px;
  min-height: 128px;
  margin-top: 32px;
  height: 64px;
  @media (max-width: 768px) {
    min-height: 64px;
    padding-top: 0px;
    margin-top: 0;
    margin-bottom: 128px;
  }
`;

const IndexPage: React.FC = () => {

  return (
    <Layout>
      <SEO title="Pricing" />
      <Section style={{ background: colors.berry, paddingTop: 96 }}>
        <Container>
          <FauxHero />
        </Container>
        <BottomDivider />
      </Section>

      <Section>
        <Container bg="transparent">
          <PageWrapper>
            <UsageBasedPricing />
            <SubscriptionPlans />
          </PageWrapper>
        </Container>
      </Section>

      <Section>
        <TopDivider />
        <Container bg="berry">
          <Footer />
        </Container>
      </Section>
    </Layout>
  );
};

export default IndexPage;
