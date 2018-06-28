import React from "react";

const Letters = props => {
  console.log(props);
  //   const letter = props.letters.map(letter => {
  //     return <div>{letter}</div>;
  //   });
  const styles = {
    main: {
      display: "grid",
      "grid-template-columns": "repeat(4, 1fr)",
      "justify-items": "center",
      "grid-gap": "2px"
    },
    letter: {
      background: "green",
      width: "100%",
      height: "50px"
    }
  };
  return (
    <div style={styles.main}>
      {props.letters.map(letter => <div style={styles.letter}>{letter}</div>)}
    </div>
  );
};

export default Letters;
