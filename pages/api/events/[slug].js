const { events } = require("./data.json");

export default (req, res) => {
  try {
    if (req.method === "GET") {
      let selectedEvent = events.filter(({ slug }) => slug === req.query.slug);
      res.status(200).json({ event: selectedEvent });
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ error: `${req.method} Method not Allowed` });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
