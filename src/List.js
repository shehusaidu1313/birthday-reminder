import React from "react";

const List = ({ people }) => {
  // const removePerson = (id) => {
  //   const newPerson = person.filter((person) => person.id !== id);
  // };
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div className="details">
              <h4>{name}</h4>
              <p>{age} years</p>
              {/* <button className="btn inline">remove</button> */}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
