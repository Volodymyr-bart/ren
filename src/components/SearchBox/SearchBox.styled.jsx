import styled from "styled-components";
import { HiSearch } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 16px 16px 16px 48px;
  font: inherit;
`;

export const IconFind = styled(HiSearch)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
`;
export const IconClose = styled(AiOutlineCloseCircle)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  &:hover {
    cursor: pointer;
  }
`;
