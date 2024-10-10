import { rem, TextInput } from "@mantine/core";
import { useDebouncedCallback } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;

const TodoSearch = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState("");

  const handleSearch = useDebouncedCallback(() => {
    searchParams.set("search", value);
    navigate({ pathname: "/todo", search: `${searchParams.toString()}` });
  }, 350);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    handleSearch();
  };

  return (
    <TextInput
      placeholder="Search..."
      size="sm"
      rightSection={icon}
      value={value}
      onChange={onChange}
      defaultValue={searchParams?.get("search")?.toString() || ""}
    />
  );
};

export default TodoSearch;
