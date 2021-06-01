const {model} = require("mongoose");
const Guitar = model("Guitar");

module.exports.getGuitarList = (req, res) => {
    let [offset, count] = [0, 5];
    if (req.query.offset)
        offset = parseInt(req.query.offset);

    if (req.query.count) {
        count = parseInt(req.query.count);
        count = count > 5 ? 5 : count;
    }
    Guitar
        .find()
        .skip(offset)
        .limit(count)
        .then(guitars => res.status(200).json(guitars))
        .catch(err => res.status(500).json({message: "Internal server error" + err}))
}

module.exports.getGuitarBrands = (req, res) => {
    Guitar
        .find({})
        .distinct("brand")
        .then(brands => res.status(200).json(brands))
        .catch(err => res.status(500).json({message: `Internal server error ${err}`}))
}

module.exports.getGuitarById = (req, res) => {
    Guitar.findById(req.params._id)
        .then((guitar) => {
            if (!guitar)
                res.status(404).send({message: "Guitar not found"})
            else
                res.status(200).send(guitar);
        })
        .catch((err) => res.status(500).send({message: "Internal server error " + err}))
}

module.exports.createGuitar = (req, res) => {
    Guitar.create(req.body)
        .then(guitar => res.status(201).send(guitar))
        .catch(err => res.status(500).json({message: "Internal server error " + err}))
}

module.exports.deleteGuitarById = (req, res) => {
    Guitar.findByIdAndDelete(req.params._id)
        .then(guitar => {
            if (!guitar)
                res.status(404).send({message: "Guitar not found"})
            else
                res.status(204).send();
        })
        .catch(err => res.status(500).send({message: "Internal server error " + err}))
}

module.exports.updateGuitar = (req, res) => {
    Guitar.findByIdAndUpdate(req.params._id, {
        ...req.body,
        updatedOn: Date.now()
    }, {new: true})
        .then((err, guitar) => {
            if (!guitar)
                res.status(404).json({message: "Guitar not found"})
            else
                res.status(200).send(guitar);
        })
        .catch(err => res.status(500).send({message: "Internal server error " + err}))
}


