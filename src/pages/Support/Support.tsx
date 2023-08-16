import { SUPPORT_IMG } from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "../../components/Navbar/styles";
import { HeroContainer, HeroImage, HeroText } from "../About/style";
import {
  Section,
  SectionContainer,
  SectionText,
  SectionTitle,
} from "../Home/style";

const Support = () => {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImage src={SUPPORT_IMG} />
        <HeroText>EHIOBA & Company</HeroText>
      </HeroContainer>
      <Section>
        <SectionContainer style={Container}>
          <SectionTitle>Privacy Policy</SectionTitle>
          <SectionText style={{ marginBottom: "3rem" }}>
            Ehioba and Company ( as "us", "we", and "our") recognizes and
            respects your privacy concerns. We are unwavering in our commitment
            to safeguarding your privacy and upholding the utmost security of
            your personal information. This privacy policy explains what
            information we gather about you, what we use it for, and who we
            share it with. For this Privacy Notice, "personal data" means any
            information relating to an identified or identifiable individual. By
            engaging with our services, like utilizing our website, client
            services, or registering for events or conferences, you
            unequivocally consent to the practices expounded in this Privacy
            Policy.
          </SectionText>
          <SectionTitle>Information we collect</SectionTitle>
          <SectionText style={{ marginBottom: "3rem" }}>
            Ehioba and Company diligently collects information about you that
            you provide to us, that we obtain from third parties or they are
            publicly available. Additionally, we acquire personal data from
            distinct sections of the site, such as when you register for
            newsletters, engage in conferences, or participate in public user
            posting areas (for instance, bulletin boards, discussion forums, and
            surveys). This personal data entails information you willingly
            provide, such as your full name, profession, email address, and
            telephone number.
            <br />
            Furthermore, we may automatically collect information concerning the
            devices you utilize to interact with our Sites. This automated
            collection includes but is not limited to your IP address, device
            identifier, web browser, and browsing information obtained through
            the employment of cookies, web beacons, pixels, clear gifs, and
            analogous technologies (collectively referred to as "Cookies and
            Other Tracking Technologies") on our sites. We may also collate data
            about your interaction with the sites, including your search history
            and accessed content. The information automatically collected could
            be associated with a unique identifier and any additional personal
            data you have disclosed.
          </SectionText>
          <SectionTitle>How we use information about you</SectionTitle>
          <SectionText style={{ marginBottom: "3rem" }}>
            Ehioba & Company judiciously utilizes your personal data for an
            array of purposes, including but not limited to the
            <br />
            To provide our services to you or our clients. Effectively
            processing your engagement in conferences and events. Customizing
            content on the Sites to align with your preferences. Enhancing and
            evaluating the quality of our services. Distributing newsletters and
            alerts. Analyzing the performance and functionality of the Sites.
            Mitigating fraudulent activities. Upholding our stipulated terms of
            use and legal obligations. Ensuring adherence to pertinent laws and
            corporate reporting mandates. Safeguarding Sabinus & Partner
            agreements. Accomplishing additional initiatives or requests
            initiated by you.
          </SectionText>
          <SectionTitle>Legal grounds for processing your data</SectionTitle>
          <SectionText style={{ marginBottom: "3rem" }}>
            Our processing of your personal data for the aforementioned purposes
            is predicated on the following legal bases: <br />
            Protection, and enhancement of Ehioba & Company's business interest,
            establishment and sustenance of relationships, and the delivery of
            our services. Consent, particularly in cases related to the
            registration of newsletters or alerts, and business functions that
            underpin web operations. Adherence to legal obligations when
            specific information is imperative to fulfill our legal or
            regulatory commitments
          </SectionText>
          <SectionTitle>Children's data</SectionTitle>
          <SectionText style={{ marginBottom: "3rem" }}>
            Our Sites are not designed for or targeted at individuals aged 18 or
            below, and Ehioba & Company does not knowingly gather or retain
            personal data about such individuals.
          </SectionText>
          <SectionTitle>Your rights</SectionTitle>
          <SectionText style={{ marginBottom: "3rem" }}>
            Subject to applicable law, you possess the right to: <br />
            Solicit access to the personal data we have collected about you.
            Review, modify, or solicit the deletion of your data. Secure a copy
            of the personal data we have collated about you and rectify
            inaccuracies. Request the cessation of processing your personal
            data. Should you wish to exercise any of these rights or discuss our
            data processing practices, we encourage you to reach out to us.
            Please be aware that we retain the prerogative, as permissible by
            law, to levy a reasonable fee for meeting your request or in certain
            instances, to decline your request if it is deemed excessive or
            unwarranted. <br />
            Furthermore, where permissible by local law, you retain the
            privilege to file a complaint with a competent data protection
            authority.
          </SectionText>
          <SectionTitle>Sharing of personal data</SectionTitle>
          <SectionText style={{ marginBottom: "3rem" }}>
            Ehioba & Company will not intentionally disclose or transfer your
            personal data to third parties without your consent or as otherwise
            permitted by law. We may provide access to your personal data to
            third-party service providers engaged by Sabinus & Partner by our
            client service agreements. Our protocols ensure that third-party
            service providers process personal data in alignment with this
            Privacy Policy. <br />
            Moreover, we may disclose your information if required by law, at
            the behest of law enforcement authorities or government officials,
            or to shield our property, services, and legal rights. This may
            occur in connection with investigations concerning actual or
            suspected illegal activities, or to prevent fraud, amongst other
            justifiable circumstances.
          </SectionText>
          <SectionTitle>Protecting your personal data</SectionTitle>
          <SectionText style={{ marginBottom: "3rem" }}>
            Ehioba & Company has enacted robust technical and organizational
            measures to fortify your personal data against unauthorized access,
            exposure, tampering, or destruction. Solely authorized Ehioba and
            company personnel and designated third-party service providers to
            possess access to personal data. Also, through education and
            training to relevant staff to ensure they are aware of our privacy
            obligation when handling personal data. Despite these measures, we
            must caution that unauthorized individuals may potentially gain
            access to you.
          </SectionText>
          <SectionTitle>Changes to this Privacy Policy</SectionTitle>
          <SectionText style={{ marginBottom: "3rem" }}>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. Any changes will be
            posted on our website with an updated effective date.
            <br />
            <br />
            If you have any questions, concerns, or requests regarding this
            Privacy policy, please contact us. Thank you.
          </SectionText>
        </SectionContainer>
      </Section>
      <Footer />
    </>
  );
};

export default Support;
