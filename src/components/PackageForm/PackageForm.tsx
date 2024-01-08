import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRepositories } from "../../state/index";

export const PackageForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<FormDataEntryValue | null>();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.target as HTMLFormElement;
    const formData = new FormData(formEl);
    const value = formData.get("search");
    setSearchTerm(value);
    dispatch(searchRepositories(value));
    formEl.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="search" type="text" />
        <button type="submit">Search for Packages</button>
      </form>
    </>
  );
};
