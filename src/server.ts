import express from 'express';

const app = express();

app.use(express.json());

app.get('/Plants', (req, res) => {
  res.json({
    "id": 1,
    "name": "Aningapara",
    "about": "É uma espécie tropical que tem crescimento rápido e fácil manuseio.",
    "water_tips": "Mantenha a terra sempre húmida sem encharcar. Regue 2 vezes na semana.",
    "photo": "https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/1.svg",
    "environments": ["living_room", "kitchen"],
    "frequency": {
      "times": 2,
      "repeat_every": "week"
    }
  });
})

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});