# Topic-Visualizer
This project is a Proof-Of-Concept for the usage of a neo4j database and can visualize document-topics (hashtags) with their most similar topics and their sentiments

## Example
[example!](screenshot.png)

## Dependencies 
- NodeJS >= 4.5.0
- Neo4j >= 3.0

The neo4j needs a database with documents labeled as `Document` with properties `article_id` and `sentiment`. There needs to be a relationship to another entity called `Topic` with a property `name`. 
```
(d:Document {article_id:"123", sentiment:"positive"})-[:HAS_TOPIC]->(t:Topic {name:"#prime"})
```
... would be a valid set.

## BUILD-UP 
```
npm install
```

## How to execute 
A running instance of a neo4j server is necessary (currently at `localhost:7474`)

```
node app.js
```
Starts the testserver on `localhost:3000`
The testpage can be found at `localhost:3000/TestLinkurious.html`
