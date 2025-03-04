import { Form } from "react-bootstrap";
import { Icon } from "@iconify/react";

const SearchBar = () => {
  return (
    <Form className="app-search d-none d-md-block me-2">
      <div className="position-relative">
        <Form.Control type="input" placeholder="Search..." />

        <Icon
          icon="solar:magnifer-linear"
          className="search-widget-icon"
        ></Icon>
      </div>
    </Form>
  );
};

export default SearchBar;
