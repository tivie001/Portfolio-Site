import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import fetch from "isomorphic-unfetch";
import Link from 'next/link'
import Button from "@material-ui/core/Button";
import React from "react";
import Layout from "./Layout";
import TextField from "@material-ui/core/TextField";

const titleStyle = {
    fontFamily: "Pokemon Solid",
    fontSize: "4rem",
    color: "#FFDE00",
    textShadow: "5px 5px #3B4CCA",
    letterSpacing: "5px",
    margin: "0 0 1rem 0"
};
const secondBtn = {
    height: "50px",
    width: "100%",
    borderRadius: "20px",
    fontFamily: "Avenir",
    fontSize: "18px",
    fontWeight: "900",
    display: "flex",
    alignItems: 'center',
    color: "white",
    textShadow: "1px 1px black",
    backgroundColor: "#3B4CCA"
};
const cardTitle = {
    margin: "0",
    fontWeight: "800",
};
const linkStyle = {
    textDecoration: "none",
};
const pokemonCard = {
    width: "100px",
    padding: "20px",
    textAlign: "center",
    marginRight: "1rem",
    marginTop: "1rem",
    boxShadow: "6px darkgrey",
    borderRadius: "20px",
    fontFamily: "Avenir",
    color: "black",
    backgroundColor: "#ebebeb"
};
const textField = {
    width: "500px",
    marginBottom: "1rem"
};

const PokemonCards = props => {
    return (
        <Grid item xs={6} sm={2}>
            <Paper style={pokemonCard}>
                <h3 style={cardTitle}>{props.name.charAt(0).toUpperCase() +
                props.name.slice(1)}</h3>
            </Paper>
        </Grid>
    )
};

const Index = ({ pokemon }) => (
    <Layout>
        <Container maxWidth="lg">
            <Grid container direction="column" justify="center" alignItems="center">
                <h1 style={titleStyle}>Pokemon PokéDex</h1>
            </Grid>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={6} sm={4}>
                    <Link href="/random">
                        <Button variant="contained" color="primary" style={secondBtn}>
                            Random Pokémon
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                {pokemon.map((details, i) => {
                    return (
                        <Link href={`pokemon/${i + 1}`} as={`pokemon/${i + 1}`}>
                            <a style={linkStyle}>
                                <PokemonCards name={details.name} key={i + 1}/>
                            </a>
                        </Link>
                    )
                })}
            </Grid>
        </Container>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=807`);
    const data = await res.json();
    const pokemon = data.results;

    return { pokemon }
};
export default Index;
