import styled from "styled-components";
import AutofitGrid from "components/AutofitGrid";
import BasicCard from "components/BasicCard";
import Page from "components/Page";
import SectionTitle from "components/SectionTitle";
import { media } from "utils/media";
import Icon from "../../components/Icon";
import {
  faChalkboardTeacher,
  faChartLine,
  faFileAlt,
  faFileSignature,
  faGavel,
  faHandshake,
  faMoneyBillWave,
  faMoneyCheckAlt,
  faPeopleArrows,
  faPoll,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import FadeAnimationComponent from "@/components/FadeInAnimation";
import AboutSection from "../../components/AboutSection";

const SERVICES = [
  {
    title: "Talent Acquisition and Recruitment",
    description:
      "We excel in talent acquisition and recruitment by employing tailored strategies for your organization. We conduct comprehensive job profiling to identify key requirements and candidate characteristics. Our team ensures a meticulous candidate screening and selection process. We streamline recruitment procedures to save your time and resources.",
    points: [
      "Access to Top Talent: Our expertise attracts the best candidates in your industry.",
      "Reduced Recruitment Costs: Efficient processes save you money.",
      "Culture Fit Hires: Candidates align with your organizational culture and goals.",
      "Time Savings: We expedite the recruitment process.",
      "Quality Hires: High-quality candidates for your positions.",
    ],
    imageUrl: "https://example.com/images/talent-acquisition.png",
    icon: faPeopleArrows,
  },
  {
    title: "Payroll Management, Including Payroll Software",
    description:
      "We specialize in efficient and accurate payroll management services. Our team ensures timely payroll processing and compliance with tax regulations. We provide expert payroll advisory and recommend suitable payroll software solutions.",
    points: [
      "Error-Free Payroll: Accurate and timely payments for your employees.",
      "Compliance Assurance: We handle tax regulations and payroll compliance.",
      "Cost Savings: Efficient payroll processes reduce operational costs.",
      "Time Efficiency: Focus on core operations while we manage your payroll.",
      "Expert Guidance: Access to payroll experts and suitable payroll software solutions.",
    ],
    imageUrl: "https://example.com/images/payroll-management.png",
    icon: faMoneyBillWave,
  },
  {
    title: "HR Outsourcing",
    description:
      "We offer comprehensive HR outsourcing services, allowing your organization to focus on core operations. Our dedicated experts handle various HR functions, ensuring efficiency and cost-effectiveness.",
    points: [
      "Efficiency Gains: Outsourcing HR functions streamlines operations.",
      "Cost Reduction: Reduce HR operational costs and overhead.",
      "Access to HR Expertise: Tap into our team's HR knowledge and experience.",
      "Focus on Strategy: Allocate more time for strategic initiatives.",
      "Comprehensive HR Services: We cover various HR aspects.",
    ],
    imageUrl: "https://example.com/images/hr-outsourcing.png",
    icon: faHandshake,
  },
  {
    title: "HR Compliance and Legal Advisory",
    description:
      "We provide expert guidance on HR compliance and legal matters. Our team ensures that your organization complies with labor laws and regulations. We help minimize legal risks associated with HR practices.",
    points: [
      "Legal Compliance: Assurance of compliance with labor laws and regulations.",
      "Risk Reduction: Minimize legal risks related to HR practices.",
      "Peace of Mind: Confidence in HR legal matters.",
      "Expert Advisory: Access to HR legal experts for guidance.",
      "Focus on Core: Concentrate on your core business while we handle compliance.",
    ],
    imageUrl: "https://example.com/images/hr-compliance.png",
    icon: faGavel,
  },
  {
    title: "Training and Development, Including Custom LMS Solutions",
    description:
      "We excel in designing tailored training programs to enhance employee skills and knowledge. We offer ready-made training solutions and curate Learning Management Systems (LMS) specific to your organization's unique needs.",
    points: [
      "Enhanced Employee Capabilities: Improved skills and knowledge through customized training.",
      "Higher Productivity: Employees are better equipped to contribute effectively.",
      "Leadership Development: Nurturing future leaders within your organization.",
      "Improved Performance: Better-equipped employees deliver higher performance.",
      "Custom LMS Solutions: Access to Learning Management Systems designed specifically for your organization's needs.",
    ],
    imageUrl: "https://example.com/images/training-development.png",
    icon: faChalkboardTeacher,
  },
  {
    title: "HR Policy and Procedure Development",
    description:
      "We specialize in developing HR policies and procedures that align with your organization's objectives. Our team ensures transparent, fair, and structured HR processes through policy development.",
    points: [
      "Transparent HR Processes: Clearly defined policies and procedures.",
      "Fair Practices: Policies promote equity in your organization.",
      "Structured HR Operations: Streamlined processes for efficiency.",
      "Compliance Assurance: Policies align with legal requirements.",
      "Customized Solutions: Policies tailored to your specific needs.",
    ],
    imageUrl: "https://example.com/images/hr-policy-development.png",
    icon: faFileSignature,
  },
  {
    title: "CV Writing, Revision, and LinkedIn Optimization",
    description:
      "We specialize in crafting and revising compelling CVs that showcase your skills and experience. We optimize LinkedIn profiles to enhance your online professional presence.",
    points: [
      "Standout CVs: Professionally crafted CVs grab the attention of employers.",
      "Improved Job Prospects: Increase your chances of landing interviews.",
      "LinkedIn Optimization: Elevate your online professional presence.",
      "Networking Advantage: Connect with industry professionals on LinkedIn.",
      "Career Advancement: Position yourself for career growth opportunities.",
    ],
    imageUrl: "https://example.com/images/cv-writing.png",
    icon: faFileAlt,
  },
  {
    title: "Interview Coaching",
    description:
      "We offer expert interview coaching to help you excel in job interviews. Our experienced coaches provide personalized guidance to boost your interview confidence and skills.",
    points: [
      "Interview Success: Gain the skills and confidence to excel in job interviews.",
      "Confidence Boost: Overcome nervousness and perform at your best.",
      "Tailored Coaching: Personalized coaching to address your unique needs.",
      "Effective Communication: Improve your interview communication skills.",
      "Land Your Dream Job: Increase your chances of securing your desired job offers.",
    ],
    imageUrl: "https://example.com/images/interview-coaching.png",
    icon: faUserTie,
  },
  {
    title: "Compensation and Benefits Review, Including Salary Surveys",
    description:
      "We conduct comprehensive reviews of compensation and benefits structures, including industry-specific salary surveys. We optimize compensation packages to attract and retain top talent based on data-driven insights.",
    points: [
      "Data-Driven Insights: Salary surveys provide industry-specific compensation data.",
      "Competitive Compensation: Ensure your packages align with market standards.",
      "Talent Attraction: Attract and retain top talent with data-backed benefits.",
      "Cost Efficiency: Optimize compensation costs while remaining competitive.",
      "Employee Satisfaction: Boost employee satisfaction through data-driven benefits.",
    ],
    imageUrl: "https://example.com/images/compensation-benefits.png",
    icon: faMoneyCheckAlt,
  },
  {
    title: "Performance Management",
    description:
      "We specialize in designing and implementing effective performance management systems. Our strategies align employee goals with organizational objectives for improved productivity and growth.",
    points: [
      "Enhanced Performance: Drive higher levels of employee productivity.",
      "Goal Alignment: Align individual goals with your organization's objectives.",
      "Feedback Culture: Foster a culture of continuous feedback and improvement.",
      "Talent Development: Identify and nurture high-potential employees.",
      "Data-Driven Insights: Access performance data for informed decision-making.",
    ],
    imageUrl: "https://example.com/images/performance-management.png",
    icon: faChartLine,
  },
  {
    title: "Employee Engagement Survey",
    description:
      "We conduct comprehensive employee engagement surveys. We analyze survey data to identify areas for improvement and develop strategies to boost employee satisfaction and engagement.",
    points: [
      "Increased Engagement: Improve employee satisfaction and retention.",
      "Productivity Boost: Engaged employees are more productive.",
      "Actionable Insights: Data-driven insights for targeted improvements.",
      "Talent Retention: Reduce turnover with higher employee satisfaction.",
      "Customized Strategies: Tailored engagement strategies for your organization.",
    ],
    imageUrl: "https://example.com/images/employee-engagement-survey.png",
    icon: faPoll,
  },
];
export function getServiceDetails(slug: string) {}
export default function ServicesPage() {
  return (
    <Page
      imgURL="/services_stock.jpg"
      title="Services"
      description="Elit aute do nisi Lorem id ea culpa sint duis eu tempor dolore elit."
    >
      <Wrapper>
        {/* <SectionTitle>Check out this quick introduction</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" /> */}
        {/* "Welcome to [Your Company Name], your trusted partner in human resources management. At the heart of every thriving organization lies a strong and well-managed workforce, and that's where we come in. Our dedicated team of HR experts is committed to helping businesses of all sizes navigate the ever-evolving landscape of human resources with ease. Whether you're seeking assistance with talent acquisition, employee benefits, compliance, or any other HR-related need, we have the expertise and solutions to streamline your operations and empower your workforce. With a focus on delivering personalized services tailored to your unique business goals, we aim to foster a culture of growth, productivity, and employee well-being. Explore our comprehensive range of HR services designed to drive your organization's success." */}
        <AboutSection title="We offer these professional services">
          Choose Core Maestro Management for an approach that combines
          experience, cost-efficiency, relationship-building, humility,
          customization, and a dedication to continuous improvement. Your HR
          challenges are our opportunities for success.
        </AboutSection>
        <CustomAutofitGrid>
          {SERVICES.map((singleFeature, idx) => (
            <FadeAnimationComponent>
              <BasicCard
                useImage={false}
                FaIcon={singleFeature.icon}
                key={singleFeature.title}
                istransparent={true}
                {...singleFeature}
              />
            </FadeAnimationComponent>
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 60rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 30rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`;
