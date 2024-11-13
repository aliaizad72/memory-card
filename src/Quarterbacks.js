let id = 0;
const lowerKebab = (name) => name.replace(" ", "-").toLowerCase();

const generateUrl = (name) => {
  const path = "./assets/" + lowerKebab(name) + ".png";
  return new URL(path, import.meta.url).href;
};
export const quarterbacks = [
  "Josh Allen",
  "Tua Tagovailoa",
  "Jacoby Brissett",
  "Aaron Rodgers",
  "Lamar Jackson",
  "Joe Burrow",
  "Deshaun Watson",
  "Russell Wilson",
  "C.J. Stroud",
  "Anthony Richardson",
  "Trevor Lawrence",
  "Will Levis",
  "Bo Nix",
  "Patrick Mahomes",
  "Gardner Minshew",
  "Justin Herbert",
  "Dak Prescott",
  "Daniel Jones",
  "Jalen Hurts",
  "Jayden Daniels",
  "Caleb Williams",
  "Jared Goff",
  "Jordan Love",
  "Sam Darnold",
  "Kirk Cousins",
  "Bryce Young",
  "Derek Carr",
  "Baker Mayfield",
  "Kyler Murray",
  "Matthew Stafford",
  "Brock Purdy",
  "Geno Smith",
].map((name) => {
  return {
    id: id++,
    name,
    image: generateUrl(name),
    clicked: false,
  };
});
