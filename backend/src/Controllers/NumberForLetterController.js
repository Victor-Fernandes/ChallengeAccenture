class NumberForLetter {
  async store(req, res) {
    const number = req.body;

    return res.json(number)
  }
}

export default new NumberForLetter();