const random = () =>
    `https://source.unsplash.com/random/800x700?ls=${Math.random()}`;

const arrayQuantity = [...Array(3).keys()];

const data = arrayQuantity.map((item, index) => ({
    preview: random(),
    tooltip: `Ahhhhhh${index}`,
    options: arrayQuantity.map(random),
}));

export default data;
