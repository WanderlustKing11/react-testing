import ExpandableText from '../components/ExpandableText';
import Onboarding from "../components/Onboarding";
import TermsAndConditions from '../components/TermsAndConditions';

const PlaygroundPage = () => {
  const sample = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eaque non magnam? Eos corrupti impedit cumque, ea est incidunt, obcaecati ut qui rerum aliquam sed numquam hic illo magni assumenda ducimus voluptate quo quibusdam iusto dolorem repudiandae. Dolores eius ea, perspiciatis quidem quis, voluptas accusantium porro numquam velit dignissimos, aut placeat molestias maxime veritatis impedit quaerat veniam in aspernatur eos hic ab necessitatibus! Perspiciatis placeat sed nobis error nulla, culpa mollitia officiis, sit quibusdam distinctio blanditiis soluta deserunt fugit totam enim nihil doloribus. Eligendi obcaecati placeat provident magni tempore perspiciatis illum, eveniet fugit architecto alias nisi explicabo id a odio.'
  return <ExpandableText text={sample} />;
};

export default PlaygroundPage;
