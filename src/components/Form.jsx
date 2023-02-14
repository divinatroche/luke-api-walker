import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Form() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    resource: "people",
    id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${formState.resource}/${formState.id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
        <div>
            <p>Search for:</p>
            <select
              name="resource"
              id="resource"
              className="form-select"
              value={formState.resource}
              onChange={handleChange}
            >
              <option value="people">People</option>
              <option value="planets">Planets</option>
              <option value="starships">Starships</option>
              <option value="vehicles">Vehicles</option>
              <option value="films">Films</option>
            </select>
            <p>ID:</p>
            <input
              type="number"
              name="id"
              id="id"
              className="form-control"
              min="0"
              max="100"
              value={formState.id}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
