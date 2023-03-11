import { BiArrowBack } from "react-icons/bi";
import { GoBackLink } from "./GoBack.styled";

const GoBack = ({ backLinkHref }) => {
  return (
    <>
      <GoBackLink to={backLinkHref}>
        <BiArrowBack style={{ width: "24px", height: "24px" }} />
        <p>GO BACK</p>
      </GoBackLink>
    </>
  );
};

export default GoBack;
