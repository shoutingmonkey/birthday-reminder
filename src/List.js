// List component to render lists of people

const List = ({ people, setPeople }) => {
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button onClick={() => removePerson(id)}>remove</button>
          </article>
        );
      })}
    </>
  );
};

export default List;
