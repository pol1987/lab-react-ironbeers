import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BeerForm() {
  // 1 crear los estados

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleTaglineChange = (e) => setTagline(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleFirstBrewedChange = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTipsChange = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevelChange = (e) =>
    setAttenuationLevel(e.target.value);
  const handleContributedByChange = (e) => setContributedBy(e.target.value);

  const handSubmit = async (e) => {
    e.preventDefault();

    try {
      //  donde mandamos la info para crear la nueva cerveza
      const newBeer = {
        name,
        tagline,
        description,
        firstBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy,
      };

      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
      navigate("/beers")
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <form onSubmit={handSubmit}>
        <br />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <br />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tageline"
          value={tagline}
          onChange={handleTaglineChange}
        />
        <br />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="dedscription"
          value={description}
          onChange={handleDescriptionChange}
        />
        <br />

        <label htmlFor="first-brewed">First Brewed</label>
        <input
          type="text"
          name="first-brewed"
          value={firstBrewed}
          onChange={handleFirstBrewedChange}
        />

        <br />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewersTips}
          onChange={handleBrewersTipsChange}
        />
        <br />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          type="text"
          name="attenuation_level"
          value={attenuationLevel}
          onChange={handleAttenuationLevelChange}
        />

        <br />

        <label htmlFor="contributed_by">Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={contributedBy}
          onChange={handleContributedByChange}
        />
        <br />
        <button>Agregar</button>
      </form>
    </div>
  );
}

export default BeerForm;
