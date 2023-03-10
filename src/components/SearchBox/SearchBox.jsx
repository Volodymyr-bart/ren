import { IconClose, IconFind, Input, Wrapper } from "./SearchBox.styled";

const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <IconFind />
      <Input
        type="text"
        value={value}
        placeholder="Filter by name..."
        onChange={(e) => onChange(e.target.value)}
      />
      {value && <IconClose onClick={() => onChange("")} />}
    </Wrapper>
  );
};

export default SearchBox;
