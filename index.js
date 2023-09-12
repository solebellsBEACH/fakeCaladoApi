const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

function getRandomNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}

app.get('/', (req, res) => {
  const data = {
    port_after: getRandomNumber(),
    port_amidship: getRandomNumber(),
    port_forward: getRandomNumber(),
    starboard_after: getRandomNumber(),
    starboard_amidship: getRandomNumber(),
    starboard_forward: getRandomNumber(),
  };

  res.json(data);
});

const PORT = process.env.PORT || 8500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
