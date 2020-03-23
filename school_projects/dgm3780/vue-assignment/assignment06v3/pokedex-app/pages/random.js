import fetch from "isomorphic-unfetch";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const randomPokemonCard = {
    height: "380px",
    padding: "20px",
    marginTop: "2rem",
    boxShadow: "6px darkgrey",
    borderRadius: "20px",
    fontFamily: "Avenir",
    color: "black",
    backgroundColor: "#ebebeb",
    border: "12px solid #FFDE00"
};

const cardTitle = {
    fontSize: "1.5rem",
    margin: "0",
    fontWeight: "900",
};
const imageStyle = {
    textAlign: "center",
    height: "200px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
};
const imageBg = {
    backgroundColor: "#b7b7b7",
    borderRadius: "10px",
};
const detailsStyles = {
    fontWeight: "bold",
    paddingRight: ".5rem"
};
const linkStyle = {
    textDecoration: "none",
    color: "white"
};
const gridTop = {
    marginTop: "1.5rem"

};

const RandomPokemon = props => {
    return (
        <Container maxWidth="lg">
            <Grid container direction="column" justify="center" alignItems="center" style={gridTop}>
                <Button variant="contained" color="primary">
                    <Link href={"/"}>
                        <a style={linkStyle}>Menu</a>
                    </Link>
                </Button>
            </Grid>
            <Grid container justify="center">
                <Grid item xs={3}>
                    <Paper style={randomPokemonCard}>
                        <h3 style={cardTitle}>{props.pokemon.name.charAt(0).toUpperCase() +
                        props.pokemon.name.slice(1)}</h3>
                        <div style={imageBg}>
                            <img style={imageStyle} src={props.pokemon.sprites.front_default} alt={props.pokemon.name}/>
                        </div>
                        <p><span style={detailsStyles}>Height:</span> {props.pokemon.height}</p>
                        <p><span style={detailsStyles}>Weight:</span> {props.pokemon.weight}</p>
                        <p><span style={detailsStyles}>Type:</span> {props.pokemon.types[0].type.name}</p>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

    )
};
RandomPokemon.getInitialProps = async function() {
    const randomId = Math.floor(Math.random() * 808);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await res.json();

    return { pokemon: data }
};
export default RandomPokemon;