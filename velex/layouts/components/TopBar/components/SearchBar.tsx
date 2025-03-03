import { useState } from "react";
import { Form } from "react-bootstrap";
import { Icon } from "@iconify/react";

const SearchBar = ({ placeholder = "Search...", onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <Form className="app-search d-none d-md-block me-2" onSubmit={handleSubmit}>
      <div className="position-relative">
        <Form.Control
          type="search"
          placeholder={placeholder}
          autoComplete="off"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <Icon
          icon="solar:magnifer-linear"
          className="search-widget-icon"
        ></Icon>
      </div>
    </Form>
  );
};

export default SearchBar;
