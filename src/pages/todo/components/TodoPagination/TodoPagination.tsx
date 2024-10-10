import { Group, NativeSelect, Pagination } from "@mantine/core";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Props {
  page: number;
  total: number;
}
const TodoPagination = ({ total, page }: Props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const onPageChange = (page: number) => {
    searchParams.set("page", page.toString());
    // navigate(`?${searchParams.toString()}`);
    navigate({ pathname: "/todo", search: `${searchParams.toString()}` });
  };

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("limit", event.target.value);
    // navigate(`?${searchParams.toString()}`);
    navigate({ pathname: "/todo", search: `${searchParams.toString()}` });
  };

  return (
    <Group mt={20} justify="flex-end">
      <Pagination
        total={total}
        withEdges
        value={Number(page) || 1}
        onChange={onPageChange}
      />
      <NativeSelect
        defaultValue="5"
        data={["5", "10"]}
        onChange={(event) => onSelectChange(event)}
      />
    </Group>
  );
};

export default TodoPagination;
